import { useEffect, useState } from "react";

const ArtistApi = () => {
    const [data, setData] = useState([]);

    const url = 'https://youtube-music1.p.rapidapi.com/v2/get_artist?artist_id=UCedvOgsKFzcK3hA5taf3KoQ';

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '40adfff86amshae63704e562067ap186c63jsnff5b3c3286a4',
            'X-RapidAPI-Host': 'youtube-music1.p.rapidapi.com'
        }
    };

    fetch(url, options)
        .then(res => res.json())
        .then(json => console.log(json))
        .catch(err => console.error('error:' + err));
}

export default ArtistApi