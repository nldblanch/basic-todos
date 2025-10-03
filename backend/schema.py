from pydantic import BaseModel, EmailStr, Field, ConfigDict
from datetime import datetime
from typing import Optional

def to_camel(string: str) -> str:
    parts = string.split('_')
    return parts[0] + ''.join(word.capitalize() for word in parts[1:])

# ===== BASE CONFIGURATIONS =====

class BaseConfig:
    from_attributes = True

# ===== USER SCHEMAS =====

class UserBase(BaseModel):
    email: EmailStr
    username: str
    first_name: Optional[str] = Field(alias="firstName")
    last_name: Optional[str] = Field(alias="lastName")
    phone_number: Optional[str] = Field(alias="phoneNumber")
    profile_image: Optional[str] = Field(alias="profileImage")
    bio: Optional[str] = ""
    location: Optional[str] = ""
    website: Optional[str] = ""

    class Config(BaseConfig):
        pass

class UserCreate(UserBase):
    password: str
    role: Optional[str] = "user"

class UserUpdate(BaseModel):
    first_name: Optional[str] = Field(alias="firstName")
    last_name: Optional[str] = Field(alias="lastName")
    phone_number: Optional[str] = Field(alias="phoneNumber")
    profile_image: Optional[str] = Field(alias="profileImage")
    bio: Optional[str] = None
    location: Optional[str] = None
    website: Optional[str] = None

    class Config(BaseConfig):
        pass

class UserOut(UserBase):
    id: int
    role: str
    joined_at: datetime = Field(alias="joinedAt")
    last_post_at: datetime = Field(alias="lastPostAt")

# ===== BLOG POST SCHEMAS =====

class BlogPostBase(BaseModel):
    title: str
    summary: Optional[str] = None
    content: str
    category: Optional[str] = None
    tags: Optional[str] = None
    read_time: Optional[int] = Field(alias="readTime")
    img: Optional[str] = None

    class Config(BaseConfig):
        pass

class BlogPostCreate(BlogPostBase):
    author: str
    author_id: int
    is_featured: Optional[bool] = Field(alias="isFeatured")
    is_published: Optional[bool] = Field(alias="isPublished")

class BlogPostUpdate(BaseModel):
    title: Optional[str] = None
    summary: Optional[str] = None
    content: Optional[str] = None
    category: Optional[str] = None
    tags: Optional[str] = None
    read_time: Optional[int] = Field(alias="readTime")
    img: Optional[str] = None
    is_featured: Optional[bool] = Field(alias="isFeatured")
    is_published: Optional[bool] = Field(alias="isPublished")
    is_archived: Optional[bool] = Field(alias="isArchived")

    class Config(BaseConfig):
        pass

class BlogPostListOut(BaseModel):
    id: int
    title: str
    summary: Optional[str]
    author: str
    published_at: Optional[str]
    tags: Optional[str]
    img: Optional[str]
    is_featured: bool
    read_time: Optional[int]

    model_config = ConfigDict(
        from_attributes=True,
        populate_by_name=True,
        alias_generator=to_camel
    )

class BlogPostDetailOut(BlogPostBase):
    id: int
    author: str
    author_id: int
    published_at: Optional[str]
    is_featured: bool
    is_published: bool
    is_archived: bool

    model_config = ConfigDict(
        from_attributes=True,
        populate_by_name=True,
        alias_generator=to_camel
    )
