import { useState } from 'react'
import AddCategory from './components/AddCategory';

const GifExpertApp = () => {
  
  const [categories, setCategories] = useState(['One Punch', 'Samurai X', 'Dragon Ball']);

  console.log(categories);

  const onAddCategory = (NewCategory) => {
    console.log(NewCategory);
    setCategories([ ...categories, NewCategory ]);
  }

  return (
    <>
      {/* titulo */}
      <h1>GifExpertApp</h1>
      
      {/* input */}
      <AddCategory 
        // setCategories={ setCategories } 
        onNewCategory={ onAddCategory }
      />
      {/* <button onClick={ onAddCategory } >Agregar categoría</button> */}
      
      {/* Listado de categorias */}
      <ol>
        {
          categories.map((category, index) => (
            <li key={ index }> { category.toUpperCase() } </li>
          ))
        }
      </ol>
    </>
  )
}

export default GifExpertApp
