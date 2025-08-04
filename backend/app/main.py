from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routes import quote, admin_router

app = FastAPI()

# Enable CORS for frontend communication
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Adjust if frontend URL changes
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include routers
app.include_router(quote.router, prefix="/api")
app.include_router(admin_router.router, prefix="/api")
