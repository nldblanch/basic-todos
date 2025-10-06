import json
import os
import sys
import random
from datetime import datetime
from pathlib import Path

# Add the parent directory to the path to import our modules
sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

from database import SessionLocal
from models import BlogPosts, Users

def get_user_id_range():
    """Get the min and max user IDs from the database"""
    db = SessionLocal()
    try:
        # Get min and max user IDs
        min_id = db.query(Users.id).order_by(Users.id.asc()).first()
        max_id = db.query(Users.id).order_by(Users.id.desc()).first()
        
        if min_id is None or max_id is None:
            print("No users found in database. Please insert users first.")
            return None, None
            
        return min_id[0], max_id[0]
    except Exception as e:
        print(f"Error getting user ID range: {str(e)}")
        return None, None
    finally:
        db.close()

def process_json_to_blog_post(json_data, min_user_id, max_user_id):
    """Convert JSON data to BlogPosts format"""
    
    # Extract data according to specifications
    title = json_data.get('title', '')
    
    # Summary is first line of text
    text = json_data.get('text', '')
    summary = text.split('\n')[0] if text else ''
    content = text
    
    # Category and tags
    categories = json_data.get('categories', [])
    category = categories[0] if categories else ''
    tags = ','.join(categories) if categories else ''
    
    # Read time calculation
    read_time = max(1, int(len(content.split()) / 200))
    
    # Image from thread
    thread = json_data.get('thread', {})
    img = thread.get('main_image', '')
    country_code = thread.get('country', '')
    # Author information
    author = json_data.get('author', '')
    
    # If author is null or empty, use thread.site as fallback
    if not author or author.strip() == '':
        thread = json_data.get('thread', {})
        author = thread.get('site', 'Unknown Author')
    
    author_id = random.randint(min_user_id, max_user_id)
    
    # Published date
    published_at = json_data.get('published', '')
    
    # Random boolean values
    is_featured = random.choice([True, False])
    is_published = True  # Always true as specified
    is_archived = random.choice([True, False])
    
    return {
        'title': title,
        'summary': summary,
        'content': content,
        'category': category,
        'tags': tags,
        'read_time': read_time,
        'img': img,
        'country_code': country_code,
        'author': author,
        'author_id': author_id,
        'published_at': published_at,
        'is_featured': is_featured,
        'is_published': is_published,
        'is_archived': is_archived
    }

def process_directory(directory_path):
    """Process all JSON files in a directory"""
    
    # Get user ID range first
    min_user_id, max_user_id = get_user_id_range()
    if min_user_id is None or max_user_id is None:
        return
    
    print(f"User ID range: {min_user_id} to {max_user_id}")
    
    # Get all JSON files in the directory
    json_files = list(Path(directory_path).glob('*.json'))
    
    if not json_files:
        print(f"No JSON files found in {directory_path}")
        return
    
    print(f"Found {len(json_files)} JSON files to process")
    
    # Create database session
    db = SessionLocal()
    
    try:
        processed_count = 0
        error_count = 0
        
        for json_file in json_files:
            try:
                # Read and parse JSON file
                with open(json_file, 'r', encoding='utf-8') as f:
                    json_data = json.load(f)
                
                # Convert to blog post format
                blog_post_data = process_json_to_blog_post(json_data, min_user_id, max_user_id)
                
                # Create BlogPosts instance
                blog_post = BlogPosts(**blog_post_data)
                
                # Add to database
                db.add(blog_post)
                processed_count += 1
                
                if processed_count % 100 == 0:
                    print(f"Processed {processed_count} files...")
                    
            except Exception as e:
                print(f"Error processing {json_file}: {str(e)}")
                error_count += 1
                continue
        
        # Commit all changes
        db.commit()
        print(f"Successfully processed {processed_count} files")
        if error_count > 0:
            print(f"Encountered {error_count} errors")
            
    except Exception as e:
        print(f"Database error: {str(e)}")
        db.rollback()
    finally:
        db.close()

def main():
    """Main function to handle command line arguments"""
    
    if len(sys.argv) != 2:
        print("Usage: python processor.py <directory_name>")
        print("Example: python processor.py disaster_accident_1")
        sys.exit(1)
    
    directory_name = sys.argv[1]
    directory_path = os.path.join(os.path.dirname(__file__), directory_name)
    
    if not os.path.exists(directory_path):
        print(f"Directory {directory_path} does not exist")
        sys.exit(1)
    
    print(f"Processing directory: {directory_path}")
    process_directory(directory_path)

if __name__ == "__main__":
    main()

# cd backend/data
# python processor.py disaster_accident_1