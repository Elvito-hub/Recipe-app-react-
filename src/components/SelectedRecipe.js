import React from 'react';
import IndivSelectedRecipe from './IndivSelectedRecipe';


const SelectedRecipe=({selectedRecipeid,recipes})=>{
const itemTorender= recipes.map((recipe)=>{
    if(recipe.id===selectedRecipeid){
        return <IndivSelectedRecipe key={recipe.id} id={recipe.id} title={recipe.title} name={recipe.name} image={recipe.image} ingredients={recipe.ingredients} directions={recipe.directions} notes={recipe.notes} />
    }else{
        return ;
    }
})
return (
     <div style={{padding:'20px',backgroundColor:'black'}}>{itemTorender}</div>
)
}

export default SelectedRecipe;