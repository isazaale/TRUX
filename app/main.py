from fastapi import FastAPI
import os
import psycopg2
from psycopg2.extras import RealDictCursor
import redis

app = FastAPI()

POSTGRES_SETTINGS = {
    "host": os.getenv("POSTGRES_HOST", "localhost"),
    "port": int(os.getenv("POSTGRES_PORT", 5432)),
    "dbname": os.getenv("POSTGRES_DB", "postgres"),
    "user": os.getenv("POSTGRES_USER", "postgres"),
    "password": os.getenv("POSTGRES_PASSWORD", "postgres"),
}

REDIS_URL = os.getenv("REDIS_URL", "redis://localhost:6379/0")

@app.get("/")
async def root():
    return {"status": "TRU X is alive"}

@app.get("/health")
async def health():
    try:
        conn = psycopg2.connect(cursor_factory=RealDictCursor,
                               **POSTGRES_SETTINGS)
        with conn.cursor() as cur:
            cur.execute("CREATE TEMP TABLE IF NOT EXISTS healthcheck (id INT)")
            cur.execute("INSERT INTO healthcheck (id) VALUES (1)")
            cur.execute("SELECT id FROM healthcheck LIMIT 1")
            cur.fetchone()
        conn.commit()
        conn.close()
        r = redis.from_url(REDIS_URL)
        r.ping()
        return {"status": "ok"}
    except Exception:
        return {"status": "fail"}
