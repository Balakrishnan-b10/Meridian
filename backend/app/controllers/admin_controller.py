from fastapi import HTTPException, status
from passlib.context import CryptContext
from datetime import timedelta
from app.database import db
from app.jwt_utils import create_access_token

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

def login_user(user: dict):
    db_user = db.users.find_one({"username": user["username"]})
    if not db_user or not pwd_context.verify(user["password"], db_user["hashed_password"]):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect username or password"
        )
    access_token = create_access_token(data={"sub": db_user["username"]})
    return {"access_token": access_token, "token_type": "bearer"}

def create_user(user: dict):
    if db.users.find_one({"username": user["username"]}):
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Username already exists"
        )
    hashed_password = pwd_context.hash(user["password"])
    db_user = {"username": user["username"], "hashed_password": hashed_password}
    db.users.insert_one(db_user)
    return {"username": user["username"]}
