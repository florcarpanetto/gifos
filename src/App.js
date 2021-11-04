import { useContext } from 'react/cjs/react.development';
import React, { useState, useEffect } from "react";
import './App.css';
import GiphGrid from './components/giphGrid/GiphGrid';
import Header from './components/header/Header';
import SearchBar from './components/searchBar/SearchBar';
import { IsDarkContext } from './contexts/IsDarkContext';
import { request, trending } from "./utils/request";

function App() {
  const {isDark} = useContext(IsDarkContext);
  console.log('desde app', isDark)

  const [value, setValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [gifsList, setGifsList] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    if (value === "") {
      setIsLoading(true);
      trending()
      .then((res) => res.json())
      .then((data) => setGifsList(data.data))
      .catch((err) => console.log(err))
      .finally(() => {
        setIsLoading(false);
        });
    }
  }, []);

  useEffect(() => {
    if (isSearching && value !== "") {
      setIsLoading(true);
      request("/search", value)
      .then((res) => res.json())
      .then((data) => setGifsList(data.data))
      .catch((err) => console.log(err))
      .finally(() => {
        setIsSearching(false);
        setIsLoading(false);
        });
    }
  }, [isSearching, value]);
  console.log('gifsList', gifsList)

  return (
    
      <div className={`App ${isDark ? 'dark' : 'light'}`}>
        <Header className='Header'/>
        <SearchBar className='SearchBar' onClick={() => setIsSearching(!isSearching)}
        value={value}
        setValue={setValue}
        btnDisabled={isSearching || value === ""}/>
        {isLoading ? <p>Cargando...</p> : <GiphGrid data={gifsList} />}
        
      </div>

    
    
  );
}

export default App;

