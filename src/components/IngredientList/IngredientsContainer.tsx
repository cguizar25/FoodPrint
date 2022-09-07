import React, { useState, useContext } from "react";
import Ingredients from "./Ingredients";
import "./IngredientList.css"
import { FoodprintContext } from "../../store/foodprint-context";
import { fetchID } from '../../utils/main';
import { ingredientChange } from '../../utils/main';


export default function IngredientsContainer () {
   const foodprintCtx = useContext(FoodprintContext);
   const [ userIngredient, setUserIngredient ] = useState<string>("");
   const { addIngredient, items } = foodprintCtx.ingredients;
   const { isLoggedIn } = foodprintCtx.login;


  const submitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
     event.preventDefault();
     const formattedIngredient = userIngredient.toLowerCase();
     if (isLoggedIn) {
       ingredientChange({id: await fetchID(), ingredient: {id: `${items.length}`, text: formattedIngredient}, action: 'add'});
     }
     items.map(e => e.text).includes(formattedIngredient) ? null : addIngredient(formattedIngredient);
     setUserIngredient("");
   }

   return (
        <ul className="Ingredients-Container">
            <header>Current Ingredients</header>
            <Ingredients />
            <form onSubmit={submitHandler} data-testid="form">
              <input
                id="userIngredient"
                placeholder="Add an ingredient"
                type="text"
                onChange={(event) => setUserIngredient(event?.target.value)}
                value={userIngredient}
              />
            </form>
        </ul>
    )
}
