const express = require("express");
const axios = require("axios");
const cors = require('cors');

const app = express();
app.use(express.json());
const corsOptions ={
    origin:'http://localhost:3001', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));

app.post("/synthesize", async (req, res) => {
  const text = req.body.text;
  const apiKey = 'AIzaSyC6dajUubj-xclBQtDdOzLcoNnNbyqfixo';
  const endpoint = `https://texttospeech.googleapis.com/v1beta1/text:synthesize?key=${apiKey}`;
 // const endpoint = `https://texttospeech.googleapis.com/v1beta1/text:synthesize?key=AIzaSyC6dajUubj-xclBQtDdOzLcoNnNbyqfixo`;
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
      "text": text
    },
    "voice": {
      "languageCode": "en-GB",
      "name": "en-US-Standard-A"
    }
  }

const response = await axios.post(endpoint, payload);
res.json(response.data);

})

const port = 3009;
app.listen(port, () => {
  console.log(`Node Server running on port ${port}`)
})