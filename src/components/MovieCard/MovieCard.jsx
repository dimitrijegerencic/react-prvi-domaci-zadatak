import React from "react";
import './MovieCard.css';
const MovieCard = ({
                       naziv,
                       zanr,
                       godina,
                       cover,
                       glumci
}) => {

    return (
        <div id={'movie-card'}>
            <div className={'card'} id={'user-card'}>
                <div className={'card-img'}>
                    <img className={'card-img-top'} src={cover}
                         alt="Poster missing" height="400px" width="50px"/>
                </div>
                <div className={'card-body'}>
                    <div>
                        <div className={'row'}>
                            <div className={'col-7'}>
                                <h5 id={'movie-title'}>{naziv}</h5>
                            </div>
                            <div className={'col-5'}>
                                <p className={'display'} id={'genre-year'}>{zanr} | {godina}</p>
                            </div>
                        </div>
                        <hr/>
                        <div className={'cast-box'}>
                            <span>Starring:</span> {glumci.join(", ")}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieCard;


