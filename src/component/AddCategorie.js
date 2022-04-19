import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategorie = ({ handleSetCategories }) => {

    const [input, setInput] = useState('');

    const handleOnChange = (e) => {
        setInput(e.target.value)
    }    
    const handleOnSubmit = (e) => {
        e.preventDefault();
        if(input.trim().length > 1){
            handleSetCategories( (categories)=> [input ,...categories]);
        }
    }

  return (
    <form onSubmit={ handleOnSubmit }>
        <input
            type="text"
            onChange={ handleOnChange }
            value={input}
        />
    </form>
  )
}

AddCategorie.propTypes = {
    handleSetCategories : PropTypes.func.isRequired
}

