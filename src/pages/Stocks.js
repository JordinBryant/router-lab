import React from "react";
import Stocks from "./Stocks";


function stocks(props)  {
    const Stocks = props.stocks.filter(stock => stock.symbol === props.match.params.symbol)[0];
    return(
        <div>
            <h2>{stocks.name}</h2>
            <h3>{stocks.symbol}</h3>
            <h3>{stocks.change}</h3>
            <h3>{stocks.high}</h3>
            <h3>{stocks.low}</h3>
            <h3>{stocks.open}</h3>
            <h3>{stocks.lastPrice}</h3>
        </div>
    );
};

export default Stocks;