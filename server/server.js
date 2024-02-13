const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(express.json());

app.use(
  cors({
    origin: "htttp://localhost:3000",
  })
);

app.post("/synthesize", async (req, res) => {
  const text = req.body.text;
  const apiKey = "AIzaSyAKgPeceH3LU3vbvua4_k3O7krqy5ur8Dg";
  var endpoint = `https://texttospeech.googleapis.com/v1beta1/text:synthesize?key=${apiKey}`;
  const payload = {
    audioConfig: {
      audioEncoding: "MP3",
      effectsProfileId: ["headphone-class-device"],
      pitch: 1.6,
      speakingRate: 1,
    },
    input: {
      text: text,
    },
    voice: {
      languageCode: "en-GB",
      name: "en-GB-Studio-C",
    },
  };
  const response = await axios.post(endpoint, payload);
  res.json(response.data);

});

const port = 3021;
app.listen(port, () => {
  console.log(`Node Server running on port ${port}`)
});