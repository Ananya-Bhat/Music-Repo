import { useEffect, useState } from "react";

const MusicApi = (props: any) => {
    const [data, setData] = useState([]);

    const url = `https://youtube-music1.p.rapidapi.com/v2/search?query=${props}`;

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '40adfff86amshae63704e562067ap186c63jsnff5b3c3286a4',
            'X-RapidAPI-Host': 'youtube-music1.p.rapidapi.com'
        }
    };

    useEffect(() => {
        fetch(url, options)
            .then(res => res.json())
            .then((json) => setData(json))
            .catch(err => console.error('error:' + err));
    }, [props]);

    return data;

}

export default MusicApi;