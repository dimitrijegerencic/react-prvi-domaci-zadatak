import React from "react";
import './Movies.css';
import {useState} from "react";
import FindMovie from "../FindMovie/FindMovie";
import MoviesList from "../MoviesList/MoviesList";
import MovieStatistics from "../MovieStatistics/MovieStatistics";


function Movies(){

    const [isShownList, setIsShownList] = useState(true);
    const [isShownStatistics, setIsShownStatistics] = useState(false);
    const [isShownSearch, setIsShownSearch] = useState(false);

    const handleClickList = event => {
        setIsShownSearch(false);
        setIsShownList(true);
        setIsShownStatistics(false);
    }

    const handleClickStatistics = event => {
        setIsShownSearch(false);
        setIsShownList(false);
        setIsShownStatistics(true);
    }

    const handleClickSearch = event => {
        setIsShownSearch(true);
        setIsShownList(false);
        setIsShownStatistics(false);
    }

    return (
        <div>
            <nav className={'navbar bg-light'}>
                <div className={'container mt-2 mb-2'}>
                    <a className={'navbar-brand'}>My Movies</a>
                    <div className={'d-flex'}>
                            <button className={'btn'} id={'list-button'} onClick={handleClickList}>List</button>
                            <button className={'btn ms-3'} id={'statistics-button'} onClick={handleClickStatistics}>Statistics</button>
                            <button className={'btn ms-3'} id={'search-nav-button'} onClick={handleClickSearch}>Search</button>
                    </div>
                </div>
            </nav>

            {isShownSearch && (
                <FindMovie />
            )}

            {isShownStatistics && (
                <MovieStatistics />
            )}

            {isShownList && (
                <MoviesList />
            )}



        </div>
    )
}

export default Movies;