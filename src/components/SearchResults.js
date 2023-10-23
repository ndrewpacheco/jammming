import React from "react";
import Track from "./Track";
import SaveToPlaylistButton from "./SaveToPlaylistButton";

export default function SearchResults({ submittedSong, tracks }) {
  let searchResults;

  tracks = tracks.filter((track) => track.name === submittedSong);
  if (tracks.length === 0) {
    searchResults = <div>Did not find a match for "{submittedSong}"</div>;
  } else {
    searchResults = (
      <ul>
        {tracks.map((track) => {
          return (
            <li key={track.id}>
              <Track track={track} />
              <SaveToPlaylistButton trackId={track.id} />
            </li>
          );
        })}
      </ul>
    );
  }

  return (
    <div>
      <h2>Searched for: {submittedSong}</h2>
      {searchResults}
    </div>
  );
}
