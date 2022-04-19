import React, { useState } from 'react';
import { AddCategorie } from './component/AddCategorie';
import { GridGif } from './component/GridGif';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Garfield'])

  return (
    <>
        <h2>GifExpertApp</h2>
        <AddCategorie handleSetCategories={setCategories} />
        <hr></hr>
        <ol>
        {
            categories.map( (value ,index) => 
                <GridGif
                    key={value.trim()+index}
                    categorie={value}
                /> 
            )
        }
        </ol>
    </>
  )
}
