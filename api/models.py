from database import Base
from sqlalchemy import Column, Integer, String, Boolean, ForeignKey, DateTime
from datetime import datetime, timezone


class Users(Base):
    __tablename__ = 'users'

    # --- Primary Key ---
    id = Column(Integer, primary_key=True, index=True)

    # --- Authentication & Identity ---
    email = Column(String, unique=True)
    username = Column(String, unique=True)
    hashed_password = Column(String)
    role = Column(String)

    # --- Profile Information ---
    first_name = Column(String)
    last_name = Column(String)
    phone_number = Column(String, default='')
    profile_image = Column(String, default='')
    bio = Column(String, default='')
    location = Column(String, default='')
    website = Column(String, default='')

    # --- Timestamps ---
    joined_at = Column(DateTime, default=lambda: datetime.now(timezone.utc))
    last_post_at = Column(DateTime, default=lambda: datetime.now(timezone.utc))



class BlogPosts(Base):
    __tablename__ = 'blog_posts'

    # --- Primary Key ---
    id = Column(Integer, primary_key=True, index=True)

    # --- Content ---
    title = Column(String)
    summary = Column(String)
    content = Column(String)

    # --- Metadata ---
    category = Column(String)
    tags = Column(String)
    read_time = Column(Integer)
    img = Column(String)

    # --- Author & Publication ---
    author = Column(String)
    author_id = Column(Integer, ForeignKey("users.id"))
    published_at = Column(String)

    # --- Status Flags ---
    is_featured = Column(Boolean, default=False)
    is_published = Column(Boolean, default=False)
    is_archived = Column(Boolean, default=False)
