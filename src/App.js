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
    name: "drew",
    artist: "dr",
    album: "234",
    id: 0,
  },
  {
    name: "love",
    artist: "beyonce",
    album: "234",
    id: 1,
  },
  {
    name: "face",
    artist: "fff",
    album: "g234",
    id: 2,
  },
  {
    name: "face",
    artist: "fnewnewnewnnweff",
    album: "g234",
    id: 3,
  },
  {
    name: "rrr",
    artist: "fnewnewnewnnweff",
    album: "g234",
    id: 4,
  },
];

function App() {
  const [songQuery, setSongQuery] = useState("");
  const [submittedSong, setSubmittedSong] = useState("");
  const [playlistName, setPlaylistName] = useState("");
  // const [playlistTracks, setPlaylistTracks] = useState([]);
  // const [playlists, setPlaylists] = useState([{id: 1, name: 'first pl', tracks:{
  //   name: "drew",
  //   artist: "dr",
  //   album: "234",
  //   id: 0
  // }}]);
  const [playlists, setPlaylists] = useState([{ name: "playlistest", tracks: [{id:100, name:"trackNametest"}], id: 1 }])
  const [playlistKey, setPlaylistKey] = useState(10);


  const createPlaylist = (e) => {
    e.preventDefault();
    if (playlistName) {
      setPlaylists((prev) => [
        ...prev,
        { name: playlistName, tracks: [], id: playlistKey },
      ]);
      setPlaylistName("");
      setPlaylistKey((prev) => prev + 1);
    }
  };
  //   const submitHandler = (e) => {
  //   e.preventDefault();
  //   playlists.forEach((playlist, i) => {
  //     if (e.target[i].checked) {
  //       setPlaylists((prev) => {
  //         return prev.map((prevPlaylist) => {
  //           if (prevPlaylist.id === playlist.id) {
  //             prevPlaylist.tracks = [
  //               ...prevPlaylist.tracks,
  //               { id: trackId, name: trackName },
  //             ];
  //             return playlist;
  //           } else {
  //             return prevPlaylist;
  //           }
  //         });
  //       });
  //     }
  //   });
  // };

  return (
    <div className="App">
      <h2>Create Playlist</h2>
      <form
        action=""
        onSubmit={createPlaylist}>
        <label htmlFor="create-playlist">New playlist name:</label>
        <input
          type="text"
          name="create-playlist"
          value={playlistName}
          onChange={(e) => setPlaylistName(e.target.value)}
        />
        <button type="submit">Create Playlist</button>
      </form>
      <ul>
        {playlists.map((playlist) => (
          <Playlist
            key={playlist.id}
            id={playlist.id}
            name={playlist.name}
            tracks={playlist.tracks}
            setPlaylists={setPlaylists}
          />
        ))}
      </ul>
      <h2>Search for song:</h2>
      <SearchBar
        songQuery={songQuery}
        setSongQuery={setSongQuery}
        setSubmittedSong={setSubmittedSong}
      />
      {submittedSong && (
        <SearchResults
          submittedSong={submittedSong}
          playlists={playlists}
          setPlaylists={setPlaylists}
          tracks={tracks}
        />
      )}
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
