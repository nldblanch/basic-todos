import os
from typing import Annotated, Any, Literal
from pydantic import AnyUrl, BeforeValidator, PostgresDsn, computed_field, field_validator
from pydantic_settings import BaseSettings, SettingsConfigDict
from pydantic_core import MultiHostUrl


def parse_cors(v: Any) -> list[str] | str:
    if isinstance(v, str) and not v.startswith("["):
        return [i.strip() for i in v.split(",")]
    elif isinstance(v, list | str):
        return v
    raise ValueError(v)

class Settings(BaseSettings):
    # Required
    DATABASE_URL: str
    PROJECT_NAME: str
    POSTGRES_SERVER: str
    POSTGRES_USER: str
    POSTGRES_PASSWORD: str = ""
    POSTGRES_DB: str = ""
    FRONTEND_HOST: str = "http://localhost:5173"
    ENVIRONMENT: Literal["local", "staging", "production"] = "local"
    SECRET_KEY: str
    ALGORITHM: str
    
    @field_validator('PROJECT_NAME')
    def validate_project_name(cls, v):
        if not v:
            raise ValueError('PROJECT_NAME is required')
        return v

    POSTGRES_PORT: int = 5432
    model_name: str = "all-mpnet-base-v2"
    debug: bool = False
    
    model_config = SettingsConfigDict(
        env_file= ".env",
        protected_namespaces= ("settings_",),
        env_ignore_empty= True,
        extra= "ignore",
    )


    BACKEND_CORS_ORIGINS: Annotated[
        list[AnyUrl] | str, BeforeValidator(parse_cors)
    ] = []

    @computed_field  # type: ignore[prop-decorator]
    @property
    def all_cors_origins(self) -> list[str]:
        return [str(origin).rstrip("/") for origin in self.BACKEND_CORS_ORIGINS] + [
            self.FRONTEND_HOST
        ]

settings = Settings() # type: ignore