
from typing import Literal
from pydantic import computed_field, field_validator
from pydantic_settings import BaseSettings, SettingsConfigDict
import os
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv(override=True)

class Settings(BaseSettings):
    # Required
    DATABASE_URL: str
    PROJECT_NAME: str

    POSTGRES_SERVER: str = os.getenv("POSTGRES_SERVER", "localhost")
    POSTGRES_USER: str = os.getenv("POSTGRES_USER", "postgres")
    POSTGRES_PASSWORD: str = os.getenv("POSTGRES_PASSWORD", "postgres")
    POSTGRES_DB: str = os.getenv("POSTGRES_DB", "app")
    POSTGRES_PORT: int
    
    FRONTEND_HOST: str = "http://localhost:5173"
    ENVIRONMENT: Literal["local", "staging", "production"] = "local"

    SECRET_KEY: str
    ALGORITHM: str
    
    @field_validator('PROJECT_NAME')
    def validate_project_name(cls, v):
        if not v:
            raise ValueError('PROJECT_NAME is required')
        return v


    model_name: str = "all-mpnet-base-v2"
    debug: bool = False
    
    model_config = SettingsConfigDict(
        env_file= ".env",
        protected_namespaces= ("settings_",),
        env_ignore_empty= True,
        extra= "ignore",
    )


    BACKEND_CORS_ORIGINS: str = ""

    @computed_field  # type: ignore[prop-decorator]
    @property
    def all_cors_origins(self) -> list[str]:
        origins = []
        if self.BACKEND_CORS_ORIGINS:
            # Split by comma and clean up
            origins = [origin.strip() for origin in self.BACKEND_CORS_ORIGINS.split(",")]
            # Ensure all origins have proper protocol
            validated_origins = []
            for origin in origins:
                if origin and not origin.startswith(("http://", "https://")):
                    validated_origins.append(f"https://{origin}")
                elif origin:
                    validated_origins.append(origin)
            origins = validated_origins
        
        return [origin.rstrip("/") for origin in origins] + [self.FRONTEND_HOST]

    @property
    def SQLALCHEMY_DATABASE_URI(self) -> str:
        """Construct database URI from components using standard psycopg2"""
        # Using synchronous driver for Python 3.13 compatibility
        return f"postgresql+psycopg2://{self.POSTGRES_USER}:{self.POSTGRES_PASSWORD}@{self.POSTGRES_SERVER}:5432/{self.POSTGRES_DB}"

settings = Settings() # type: ignore