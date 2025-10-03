from fastapi import FastAPI
from models import Base
from database import engine
from routers import auth, blog_posts, users
from fastapi.middleware.cors import CORSMiddleware
from settings import Settings
settings = Settings()
app = FastAPI()
if settings.all_cors_origins:
        app.add_middleware(
            CORSMiddleware,
            allow_origins=settings.all_cors_origins,
            allow_credentials=True,
            allow_methods=["*"],
            allow_headers=["*"],
        )
Base.metadata.create_all(bind=engine)


@app.get("/healthy")
def health_check():
    return {'status': 'Healthy'}


app.include_router(auth.router)
app.include_router(blog_posts.router)
app.include_router(users.router)
