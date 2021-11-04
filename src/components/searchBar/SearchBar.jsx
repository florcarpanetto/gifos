
import React, { useState, useEffect } from "react";
import Button from "../button/Button";
import { request } from "../../utils/request";
import './SearchBar.css';
import ilustra_header from "../../assets/ilustra_header.svg"

function SearchBar({ onClick, value, setValue, btnDisabled }) {
  const [autocomplete, setAutocomplete] = useState([]);
  useEffect(() => {
    if (value !== "") {
      request("/search/tags", value, 5)
        .then((res) => res.json())
        .then((data) => setAutocomplete(data.data))
        .catch((err) => console.log(err));
    }
  }, [value]);

return (
    <div className="SearchBar">
      <section className='SearchBar'>
        <img src={ilustra_header} alt="ilustracion saludo" />
      <form>
        <input
          list="browsers"
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <Button message='BUSCAR' onClick={onClick} className="btn-search" disabled={btnDisabled}>
        
        </Button>
        <datalist id="browsers">
          {(autocomplete || []).map((item) => {
            console.log(item);
            return <option value={item.name} key={item.name} />;
          })}
        </datalist>
      </form>
    </section>
     
    </div>
  );
}

export default SearchBar;

