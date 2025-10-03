from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy.ext.declarative import declarative_base
from settings import Settings


settings = Settings()

# Force IPv4 connection to avoid IPv6 issues in Vercel
import socket

# Force IPv4 resolution
def resolve_ipv4(hostname):
    try:
        # Get all IP addresses for the hostname
        ip_addresses = socket.getaddrinfo(hostname, None, socket.AF_INET)
        # Return the first IPv4 address
        return ip_addresses[0][4][0]
    except:
        return hostname

# Get the database URI and force IPv4 if possible
database_uri = str(settings.SQLALCHEMY_DATABASE_URI)
if "supabase.co" in database_uri:
    # For Supabase, try to resolve to IPv4
    hostname = settings.POSTGRES_SERVER
    try:
        ipv4_host = resolve_ipv4(hostname)
        if ipv4_host != hostname:
            database_uri = database_uri.replace(hostname, ipv4_host)
    except:
        pass

engine = create_engine(
    database_uri,
    connect_args={
        "options": "-c default_transaction_isolation=read_committed"
    },
    pool_pre_ping=True,
    pool_recycle=300
)

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()
