from typing import Annotated
from sqlalchemy.orm import Session
from fastapi import APIRouter, Depends, HTTPException, Path, status
from models import BlogPosts
from database import SessionLocal
from .auth import get_current_user
from schema import BlogPostCreate, BlogPostUpdate, BlogPostListOut, BlogPostDetailOut

router = APIRouter(
    prefix='/blog-posts',
    tags=['blog-posts']
)

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

db_dependency = Annotated[Session, Depends(get_db)]
user_dependency = Annotated[dict, Depends(get_current_user)]

### Endpoints ###
@router.get("/", response_model=list[BlogPostListOut])
async def get_all_posts(db: db_dependency):
    return db.query(BlogPosts).filter(BlogPosts.is_published == True).all()
  

@router.get("/{post_id}", response_model=BlogPostDetailOut)
async def get_post(db: db_dependency, post_id: int = Path(gt=0)):
    blog_post = db.query(BlogPosts).filter(BlogPosts.id == post_id).first()
    if blog_post is None:
        raise HTTPException(status_code=404, detail='Blog post not found.')
    return blog_post

@router.post("/", response_model=BlogPostDetailOut, status_code=status.HTTP_201_CREATED)
async def create_post(user: user_dependency, db: db_dependency, 
                     blog_post_request: BlogPostCreate):
    if user is None:
        raise HTTPException(status_code=401, detail='Authentication Failed')
    
    blog_post_model = BlogPosts(
        **blog_post_request.model_dump(),
        author_id=user.get('id')
    )
    
    db.add(blog_post_model)
    db.commit()
    db.refresh(blog_post_model)
    return blog_post_model

@router.put("/{post_id}", response_model=BlogPostDetailOut)
async def update_post(user: user_dependency, db: db_dependency,
                     blog_post_request: BlogPostUpdate,
                     post_id: int = Path(gt=0)):
    if user is None:
        raise HTTPException(status_code=401, detail='Authentication Failed')

    blog_post_model = db.query(BlogPosts).filter(BlogPosts.id == post_id)\
        .filter(BlogPosts.author_id == user.get('id')).first()
    if blog_post_model is None:
        raise HTTPException(status_code=404, detail='Blog post not found.')

    update_data = blog_post_request.model_dump(exclude_unset=True)
    for field, value in update_data.items():
        setattr(blog_post_model, field, value)

    db.add(blog_post_model)
    db.commit()
    db.refresh(blog_post_model)
    return blog_post_model

@router.delete("/{post_id}", status_code=status.HTTP_204_NO_CONTENT)
async def delete_post(user: user_dependency, db: db_dependency, 
                     post_id: int = Path(gt=0)):
    if user is None:
        raise HTTPException(status_code=401, detail='Authentication Failed')

    blog_post_model = db.query(BlogPosts).filter(BlogPosts.id == post_id)\
        .filter(BlogPosts.author_id == user.get('id')).first()
    if blog_post_model is None:
        raise HTTPException(status_code=404, detail='Blog post not found.')
    
    db.delete(blog_post_model)
    db.commit()












