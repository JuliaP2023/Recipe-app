
import './App.css';

import { useEffect, useState } from 'react';
import video from './food.mp4';
import MyRecipesComponent from './MyRecipesComponent';


function App() {

  const MY_ID = "bc1492c9"
  const MY_KEY = "598713b485ff1e6808d3a1c3e18295a6"

  const [mySearch, setMySearch] = useState("");
  const [myRecipes, setMyRecipes] = useState([]);
  const [searchSubmitted, setSearchSubmitted] = useState("avocado")

  useEffect(() => {
    const getRecipe = async () => {
      const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${searchSubmitted}&app_id=${MY_ID}&app_key=${MY_KEY}`);
      const data = await response.json();
      setMyRecipes(data.hits);
    }
    getRecipe();
  }, [searchSubmitted])


  const myRecipeSearch = (e) => {
      setMySearch(e.target.value);
  }

  const finalSearch = (e) => {
    e.preventDefault();
    setSearchSubmitted(mySearch);
  }


  return (
      <div className="App">
        <div className="container">
          <video autoPlay muted loop>
          <source src={video} type="video/mp4" />
          </video>
        <h1>Find a Recipe</h1>
        </div>

        <div className="container">
          <form onSubmit={finalSearch}>
            <input type="text" className='search' placeholder='Search...' onChange={myRecipeSearch} value={mySearch}/> 
            <button><img src="https://img.icons8.com/3d-fluency/256/fry.png" width="30px" alt="search"/></button>
          </form>
        </div>


        <div className="containernew">
          {myRecipes.map( (element, index) => (
            <MyRecipesComponent 
            key={index}
            label={element.recipe.label} 
            photo={element.recipe.image} 
            calories={element.recipe.calories} 
            ingredients={element.recipe.ingredientLines}/>
            ) 
          )}
        </div>

      </div>
  );
}

export default App;
