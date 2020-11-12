import React from 'react';

const IndivSelectedRecipe = ({name,image,title,id,directions,ingredients,notes}) =>{
return (
   <div style={{ display:'grid',gridTemplateRows:'250px 350px',backgroundColor:'rgb(20, 20, 20)',padding:'10px'}}>
         <div className="item" style={{display:'grid',gridTemplateColumns:'20% 80%',height:'200px'}}>
           <div style={{paddingTop:'50%'}}>
            <h2 style={{color:'green'}}>{name}</h2>
            </div>
            <div style={{position:'relative'}}>
            <img src={image} style={{position:'absolute',width:'60%',height:'100%'}} alt={name} />
            </div>
         </div>

         <div className="item">
         
         <div class="ui divider"></div>
         <h2 style={{color:'green'}}>Ingredients</h2>
         <div className="description" style={{color:'white'}}>{ingredients}</div>
         <div class="ui divider"></div>
         <h2 style={{color:'green'}}>Directions</h2>
         <div className="description" style={{color:'white'}}>{directions}</div>
         <div class="ui divider"></div>
         <h2 style={{color:'green'}}>Notes</h2>
         <div className="description" style={{color:'white'}}>{notes}</div>
         </div>
         </div>

)
}

export default IndivSelectedRecipe;