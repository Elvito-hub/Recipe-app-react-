import React from 'react';
import RecipeList from './RecipeList';
import frozenvanilla from '../frozenvanilla.jpg';
import friedchicken from '../friedchicken.jpg';
import SearchRecipe from './SearchRecipe';
import NewRecipe from './NewRecipe';
import Header from './Header';
import Route from './Route';
import SelectedRecipe from './SelectedRecipe';

class App extends React.Component{
    state={recipes: [{
        id:1,
        name:'Frozen Vanilla',
        title:'Make yourself a desert',
        image:frozenvanilla,
        ingredients:'5 large egg yolks, ⅔ cup white sugar, 1 pinch salt, 1 cup whole milk , 2 cups heavy cream ,2 ½ teaspoons pure vanilla extract',
        directions:'Step 1 Whisk egg yolks, sugar, and salt together until mixture changes from dark golden to pale yellow becomes fluffy.' ,
        notes: 'You can substitute 1 split and scraped whole vanilla bean for 2 1/2 teaspoons vanilla extract.',
        status:'show'
    },
{
    id:2,
    name:'Fried Chicken',
    title:'Best chicken Ever',
    image:friedchicken,
    ingredients:'½ whole chicken (cut into separate pieces (breast, thigh, wing, and leg)),½ cup hot sauce,½ cup buttermilk,¾ cup All-Purpose Flour,2 tsp seasoning salt',
    directions:'Step 1 Pat chicken thighs dry with a paper towel and brush the skin-side of each piece with olive oil. Place chicken thighs, skin-side down, in a single layer on a plate.',
    notes:'An instant-read thermometer inserted into the center should read at least 165 degrees F (74 degrees C).',
    status:'show'
}],
   selectedRecipeid:null}
    termDetector=(term)=>{
        const newRecipesList= this.state.recipes.map((recipe)=>{
            recipe.status='hide';
            if(recipe.name.toLowerCase().search(term.toLowerCase())>=0){
                recipe.status='show';
            }
            return recipe;
        })
        this.setState({recipes:newRecipesList})

    
    }

    newRecipeCame=(newRecipe)=>{
        newRecipe.image=friedchicken;
        newRecipe.status='show'
        let idNbr=this.state.recipes.length+1;
        newRecipe.id=idNbr;
        
        this.setState({recipes:[...this.state.recipes,newRecipe]})
       window.history.pushState({},'','/')
       const pageChangeEvent = new PopStateEvent('popstate');
       window.dispatchEvent(pageChangeEvent) 
    }
    onRecipeSelected=(selectedId)=>{
        this.setState({selectedRecipeid:selectedId})
        window.history.pushState({},'','/completedrecipeshow')
        const newEvent = new PopStateEvent('popstate');
        window.dispatchEvent(newEvent)
    }
    render(){
        return(
            <div style={{display:'grid', gridTemplateColumns:'15% 75%', paddingTop:'10%',position:'relative'}}>
              <div style={{width:'100%'}}>
              <Header />
              </div>
              <div style={{float:'right'}}>
              <Route path="/">
                  <div className="ui segment" style={{backgroundColor:'black',minHeight:'80vh',color:'white'}}>
                  <h1 style={{fontFamily:'monospace',marginLeft:'10px'}}>Recipes</h1>
                  <SearchRecipe termDetector={this.termDetector} />
                  <RecipeList recipes={this.state.recipes} onRecipeSelected={this.onRecipeSelected} />
                  </div>
              </Route>
              <Route path="/newrecipe">
                 <NewRecipe newRecipeCame={this.newRecipeCame}  />
              </Route>
              <Route path="/completedrecipeshow">
                 <SelectedRecipe recipes={this.state.recipes} selectedRecipeid={this.state.selectedRecipeid}/>
              </Route>
              </div>
             </div>
        )
    }
}

export default App;