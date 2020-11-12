import React,{useState,useEffect} from 'react';

const SearchRecipe= ({termDetector}) =>{
    const [term,setTerm]= useState('');
    const onTermUpdate = (e) =>{
        setTerm(e.target.value);
        
    }
    useEffect(() => {
        termDetector(term);
    }, [term])
    return (
        <div className="search-bar ui segment" style={{backgroundColor:' rgb(20, 20, 20)',color:'white'}}>
           <form className="ui form" onSubmit={(e)=> e.preventDefault()}>
           <div className="field">
              <input type="text" onChange={(e)=>onTermUpdate(e)} placeholder="Search recipe.." />
              </div>
              </form>
        </div>
    )
}

export default SearchRecipe;