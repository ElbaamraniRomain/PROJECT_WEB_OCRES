import React from 'react'
import './widget_6.css'


const Recipe = ({title, calories, image, ingredients}) =>{
    return(
        <div>
            <h3>{title}</h3><img classeName = "image" src={image} alt=""></img> 
            <ol>
                {ingredients.map(ingredients =>(
                    <li>
                        {ingredients.text}
                    </li>
                ))}
            </ol>
            <p>calories: {Math.round(calories)}</p>
        </div>
    );
}

export default Recipe;