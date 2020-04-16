import React, { useState } from 'react';

function PlaylistsAll({ playlists }) {

    const [open, setOpen] = useState('');

    function openPlaylist(id) {
        if (id === open) {
            setOpen('')
        } else {
            setOpen(id);
        }
    }

    return (
        <div className="PlaylistsAll">
            <div className="playlist-list">
                {
                    playlists.map(playlists => {
                        return (
                            <div onClick={e => {e.preventDefault(); openPlaylist(playlists._id)}} key={playlists._id} className="playlist-card">
                                <h5>{playlists.name}</h5>
                                <p>{playlists.description}</p>
                                {
                                open === playlists._id
                                ?
                                    <div className="playlist-card-footer">
                                        Footer
                                    </div>
                                :
                                    <></>
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
