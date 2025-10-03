import os
from typing import Literal
from pydantic import PostgresDsn, computed_field, field_validator
from pydantic_settings import BaseSettings, SettingsConfigDict



class Settings(BaseSettings):
    # Required
    DATABASE_URL: str
    PROJECT_NAME: str
    
    FRONTEND_HOST: str = "http://localhost:5173"
    ENVIRONMENT: Literal["local", "staging", "production"] = "local"
    SECRET_KEY: str
    ALGORITHM: str
    
    @field_validator('PROJECT_NAME')
    def validate_project_name(cls, v):
        if not v:
            raise ValueError('PROJECT_NAME is required')
        return v

    @field_validator('BACKEND_CORS_ORIGINS', mode='before')
    def validate_cors_origins(cls, v):
        if isinstance(v, str):
            # Split by comma if it's a string
            origins = [origin.strip() for origin in v.split(",")]
        elif isinstance(v, list):
            origins = v
        else:
            return []
        
        # Ensure all origins have proper protocol
        validated_origins = []
        for origin in origins:
            if origin and not origin.startswith(("http://", "https://")):
                validated_origins.append(f"https://{origin}")
            elif origin:
                validated_origins.append(origin)
        
        return validated_origins

    model_name: str = "all-mpnet-base-v2"
    debug: bool = False
    
    model_config = SettingsConfigDict(
        env_file= ".env",
        protected_namespaces= ("settings_",),
        env_ignore_empty= True,
        extra= "ignore",
    )


    BACKEND_CORS_ORIGINS: list[str] = []

    @computed_field  # type: ignore[prop-decorator]
    @property
    def all_cors_origins(self) -> list[str]:
        return [origin.rstrip("/") for origin in self.BACKEND_CORS_ORIGINS] + [
            self.FRONTEND_HOST
        ]

settings = Settings() # type: ignore