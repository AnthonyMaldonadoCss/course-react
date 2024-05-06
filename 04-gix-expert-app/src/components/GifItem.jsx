import propTypes from 'prop-types';
export default function GifItem({ title, url }) {
  return (
    <div className='card'>
      <h5>{ title }</h5>
      <img src={ url } alt={ title } />
      <p> { title } </p>
    </div>
  )
}

GifItem.propTypes = {
  title: propTypes.string.isRequired,
  url: propTypes.string.isRequired
}
