from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy.ext.declarative import declarative_base
from settings import Settings
import os

settings = Settings()

# Debug: Print the DATABASE_URL (masked for security)
database_url = settings.DATABASE_URL
if database_url:
    # Mask the password in the URL for logging
    if '@' in database_url:
        parts = database_url.split('@')
        if len(parts) == 2:
            masked_url = parts[0].split(':')[0] + ':***@' + parts[1]
        else:
            masked_url = "***"
    else:
        masked_url = "***"
    print(f"Database URL format: {masked_url}")
else:
    print("ERROR: DATABASE_URL is not set!")
    raise ValueError("DATABASE_URL environment variable is required")

engine = create_engine(settings.DATABASE_URL)

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()
