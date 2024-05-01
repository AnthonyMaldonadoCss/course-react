import { useState } from 'react'
import AddCategory from './components/AddCategory';


const GifExpertApp = () => {
  
  const [categories, setCategories] = useState(['One Punch', 'Samurai X', 'Dragon Ball']);

  console.log(categories);

  const validateCategory = (newCategory) => {
    
    const validate = (category) => {
      const bodyCategory = category.split(' ').map(word => word.toLowerCase()).join(' ');
      newCategory = newCategory.split(' ').map(word => word.toLowerCase()).join(' ');
      return bodyCategory === newCategory
    }

    return categories.some( validate );
  }

  const onAddCategory = (NewCategory) => {
    if ( validateCategory(NewCategory) ) return;
    
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
          categories.map((category) => (
            <li key={ category }> { category.toUpperCase() } </li>
          ))
        }
      </ol>
    </>
  )
}

export default GifExpertApp
