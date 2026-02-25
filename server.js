const express = require("express");
const cors = require("cors");
/*const fetch = require("node-fetch");*/

const app = express();

app.use(express.json());

// Allow your frontend origin
app.use(cors({
  origin: "https://affiliates-registration.netlify.app"
}));

app.post("/api/register", async (req, res) => {
  try {
    const response = await fetch(
      "https://boapi3.smartico.ai/api/register-aff",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(req.body)
      }
    );

    const data = await response.text();
    res.status(response.status).send(data);

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Proxy error" });
  }
});

app.listen(3000, () => {
  console.log("Proxy running at http://localhost:3000");
});