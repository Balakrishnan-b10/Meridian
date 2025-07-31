from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routes import quote

app = FastAPI()

# Enable CORS for frontend communication
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Frontend origin
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Add quote API
app.include_router(quote.router, prefix="/api")
