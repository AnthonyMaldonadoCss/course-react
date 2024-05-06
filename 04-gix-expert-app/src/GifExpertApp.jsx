import { useState } from 'react'
import GifGrid  from './components/GifGrid';
import  AddCategory  from './components/AddCategory';

const GifExpertApp = () => {
  
  const [categories, setCategories] = useState(['Dragon Ball']);

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
      <h1>GifExpertApp</h1>
      <AddCategory 
        onNewCategory={ onAddCategory }
      />
        {
          categories.map((category) => (
            <GifGrid 
              key={ category } 
              category={ category } 
            />
          ))
        }
    </>
  )
}

export default GifExpertApp
