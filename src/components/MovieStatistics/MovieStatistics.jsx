import React from "react";
import {listOfMovies} from "../../constants/movies";
import MovieCard from "../MovieCard/MovieCard";
import './MovieStatistics.css';
import '../MovieCard/MovieCard.css';

function MovieStatistics (){
    return (
        <div>
            <div className={'container'}>
                <div className={'mt-5'}>
                    <div  className={'row'}>
                        <div className={'container'}>
                            <div className={'container-fluid'}>
                                <h5 id={'statistic-section'} className={'display'}>Some general statistics</h5>
                                <hr/>
                            </div>
                            <div className={'container shadow-lg p-lg-5 col-12'} id={'table-section'}>
                                <table className={'table table-responsive-lg table-hover'} id={'statistics-table'}>
                                    <thead>
                                    <tr>
                                        <th>
                                            <p className={'display-6'}>Total</p>
                                        </th>
                                        <th>
                                            <p className={'display-6'}>Comedy movies</p>
                                        </th>
                                        <th>
                                            <p className={'display-6'}>Movies from 2012</p>
                                        </th>
                                        <th>
                                            <p className={'display-6'}>(2000+) drama movies</p>
                                        </th>
                                        <th className={'display-6'}>Last movie of 2010</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>
                                            {listOfMovies.length}
                                        </td>
                                        <td>
                                            {listOfMovies.filter(movie => movie.zanr === "Comedy").length}
                                        </td>
                                        <td>
                                            {listOfMovies.filter(movie => movie.godina === "2012").length}
                                        </td>
                                        <td>
                                            {listOfMovies.filter(movie => movie.godina >= "2000" && movie.zanr === "Drama").map(
                                                (filteredMovie) =>{
                                                    return (
                                                        <ul>
                                                            <li>{filteredMovie.naziv}</li>
                                                        </ul>
                                                    )
                                                }
                                            )}
                                        </td>
                                        <td>
                                            <ul>
                                                <li>
                                                    {listOfMovies.filter(movie => movie.godina === "2010").pop().naziv}
                                                </li>
                                            </ul>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={'container'}>
                <div className={'mt-5'}>
                    <div className={'row'}>
                        <div className={'container'}>
                            <div className={'container-fluid'}>
                                <h5 id={'statistic-section'} className={'display'}>Movies between 1990 and 1999</h5>
                                <hr/>
                            </div>
                        </div>
                        {listOfMovies.filter(movie => movie.godina >= 1990 && movie.godina <= 1999).map(
                            (newMovie)=>{
                                return (
                                    <div className={'col-3'}>
                                        <MovieCard naziv={newMovie.naziv}
                                                    zanr={newMovie.zanr}
                                                    godina={newMovie.godina}
                                                    cover={newMovie.cover}
                                                    glumci={newMovie.glumci}
                                        />
                                    </div>
                                )
                            }
                        )}
                    </div>
                </div>
                <div className={'mt-5'}>
                    <div className={'row'}>
                        <div className={'container'}>
                            <div className={'container-fluid'}>
                                <h5 id={'statistic-section'} className={'display'}>Movie posters with Leonardo DiCaprio</h5>
                                <hr/>
                            </div>
                        </div>
                        {listOfMovies.filter(movie => movie.glumci.includes("Leonardo DiCaprio")).map(
                            (newMovie)=>{
                                return (
                                    <div className={'col-3'}>
                                        <div id={'movie-card'}>
                                            <div className={'card'} id={'user-card'}>
                                                <div className={'card-img'}>
                                                    <img className={'card-img-top'} src={newMovie.cover}
                                                         alt="Poster missing" height="400px" width="50px"/>
                                                </div>
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
    )
}

export  default MovieStatistics;