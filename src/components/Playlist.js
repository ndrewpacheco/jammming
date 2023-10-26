import React from "react";

function Playlist({ name, tracks, id, setPlaylists }) {

  const clickRemoveHandler = (event) => {
    event.preventDefault()
    setPlaylists(prevPlaylists => {
      console.log(prevPlaylists)
     return prevPlaylists.map(prevPlaylist => {
        if (id !== prevPlaylist.id) {
         return prevPlaylist
        } else {
          prevPlaylist.tracks = prevPlaylist.tracks.filter(track => track.id.toString() !== event.target.id)
          return prevPlaylist
        }
      })
    })
   }

   const renameHandler = (event) => {

    }

    // const clickRemoveHandler = (event) => {
    // event.preventDefault()
    // console.log(typeof event.target.id)
    // }
  return (
    <li>
      <div><h3 style={{display: "inline-block"}}>{name}</h3> <span style={{cursor: "pointer"}} onClick={renameHandler}>Rename Playlist</span></div>

      {tracks.map((track) => {

        return (
          <div>

            <div>{track.name} <span id={track.id} onClick={clickRemoveHandler} style={{cursor: "pointer"}}> X </span></div>
          </div>
        );
      })}
    </li>
  );
}

export default Playlist;
