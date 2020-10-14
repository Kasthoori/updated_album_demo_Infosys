import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/header/Header';
import { Table } from 'react-bootstrap';
import ListItem from './components/ListItem/ListItem';
import { useHistory } from 'react-router-dom';




const App = () => {
  
  const [albums, setAlbums] = useState([]);
  const [tracks, setTracks] = useState([]);
  const history = useHistory();

  const url1 = "http://jsonplaceholder.typicode.com/albums";
  const url2 = "http://jsonplaceholder.typicode.com/photos";

  document.title = 'Albums Available';

  useEffect(() => {
    async function fetchData() {
      const resp_albums = await axios.get(url1);
      const resp_tracks = await axios.get(url2);

      setAlbums(resp_albums.data);
      setTracks(resp_tracks.data);
    }

    fetchData();
  }, []);

  const listOnClick = (id, title, userId) => {
    let tracks_in_album = tracks.filter((item) => {
      return item.albumId === id;
    });

    history.push("/details", {
      status: "true",
      id: id,
      title: title,
      userId: userId,
      tracks: tracks_in_album,
    });
  };


console.log("test data check", albums);

  return (
    <div className="App">
      <span data-testid="headercomp"><Header /></span>
        <br />
        <br />
      <div className="container">
        <span data-testid="datatables">
          <Table table table-striped>
            <thead>
              <tr>
                <th data-testid="albumid">Album ID</th>
                <th data-testid="albumtitle">Album Title</th>
                <th data-testid="moredetails">More Details</th>
              </tr>
            </thead>
            <tbody>
            
            {albums.map((item) => (
              <ListItem
                key={item.id + item.userId}
                id={item.id}
                title={item.title}
                userId={item.userId}
                onClick={listOnClick}
              />
            ))}

            </tbody>
          </Table>
        </span>
      </div>
    </div>
  );
}

export default App;
