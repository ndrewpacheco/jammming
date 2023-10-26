import React from "react";

function SaveToPlaylistButton({ trackId, trackName, playlists, setPlaylists }) {
  const submitHandler = (e) => {
    e.preventDefault();
    playlists.forEach((playlist, i) => {
      if (e.target[i].checked) {
        setPlaylists((prev) => {
          return prev.map((prevPlaylist) => {

            if (prevPlaylist.id === playlist.id) {
              if (prevPlaylist.tracks.some(track => track.id === trackId)) {
                alert('track already added to this playlist')
                return prevPlaylist
              }
              prevPlaylist.tracks = [
                ...prevPlaylist.tracks,
                { id: trackId, name: trackName },
              ];
              return playlist;
            } else {
              return prevPlaylist;
            }
          });
        });
      }
    });
  };

  if (playlists.length > 0) {
    return (
      <form
        action=""
        onSubmit={submitHandler}>
        {playlists.map((playlist) => {
          return (
            <label
              htmlFor={playlist.id}
              key={playlist.id}>
              {playlist.name}
              <input
                type="radio"
                name={trackId + trackName}
                value={playlist.id}
                key={playlist.id}
              />
            </label>
          );
        })}

        <button type="submit">Save To Playlist</button>
      </form>
    );
  }
}

export default SaveToPlaylistButton;
