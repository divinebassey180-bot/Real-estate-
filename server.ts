import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Mock database for properties
  const properties = [
    {
      id: "1",
      image: "https://picsum.photos/seed/villa-1/600/800",
      title: "Villa Azure",
      location: "Côte d'Azur, France",
      price: "$12,500,000",
      beds: 6,
      baths: 7,
      description: "A stunning cliffside villa offering panoramic Mediterranean views and private beach access."
    },
    {
      id: "2",
      image: "https://picsum.photos/seed/penthouse/600/800",
      title: "The Obsidian Penthouse",
      location: "Manhattan, New York",
      price: "$24,000,000",
      beds: 4,
      baths: 5,
      description: "Ultra-modern living in the heart of the city with 360-degree skyline views and a private rooftop garden."
    },
    {
      id: "3",
      image: "https://picsum.photos/seed/modern-mansion/600/800",
      title: "Echo Valley Residence",
      location: "Aspen, Colorado",
      price: "$8,900,000",
      beds: 5,
      baths: 6,
      description: "A contemporary mountain retreat blending organic materials with state-of-the-art smart home technology."
    },
    {
      id: "4",
      image: "https://picsum.photos/seed/london-townhouse/600/800",
      title: "Mayfair Heritage",
      location: "London, UK",
      price: "£18,500,000",
      beds: 7,
      baths: 8,
      description: "A meticulously restored Victorian townhouse featuring original period details and a private wine cellar."
    }
  ];

  // API Routes
  app.get("/api/properties", (req, res) => {
    const { location, minPrice, maxPrice, beds } = req.query;
    
    let filtered = [...properties];

    if (location) {
      filtered = filtered.filter(p => 
        p.location.toLowerCase().includes((location as string).toLowerCase())
      );
    }

    if (beds && beds !== "Any") {
      const minBeds = parseInt((beds as string).split("+")[0]);
      filtered = filtered.filter(p => p.beds >= minBeds);
    }

    // Simple price filter (ignoring currency symbols for this demo)
    if (minPrice) {
      const min = parseInt(minPrice as string);
      filtered = filtered.filter(p => parseInt(p.price.replace(/[^0-9]/g, "")) >= min);
    }
    if (maxPrice) {
      const max = parseInt(maxPrice as string);
      filtered = filtered.filter(p => parseInt(p.price.replace(/[^0-9]/g, "")) <= max);
    }

    res.json(filtered);
  });

  app.post("/api/contact", (req, res) => {
    const { name, email, interest, message } = req.body;
    console.log("Contact form submission:", { name, email, interest, message });
    
    // Simulate processing delay
    setTimeout(() => {
      res.json({ success: true, message: "Thank you for your inquiry. A Lumina representative will contact you shortly." });
    }, 1000);
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
