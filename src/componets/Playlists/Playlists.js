import React, { useState, useEffect } from 'react';
import SideNav from '../Nav/SideNav';
import apiRequest from '../../http/request';
import { connect } from 'react-redux';
import './Playlists.css';
import CreatePlaylist from './CreatePlaylist';
import PlaylistsAll from './PlaylistsAll';

function Main(props) {

  const [playlists, setPlaylists] = useState([]);
  const [create, setCreate] = useState(false);

  useEffect(() => {
    getPlaylists();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function getPlaylists() {
    const result = await apiRequest('GET', 'playlist', null, props.auth.accessToken);
    if (result !== null) {
      setPlaylists(result);
    }
  }

  function newPlaylist(playlist) {
    setPlaylists([playlist].concat(playlists))
  }

  async function removePlaylist(playlist) {
    const result = await apiRequest('DELETE', 'playlist/' + playlist._id, null, props.auth.accessToken);
    if (result !== null) {
      const newPlaylists =  playlists.filter(p => {
        return p._id !== playlist._id;
      });
      setPlaylists(newPlaylists);
    }
  }

  function showAdd(e) {
    setCreate(!create);
  }

  return (
    <div className="Playlists">
      <section>
        <SideNav />
      </section>
      <main>
        <h1>Routines</h1>
        <button className="button-primary" onClick={showAdd}>Add playlist</button>
        {
          create
          ? <CreatePlaylist newPlaylist={newPlaylist} showAdd={showAdd}/>
          : ""
        }
        <PlaylistsAll playlists={playlists} removePlaylist={removePlaylist}/>
      </main>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    auth: state.AuthReducer
  }
}

export default connect(mapStateToProps)(Main);
