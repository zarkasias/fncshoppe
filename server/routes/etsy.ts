import { Router } from "express";
import fetch from "node-fetch";

export const etsyRouter = Router();

const API_KEY = 'urt00z9xiw3nk9y7br10pil7';
const SECRET_KEY = 'y6sdssjqo1';

etsyRouter.get("/", (_req, res) => {
  res.json({ ok: true, timestamp: new Date().toISOString() });
});

etsyRouter.get('/ping', async (req, res) => {
    const requestOptions = {
        'method': 'GET',
        'headers': {
            'x-api-key': `${API_KEY}:${SECRET_KEY}`,
        },
    };

    const response = await fetch(
        'https://api.etsy.com/v3/application/openapi-ping',
        requestOptions
    );

    if (response.ok) {
        const data = await response.json();
        res.send(data);
    } else {
        res.send("oops");
    }
});
