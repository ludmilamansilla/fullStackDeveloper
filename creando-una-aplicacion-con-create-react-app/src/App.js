import React, { useState } from "react"
import { AddCategory } from './components/AddCategory'
import { GifGrid } from "./components/GifGrid";

export const App = () => {

  const [categories, setCategories] = useState([]) 

  return (
    <> 
      <h1>
        Giphy Browser
      </h1>

      {
        <AddCategory 
        setCategories={setCategories}
        />
      }

      <ol>
        {
          categories.map(( category, index) => (
            
            <GifGrid
              key={category + index}
              category={category}
            />
          ))
        } 
      </ol>

    </>
  );
}
