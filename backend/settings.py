
from typing import Literal
from pydantic import PostgresDsn, computed_field, field_validator
from pydantic_settings import BaseSettings, SettingsConfigDict
from pydantic_core import MultiHostUrl


class Settings(BaseSettings):
    # Required
    DATABASE_URL: str
    PROJECT_NAME: str
    POSTGRES_USER: str
    POSTGRES_PASSWORD: str
    POSTGRES_SERVER: str
    POSTGRES_PORT: int
    POSTGRES_DB: str
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

    @computed_field  # type: ignore[prop-decorator]
    @property
    def SQLALCHEMY_DATABASE_URI(self) -> PostgresDsn:
        """Returns the appropriate database URL based on environment"""
        
        # Force IPv4 connection to avoid IPv6 issues in Vercel
        return MultiHostUrl.build(
            scheme="postgresql+psycopg2",
            username=self.POSTGRES_USER,
            password=self.POSTGRES_PASSWORD,
            host=self.POSTGRES_SERVER,
            port=self.POSTGRES_PORT,
            path=self.POSTGRES_DB,
            query={"sslmode": "require", "connect_timeout": "10"}
        )

settings = Settings() # type: ignore