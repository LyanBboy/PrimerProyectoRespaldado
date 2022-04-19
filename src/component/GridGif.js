import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GridGif = ({ categorie }) => {

    const {data:images ,loading} = useFetchGifs(categorie);
    
    return (
        <>
            <h3 className='animate__animated animate__flipInY'>{categorie}</h3>
            {
                (loading)  && <h1 className='animate__animated animate__flash'>Cargando......</h1>
            }
        
            <div className='card-grid'>
                {/* {
                    images.map(({id,title} ,index)=> (
                        <li key={id}>{title}</li>
                    ))
                }  */}
                {
                    images.map( (img,index) => (
                        <GifGridItem 
                            key={img.id} 
                            {...img} 
                        />
                    ))
                }
            </div>
        </>
      )
}