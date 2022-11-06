import { useEffect, useState } from "react";
import MusicApi from "../../utils/musicApi";

const HomePage = (props: any) => {

    const [first, setfirst] = useState<any>([])
    const [result, setResult] = useState<any>({})
    const [display, setDisplay] = useState<any>(false)

    let search = props.search;
    // console.log(MusicApi(search));
    const song = MusicApi(search);
    // console.log("song", song);

    useEffect(() => {
        setfirst(song);
    }, [song]);

    const songList = first && first.result && first.result.songs;
    console.log("songList", songList);
    
    // console.log("first", first);
    
    // console.log("title", first && first.result && first.result.songs && first.result.songs[0].title);
    
    return (
        <div>
            {songList && songList.map((songs: any, i: any) => {
                        return (
                            <div key={i}>
                                <div>
                                    {songList[i].title}
                                </div>
                            </div>
                        )
                        console.log(songs);

                    })}
            
        </div>
    )
}

export default HomePage






        //     {display ? (
        //         <div>HomePage</div>
        //     ) : (
        //         <div>
        //             {first && first.map((songs: any, i: any) => {
        //                 return (
        //                     <div key={i}>
        //                         <div>
        //                             {songs.result.songs[i].title}
        //                         </div>
        //                     </div>
        //                 )
        //                 console.log(songs);

        //             })}
        //         </div>
                
        //     )}
        // </div>