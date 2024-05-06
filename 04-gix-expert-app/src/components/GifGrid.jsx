
import GifItem from "./GifItem";
import PropTypes from 'prop-types'
import useFetchGifs from "../hooks/useFetchGifs";

export default function GifGrid({ category }) {

  const { gifs, isLoading } = useFetchGifs(category);

  const deleteCategory = function() {
    console.log(category);
  } 

  return (
    <>
      {
        isLoading && <h2>Cargando...</h2>
      }

      <div className="card">
        <h3>{ category }</h3>
        <button className="btn" onClick={ deleteCategory } > delete Category </button>
      </div>
      <div className="card-grid">
        {
          gifs.map( (image) => (
            <GifItem 
              key={ image.id }
              { ...image }
              />
          ))
        }
      </div>
    </>
  )
}

GifGrid.propTypes = {
  category: PropTypes.string.isRequired
}