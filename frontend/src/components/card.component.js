import React, { useEffect, useState } from 'react';
import Square from './square.component';
import axios from 'axios';

function Card(props) {
    // consts
    const [url, setUrl] = useState('https://getpantry.cloud/apiv1/pantry/6c7d9f80-163a-4ac1-92d8-3b0abf7a7c99/basket/');
    const [basket, setBasket] = useState('c3BlbmNlcmJhcm5lc0Bob3RtYWlsLmNvbQ==');
    const [squares, setSquares] = useState({ squares: [] });
    const [header, setHeader] = useState("Ezra - An Unofficial /r/Fantasy Bingo Card Tracker 2020");
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    // hooks
    useEffect(() => {
        const fetchData = async () => {
            axios
                .get("http://localhost:8000/api/squares")
                .then(res => setSquares({ squares: res.data }))
                .catch(err => console.log(err));
        };
        
        fetchData();
    }, [squares]);

    return (
        <div className="card">
            { (isError) ? (<div className="error">Something went wrong...</div>) : ('') }

            { isLoading ? (
                <div>Loading...</div>
            ) : (
                  <div>
                    <div className="header">{header}</div>
                    <div className="card-row">
                        { squares.squares.slice(0,5).map(square => <Square key={square.id} square={square} />) }
                    </div>
                    <div className="card-row">
                        { squares.squares.slice(5,10).map(square => <Square key={square.id} square={square} />) }
                    </div>
                    <div className="card-row">
                        { squares.squares.slice(10,15).map(square => <Square key={square.id} square={square} />) }
                    </div>
                    <div className="card-row">
                        { squares.squares.slice(15,20).map(square => <Square key={square.id} square={square} />) }
                    </div>
                    <div className="card-row">
                        { squares.squares.slice(20,25).map(square => <Square key={square.id} square={square} />) }
                    </div>
                  </div>
            ) }
        </div>
    );
}

export default Card;