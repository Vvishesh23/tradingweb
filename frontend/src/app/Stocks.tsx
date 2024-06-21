'use client';
import React from 'react'

import { useState ,useEffect } from 'react';

const stockSymbols = {
    Apple: 'AAPL',
    Microsoft: 'MSFT',
    Tesla: 'TSLA',
    Nvidia: 'NVDA',
    Meta: 'META',
    IBM: 'IBM'
  };
  
  const Stocks = () => {
    const [selectedStock, setSelectedStock] = useState('');
    const [symbol, setSymbol] = useState('');
  
    useEffect(() => {
      if (symbol !== '') {
        const apiKey = "4THTVZYPD74QFWK8";
        const url = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=5min&apikey=${apiKey}`;
  
        fetch(url)
          .then(response => response.json())
          .then(data => {
            console.log(data);
          })
          .catch(error => {
            console.error('Error fetching stock data:', error);
          });
      }
    }, [symbol]);
  
    const handleChange = (e) => {
      const selectedStock = e.target.value;
      setSelectedStock(selectedStock);
      getSymbol(selectedStock);
    };
  
    const getSymbol = (selectedStock) => {
      if (stockSymbols[selectedStock]) {
        setSymbol(stockSymbols[selectedStock]);
      }
    };
  
    return (
      <>
        <div className='mt-20'>
          <h1 className='text-center text-2xl'>Please Select Your Stock</h1>
        </div>
        <div className="flex flex-row justify-center mt-8 ">
          <select className="block appearance-none w-48 bg-white border border-gray-300 hover:border-gray-400 px-4 py-2 pr-8  rounded shadow leading-tight focus:outline-none focus:shadow-outline" onChange={handleChange} value={selectedStock}>
            {Object.keys(stockSymbols).map((stockName) => (
              <option key={stockName} value={stockName}>{stockName}</option>
            ))}
          </select>
  
          <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9 9l-5 5 1.414 1.414L9 11.828l4.586 4.586L15 14z"/></svg>
          </div>
          <div>
            
          </div>
        </div>
      
      </>
    );
  };
  
  export default Stocks;