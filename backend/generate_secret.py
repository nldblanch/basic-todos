import secrets

secret_key = secrets.token_hex(32)
algorithm = 'HS256'

print(f"SECRET_KEY={secret_key}")
print(f"ALGORITHM={algorithm}")