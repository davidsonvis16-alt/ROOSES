import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Health check
  app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', studio: 'Liebe & Roses Embakasi' });
  });

  // AI Flower Concierge Endpoint using Gemini API
  app.post('/api/ai-recommendation', async (req, res) => {
    try {
      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) {
        return res.status(200).json({
          recommendation: {
            title: "The Velvet Romance Water Bouquet",
            flowers: ["Kenyan Crimson Roses", "Eucalyptus", "Baby's Breath"],
            vibe: "Passionate & Memory-Making",
            cardMessage: "To my love, every blossom reminds me of you. Happy Anniversary!",
            priceEstimate: "KSh 4,500",
            notes: "Our signature water bouquet wrapped in matte nude paper, kept fresh in water gel during delivery across Nairobi."
          }
        });
      }

      const ai = new GoogleGenAI({ apiKey });
      const { recipient, occasion, budget, sentiment, preferences } = req.body;

      const prompt = `You are the master floral designer for 'Liebe & Roses', a high-end flower & gift studio in Embakasi, Nairobi (Embakasi Road, opp Pride Center, next to Quickmart).
Create a bespoke floral arrangement & gift pairing recommendation based on this request:
- Recipient: ${recipient || 'Loved One'}
- Occasion: ${occasion || 'Special Celebration'}
- Budget Level: ${budget || 'Mid-range'}
- Emotion / Sentiment: ${sentiment || 'Affection & Warmth'}
- Special Preferences: ${preferences || 'Fresh Kenyan garden roses'}

Return a valid JSON object strictly matching this schema:
{
  "title": "Creative Arrangement Title",
  "flowers": ["List of 3-4 specific fresh flowers"],
  "vibe": "Short poetic vibe description",
  "recommendedWrapping": "e.g. Matte Cream Water Bouquet or Black Velvet Gift Box",
  "cardMessage": "A heartfelt 1-2 sentence card note created specifically for this occasion",
  "giftAddon": "Suggested gift pairing e.g. Artisanal Candle or Swiss Chocolates",
  "priceEstimate": "e.g. KSh 3,800 - KSh 5,500",
  "designerNote": "Brief tip on why this design fits the emotion"
}`;

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
        config: {
          responseMimeType: 'application/json',
          temperature: 0.7,
        }
      });

      const text = response.text;
      if (text) {
        const parsed = JSON.parse(text);
        return res.json({ recommendation: parsed });
      } else {
        throw new Error('Empty response from AI');
      }
    } catch (err: any) {
      console.error('AI Recommendation Error:', err);
      // Fallback response
      return res.json({
        recommendation: {
          title: "The Liebe Signature Rose Box",
          flowers: ["Deep Red Kenyan Roses", "White Spray Carnations", "Eucalyptus"],
          vibe: "Elegant & Heartfelt",
          cardMessage: "Thinking of you today and celebrating every moment we share.",
          priceEstimate: "KSh 4,200",
          giftAddon: "Artisanal Scented Soy Candle",
          designerNote: "Handcrafted in our Embakasi studio with morning-cut Naivasha blooms."
        }
      });
    }
  });

  // Vite middleware setup
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Liebe & Roses server running on http://localhost:${PORT}`);
  });
}

startServer();
