import React from 'react';
import IndivRecipe from './IndivRecipe';

const RecipeList = ({recipes,onRecipeSelected}) =>{
    const renderedRecipes = recipes.map((recipe)=>{
        if(recipe.status==='show'){
        return <IndivRecipe key={recipe.id} id={recipe.id} title={recipe.title} name={recipe.name} onRecipeSelected={onRecipeSelected} image={recipe.image} ingredients={recipe.ingredients} directions={recipe.directions} notes={recipe.notes} />
        }else{
            return '';
        }
    })
    return (
        <div className="ui link cards">
        {renderedRecipes}
        </div>
    )
}

export default RecipeList;