import React, { useEffect, useState } from 'react';
import Recipe from './widget_6_recipes'
import './widget_6.css'

const APP_ID = '6398631f';
const APP_KEY = '9ef59b84fdc778111d7c7144ab16fa05';


const Widget6 = () => {
    
  
    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState("");
    const [query, setQuery] = useState("")

    useEffect(() =>{
        getRecipes();
        }, [query]);
    
    const getRecipes = async() =>{
        const from = Math.floor(Math.random() * 9);
        const to = from+1;
        const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=${from}&to=${to}`);
        const data = await response.json();
        console.log(data.hits[0]);
        setRecipes(data.hits);
    };


    const updateSearch = e =>{
        setSearch(e.target.value)   
    }

    const getSearch = e =>{
        e.preventDefault();
        setQuery(search);
        setSearch("");
    }

    return(
        <div className="Widget section">
            <div className="card z-depth-0 Widget_1-summary">
                <div className="card-content gray-text text-darken-3">
                    <span className="card-title">Idée recette</span>
                    <form onSubmit = {getSearch} className = "search-form">
                        <input placeholder="Search..." type = "text" onChange = {updateSearch}/>
                        <button className = "btn orange lighten-1" type = "submit">Search</button>
                    </form>
                    <div className = 'recipes'>
                        {recipes.map(recipe =>(
                            <Recipe 
                                key = {recipe.recipe.label}
                                title = {recipe.recipe.label}
                                calories = {recipe.recipe.calories}
                                image = {recipe.recipe.image}
                                ingredients = {recipe.recipe.ingredients}
                            />
                        ))}
                    </div>                                   
                </div>
            </div>
        </div>
    )
}

export default Widget6