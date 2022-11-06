import { useEffect, useState } from 'react';
import './navBar.css'

const NavBar = (props: any) => {

    const [search, setSearch] = useState("");

    useEffect(() => {
        props.searchMusic(search);
    }, [search]);

    const searchHandler = (e: any) => {
        e.preventDefault();
        setSearch(e.target.search.value);
    };
    return (
        <div>
            <div className="navBar">
                <div className="logo">
                    <img src={require("../../Assets/images/music.png")} alt="logo" className="logo" />
                </div>
                <form className="inputSearch" onSubmit={searchHandler}>
                    <img
                        src={require("../../Assets/images/search.png")}
                        alt=""
                        className="searchIcon"
                    />
                    <input
                        type="text"
                        className="searchBar"
                        placeholder="Search"
                        name="search"
                    />
                </form>
            </div>
        </div>
    )
}

export default NavBar