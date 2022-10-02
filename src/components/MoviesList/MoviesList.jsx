import React from "react";
import MovieCard from "../MovieCard/MovieCard";
import {listOfMovies} from "../../constants/movies";
import './MoviesList.css';
function MoviesList (){
    return(
        <div className={'container'}>
            <div className={'container mt-5'}>
                <div className={'row pt-lg-5 align-items-center justify-content-center'}>
                    <div className={'col-lg-12 p-lg-5 pt-lg-3 col-md-12'}>
                        <div id={'title-section'}>
                            <h1 className={'display-3 mb-5'} id={'title'}>My Movies</h1>
                        </div>
                        <div className={'container col-md-12'} id={'movies-section'}>
                            <div className={'row'}>
                                {listOfMovies.map(movie=>{
                                    return(
                                    <div className={'col-3'}>
                                        <MovieCard naziv={movie.naziv}
                                                      zanr={movie.zanr}
                                                      godina={movie.godina}
                                                      cover={movie.cover}
                                                      glumci={movie.glumci}
                                    />
                                    </div>)
                                })}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MoviesList;
