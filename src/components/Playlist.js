import React, { useState } from "react";
import Track from "./Track";

function Playlist({ playlistState }) {
  const {playlistName, setPlaylistName, playlistTracks, setPlaylistTracks, toggleNameEdit, setToggleNameEdit} =
    playlistState;

  let nameChange;
  const nameChangeHandler = (e) => {
    nameChange = e.target.value;
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setPlaylistName(nameChange);
    setToggleNameEdit(false);
  };
  const showEditName = (
    <form
      action=""
      onSubmit={submitHandler}>
      <input
        type="text"
        name="playlist-name"
        id=""
        onChange={nameChangeHandler}
      />
      <button type="submit">Change Playlist Name</button>
    </form>
  );
  return (
    <>
      <h2>
        {playlistName}
        <span
          style={{ cursor: "pointer" }}
          onClick={() => setToggleNameEdit((prev) => !prev)}>
          {toggleNameEdit ? " - " : " + "}{" "}
        </span>
      </h2>
      {toggleNameEdit && showEditName}
      <ul>
        {playlistTracks.map((track) => {
          return (
            <li key={track.id}>
              <Track track={track} />
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Playlist;
