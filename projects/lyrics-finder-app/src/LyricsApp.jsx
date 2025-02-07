import React,{useState} from 'react'
import axios from 'axios'

export default function LyricsApp() {
    const [artist, setArtist] = useState("");
    const [song, setSong] = useState("");
    const [lyrics, setLyrics] = useState("");

    function searchLyrics() {
        if (artist === "" || song === "") {
            return;
        }
    axios.get(`https://api.lyrics.ovh/v1/${artist}/${song}`).then(res => {
            console.log(res.data.lyrics);
            setLyrics(res.data.lyrics);
        })
    }


    return (
    <div>

<div className="App">
<h1>Lyrics Finder ????</h1>

<input className="inp" type="text" 
placeholder='Artist name'
onChange={(e) => { setArtist(e.target.value) }} />
<input className="inp" type="text" 
placeholder='Song name'
onChange={(e) => { setSong(e.target.value) }} />
<button className="btn" 
onClick={() => searchLyrics()}>
    ???? Search</button>
<hr />
<pre>{lyrics}</pre>
</div>
      
    </div>
  )
}
