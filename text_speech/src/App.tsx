
import {useState} from 'react';
import axios from 'axios';

import  './App.css'
import React from 'react';

function App() {
  const [text, setText] = useState('');
  const [audioSrc, setAudioSrc]= useState<any|null>(null);
  
const handleSynthesize = async () =>{
 const response = await axios.post('http://localhost:3001/synthesize', {text,});
const audioSrc = `data:audio/mp3;base64,${response.data.audioContent}`;
setAudioSrc(audioSrc);

  }
  
  return (
    <div className='wrapper'
  
    >
      <label id='label'>Text to Speech</label>
     


      <br />



     
      <textarea
        placeholder="Enter something funny."
        id="text"
        name="text"
     
        value={text}
        onChange={(e) => setText(e.target.value)}
      > </textarea>

<br/>
	


      <br />
       <span className='span'>

       {audioSrc && <audio controls src={audioSrc} />}
       </span>
     
       <button id="button" onClick={handleSynthesize}>
        Synthesize
      </button>
    </div>
  ); 
}

export default App;
