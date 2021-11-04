import Gif from "../gif/Gif";
import { useContext } from "react";

import './GiphGrid.css';
import { IsDarkContext } from "../../contexts/IsDarkContext";



function GiphGrid({ data }) {
  const {isDark} = useContext(IsDarkContext);
return (
  <>
  {!data.length ? (
    <p>No hay resultados...</p>
  ) : (
    <section className={`GiphGrid ${isDark ? 'dark' : 'light'}`}>
      {(data || []).map((item) => {
        const {
          id,
          url:link,
          images: {
            fixed_height: { url },
          
          },
        } = item;
        console.log('link',link)
        return <Gif className='Gif' key={id} src={url} link={link}/>;
      })}
    </section>
  )}
</>
  );
}

export default GiphGrid;


