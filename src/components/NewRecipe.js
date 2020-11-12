import React,{useState} from 'react';
import _ from 'underscore';


const NewRecipe = ({newRecipeCame})=>{
   const [newrecipe,setNewRecipe]=useState({
        id:null,
        name:'',
        title:'',
        image:null,
        ingredients:'',
        directions:'',
        notes:'',
        status:'show'
    })
     const [errors,setErrors]=useState([])



    const onInputChange=(e)=>{
        const newRender = _.mapObject(newrecipe,(val,key)=>{
            if(key===e.target.name){
                return val=e.target.value;
            }else{
                return val;
            }
        })

        setNewRecipe(newRender)
    }
    const onNewrecipeHandler=()=>{
        let nbr=0
        let nbrerrors=[]
        _.mapObject(newrecipe,(val,key)=>{
            if(val===''&&key!=='id'&&key!=='image'){
                nbr++;
               return nbrerrors.push(`${key}?`)
            }
        })

       setErrors(nbrerrors)
       if(nbr===0){
           
           newRecipeCame(newrecipe)
       }


    }
  

        return(
            <div className="ui segment" style={{backgroundColor:'black',color:'white'}} >
               <form onSubmit={(e)=>e.preventDefault()}>
                  <fieldset>
                      <legend><h2>Add a recipe:</h2></legend>
                      <div className="theBox" style={{display:'grid',gridTemplateColumns:'50% 50%', gridGap:'10px', padding:'10px'}}>
                          <div className="ui input" style={{width:'75%',paddingTop:'15px'}}>
                              <input type="text" onChange={(e)=>onInputChange(e)} name="name" placeholder="Name of the recipe" />
                          </div>
                          <div className="ui input" style={{width:'75%',paddingTop:'15px'}}>
                               <input type="text" onChange={(e)=>onInputChange(e)} name="title" placeholder="Advertisable title" />
                          </div>
                          <div className="ui input" style={{paddingTop:'15px'}} >
                              <textarea name="ingredients" onChange={(e)=>onInputChange(e)} placeholder="Ingredients" style={{width:'75%',height:'100px'}}></textarea>
                          </div>
                          <div className="input" style={{paddingTop:'15px'}}>
                               <textarea placeholder="Recipe description and how to make it" onChange={(e)=>onInputChange(e)} name="directions" style={{width:'75%',height:'100px'}}></textarea>
                          </div>
                          <div className="input" style={{paddingTop:'15px'}}>
                                <textarea placeholder="Notes" name="notes" onChange={(e)=>onInputChange(e)} style={{width:'75%',height:'100px'}}></textarea>
                          </div>
                          <div className="input" style={{paddingTop:'15px'}}>
                                <button style={{width:'75%'}} onClick={(e)=>onNewrecipeHandler()} className="ui inverted green button" type="submit" >Publish recipe</button>
                                <div style={{color:'red'}}>{`${errors}`}</div>
                            </div>
                          
                      </div>
                  </fieldset>
               </form>
            </div>
        )
}

export default NewRecipe;