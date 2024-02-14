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
  const apiKey = "AIzaSyC6dajUubj-xclBQtDdOzLcoNnNbyqfixo";
  var endpoint = `https://texttospeech.googleapis.com/v1beta1/text:synthesize?key=${apiKey}`;
  const payload = {
    "audioConfig": {
      "audioEncoding": "MP3",
      "effectsProfileId": [
        "small-bluetooth-speaker-class-device"
      ],
      "pitch": 0,
      "speakingRate": 1
    },
    "input": {
      "text": "Lol and devices."
    },
    "voice": {
      "languageCode": "en-US",
      "name": "en-US-Standard-A"
    }
  }

const response = await axios.post(endpoint, payload);
res.json(response.data);

})




///
const port = 3001;
app.listen(port, () => {
  console.log(`Node Server running on port ${port}`)
})