import React from "react";
import SearchButton from "./SearchButton";

function SearchBar({songQuery, setSongQuery, setSubmittedSong }) {
  const onSongQueryChange = (e) => {
    setSongQuery(e.target.value);
  };

  // const onSongQueryChange = (e) => { songQuery += e.target.value }
  const submitHandler = (e) => {
    e.preventDefault();

    setSubmittedSong(songQuery)
  };
  return (
    <form
      action="GET"
      onSubmit={submitHandler}>
      <label htmlFor="search-bar">Search by song name:  </label>

      <input
        type="text"
        id="search-bar"
        value={songQuery}
        onChange={onSongQueryChange}

      />
      <SearchButton
        type="submit"
        value="Search"
      />
    </form>
  );
}

export default SearchBar;
