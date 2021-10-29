import Gif from "../gif/Gif";

import './GiphGrid.css';

function GiphGrid({ data }) {
return (
  <>
  {!data.length ? (
    <p>No hay resultados...</p>
  ) : (
    <section>
      {(data || []).map((item) => {
        const {
          id,
          url:link,
          images: {
            fixed_height: { url },
          
          },
        } = item;
        console.log('link',link)
        return <Gif key={id} src={url} link={link}/>;
      })}
    </section>
  )}
</>
  );
}

export default GiphGrid;


