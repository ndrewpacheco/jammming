import React from 'react'

function SaveToPlaylistButton({trackId}) {
  return (
    <button type="button" name={trackId} value={trackId} id={'checkbox-' + trackId} >Save To Spotify</button>
  )
}

export default SaveToPlaylistButton