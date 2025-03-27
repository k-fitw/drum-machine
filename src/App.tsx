import './App.css'
import { AudioClip } from './types'
import Drum from './Drum'
import { useState } from 'react';

const audioClips: AudioClip[] = [
  {
    keyTrigger: 'Q',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
    description: 'Heater-1'
  },
  {
    keyTrigger: 'W',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
    description: 'Heater-2'
  },
  {
    keyTrigger: 'E',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
    description: 'Heater-3'
  }, 
  {
    keyTrigger: 'A',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',
    description: 'Heater-4',
  },
  {
    keyTrigger: 'S',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
    description: 'Clap',
  },
  {
    keyTrigger: 'D',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
    description: 'Open-HH',
  },
  {
    keyTrigger: 'Z',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
    description: 'Kick-n-Hat',
  },
  {
    keyTrigger: 'X',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
    description: 'Kick',
  },
  {
    keyTrigger: 'C',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3',
    description: 'Closed-HH',
  },
]

function App() {

  const [power, setPower] = useState<boolean>(true);

  const playAudio = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if(!power) return;
    const clip = audioClips.find((clip) => clip.keyTrigger === e.key.toUpperCase());
    if(!clip) return;

    (document.getElementById(clip.keyTrigger) as HTMLAudioElement)?.play().catch(console.error);

    document.getElementById("drum-" + clip.keyTrigger)?.focus();
    document.getElementById("display")!.innerText = clip.description;
};

const togglePower = () => {
  setPower(!power);
}

  return (
    <>
      <div className="container" id="drum-machine" onKeyDown={playAudio}>
        <h1>FCC </h1>
        <div className="inner">
        <div className="whole-drum">
          {audioClips.map((clip) => (
            <Drum audioClip={clip} key={clip.keyTrigger}/>
          ))}
        </div>
        <div className="right-container">
        <h3>Power</h3>
        <button onClick={togglePower}></button>
        <div id="display"></div>
        <div id="volume">
          <input type="range" min="0" max="100" defaultValue="100"/>
        </div>
        <h3>Bank</h3>
        <button></button>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
