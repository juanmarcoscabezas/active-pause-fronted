import React, { useState } from 'react';

function CreatePlaylist() {
    return (
        <div className="CreatePlaylist">
            <form>
                <input type="text" placeholder="playlist name"/>
                <textarea type="text" placeholder="playlist description"/>
            </form>
        </div>
    );
}

export default Pause;
