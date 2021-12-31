// Load environment variables
import dotenv from 'dotenv';
dotenv.config();

// Import dependencies
import express from 'express';
import cors from 'cors'
import compression from 'compression';
import path from 'path';

// Initialise app
const app = express();
app.set("port", process.env.PORT || 3001);

// Middleware
app.use(cors());
app.use(compression());      // compress response bodies
app.use(express.json());     // support JSON-encoded bodies
app.use(express.urlencoded({ // support URL-encoded bodies
  extended: true
}));

app.use('/', express.static(path.join(__dirname, './frontend')));

app.get("/health", (req, res) => {
  res.send({
    health: "UP"
  });
});

export default app;