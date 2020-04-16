import React, { useState} from 'react';
import apiRequest from '../../http/request';
import { connect } from 'react-redux';
import './Playlists.css';

function CreatePlaylist(props) {

  const [name, setName] = useState([]);
  const [description, setDescription] = useState([]);

  async function create(e) {

    e.preventDefault();

    const newPlaylist = {
      name,
      description
    };

    const result = await apiRequest('POST', 'playlist', newPlaylist, props.auth.accessToken);
    if (result !== null) {
      setName('');
      setDescription('');
      props.newPlaylist(result);
    }
  }

  return (
    <form className="AddPlaylist" onSubmit={create}>
      <h4>Create playlist</h4>
      <div >
        <label htmlFor="name">Name</label>
        <input className="playlist-input" onChange={e => { setName(e.target.value) }} type="text" placeholder="My hard playlist" name="name" />
      </div>
      <div >
        <label htmlFor="description">Description</label>
        <textarea className="playlist-input" onChange={e => { setDescription(e.target.value) }} type="text" placeholder="" name="description" />
      </div>
      <div>
        <input className="button-primary" type="submit" value="create" />
      </div>
    </form>
  );
}

const mapStateToProps = (state) => {
  return {
    auth: state.AuthReducer
  }
}

export default connect(mapStateToProps)(CreatePlaylist);