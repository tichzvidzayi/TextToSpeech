
import {useState} from 'react';
import axios from 'axios';

function App() {
  const [text, setText] = useState('');
  const [audioSrc, setAudioSrc]= useState(null);
  
const handleSynthesize = async () =>{
 const response = await axios.post('http://localhost:3001/synthesize', {text,});
const audioSrc = `data:audio/mp3;base64,${response.data.audioContent}`;
setAudioSrc(audioSrc);

  }
  
  return (
    <div style={{ justifyContent: 'center'}}>
      <h1>Text to Speech</h1>
      <textarea value={text} onChange={e =>setText(e.target.value)} placeholder='Enter text here'/>
      <br/>

      <button onClick={handleSynthesize}>Synthesize</button>
      <br/>

      {audioSrc && <audio controls src = {audioSrc}/>}
    </div>
  ); 
}

export default App;
