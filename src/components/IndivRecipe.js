import React from 'react';


const IndivRecipe = ({name,image,title,id,onRecipeSelected}) =>{
    return(

       <div className="card" style={{backgroundColor:' rgb(20, 20, 20)',color:'white'}}>
         <div className="image">
            <img src={image} alt={name} />
         </div>

         <div className="content">
             <div className="header" style={{color:'white'}}>{name}</div>
         
         <div className="description" style={{color:'white'}}>{title}</div>
         </div>
         <button onClick={(e)=>{ 
          e.preventDefault();
          onRecipeSelected(id)
         }} className="ui inverted green button">
          View More
         </button>
         </div>

    )
}

export default IndivRecipe;