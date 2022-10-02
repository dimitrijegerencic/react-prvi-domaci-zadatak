import React from "react";
import {useState} from "react";
import './FindMovie.css';
import {listOfMovies} from "../../constants/movies";
import MovieCard from "../MovieCard/MovieCard";

function FindMovie(){

    const [searchInput, setSearchInput] = useState('');

    return (
        <div>
            <div className={'container'}>
                <div className={'container'}>
                    <div className={'row pt-lg-5 align-items-center justify-content-center'}>
                        <div className={'col-lg-8 p-lg-5 pt-lg-3 col-md-8'}>
                            <h3 className={'mb-4 display-6'} id={'search-text'}>Search...</h3>
                            <div className={'container col-md-12'} id={'movies-section'}>
                                <div className={'row'}>
                                    <div className={'col-12'}>
                                        <input type="text" className={'form-control'}
                                               value={searchInput}
                                               onChange={(e) => setSearchInput(e.target.value)}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {listOfMovies.some(movie => movie.naziv === searchInput) ?
                <div>
                    <div className={'container'}>
                        <div className={'container'}>
                            <div className={'row pt-lg-0 align-items-center justify-content-center'}>
                                <div className={'col-lg-5 p-lg-5 pt-lg-0 col-md-1'}>
                                    <div className={'container col-md-12'} id={'movies-section'}>
                                        <div className={'row'}>
                                            <div className={'col-12'}>
                                                {listOfMovies.filter(movie => movie.naziv === searchInput).map(
                                                    (newMovie)=>{
                                                        return (
                                                            <div className={'container'}>
                                                                <div className={'container-fluid p-5'}>
                                                                    <div className={'col-12'}>
                                                                        <MovieCard naziv={newMovie.naziv}
                                                                                   zanr={newMovie.zanr}
                                                                                   godina={newMovie.godina}
                                                                                   cover={newMovie.cover}
                                                                                   glumci={newMovie.glumci}
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )
                                                    }
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                :
                <div className={'container'}>
                    <div className={'container mt-5'}>
                        <div className={'row pt-lg-5 align-items-center justify-content-center'}>
                            <div className={'col-lg-12 p-lg-5 pt-lg-3 col-md-12'}>
                                <div id={'title-section'}>
                                    <h1 className={'display-5 mb-5'} id={'title'}>No results found...</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }

        </div>
    )
}

export default FindMovie;