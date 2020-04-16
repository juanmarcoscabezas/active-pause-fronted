import React, { useState } from 'react';

function PlaylistsAll({ playlists, removePlaylist }) {

    const [open, setOpen] = useState('');

    function openPlaylist(id) {
        if (id === open) {
            setOpen('')
        } else {
            setOpen(id);
        }
    }

    function deletePlayList(playlist) {
        removePlaylist(playlist);
    }

    return (
        <div className="PlaylistsAll">
            <div className="playlist-list">
                {
                    playlists.map(playlist => {
                        return (
                            <div onClick={e => { e.preventDefault(); openPlaylist(playlist._id) }} key={playlist._id} className="playlist-card">
                                <h5>{playlist.name}</h5>
                                <button className="playlist-remove-btn" onClick={e => {e.preventDefault(); deletePlayList(playlist)}}>Remove</button>
                                <p>{playlist.description}</p>
                                {
                                    open === playlist._id
                                        ?
                                        <div className="playlist-card-footer">
                                            Footer
                                    </div>
                                        :
                                        ""
                                }
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default PlaylistsAll;
