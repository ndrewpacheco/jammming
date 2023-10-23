import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  Playlist,
  SearchBar,
  SearchResults,
  Track,
  Tracklist,
} from "./components/index";
const tracks = [
  {
     name:"drew",
     artist:"dr",
     album:"234",
     id:0
  },
  {
     name:"love on top",
     artist:"beyonce",
     album:"234",
     id:1
  },
  {
     name:"face",
     artist:"fff",
     album:"g234",
     id:2
  }
 ];

function App() {

  const [songQuery, setSongQuery] = useState("");
  const [submittedSong, setSubmittedSong] = useState("");
  const [playlistName, setPlaylistName] = useState('untitled playlist')
  const [playlistTracks, setPlaylistTracks] = useState([])
  const [toggleNameEdit, setToggleNameEdit] = useState(false)

  const playlistState = {playlistName, setPlaylistName, playlistTracks, setPlaylistTracks, toggleNameEdit, setToggleNameEdit}
  return (
    <div className="App">
      <Playlist playlistState={playlistState}/>
      <SearchBar
        songQuery={songQuery}
        setSongQuery={setSongQuery}
        setSubmittedSong={setSubmittedSong}
      />
      {submittedSong && <SearchResults submittedSong={submittedSong} tracks={tracks} />}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
