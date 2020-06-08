import React from "react";
import "./App.css";
import Footer from "./componentes/Footer";

const drumAudio = [
  {
    key: "Q",
    mp3: "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3",
  },
  {
    key: "W",
    mp3: "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3",
  },
  {
    key: "E",
    mp3: "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3",
  },
  {
    key: "A",
    mp3: "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3",
  },
  {
    key: "S",
    mp3: "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3",
  },
  {
    key: "D",
    mp3: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3",
  },
  {
    key: "Z",
    mp3: "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3",
  },
  {
    key: "X",
    mp3: "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3",
  },
  {
    key: "C",
    mp3: "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3",
  },
];

const App = () => (
  <div id="display" className="display">
    {drumAudio.map((sound, idx) => (
      <Box text={sound.key} key={idx} audio={sound.mp3} />
    ))}
  </div>
);

class Box extends React.Component {
  constructor(props) {
    super(props);

    this.audio = React.createRef();

    window.document.addEventListener("keydown", (e) => {
      if (e.key.toUpperCase() === props.text) {
        this.audio.current.play();
      }
    });
  }

  playSound = () => {
    console.log(this.audio.current);
    this.audio.current.play();
  };

  render() {
    const { text, audio } = this.props;
    return (
      <div>
        <div className="box active" onClick={this.playSound}>
          {text}
          <audio ref={this.audio} src={audio} className="clip" id={text} />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
