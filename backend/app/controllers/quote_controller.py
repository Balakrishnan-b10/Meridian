from app.database import db
from app.schemas.quote import QuoteRequest

def submit_quote_controller(quote: QuoteRequest):
    db.quotes.insert_one(quote.dict())
    return {"message": "Quote submitted successfully"}
