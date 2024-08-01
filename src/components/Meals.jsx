import { useEffect, useState } from "react";
import useHttp from "../hooks/useHttp";
import MealItem from "./MealItem";
import Error from "./Error";

const requestConfig = {};

const Meals = () => {
  const {
    data: meals,
    isLoading,
    error,
  } = useHttp("http://localhost:3000/meals", requestConfig);
  console.log("Meals Length:", meals.length);

  if (isLoading) {
    return <p className="center">Fetching meals...</p>;
  }

  if(error) {
    return <Error title='Failed to fetch meals' message={error}/>
  }

  return (
    <ul id="meals">
      {meals.map((meal) => (
        <MealItem meal={meal} key={meal.id} />
      ))}
    </ul>
  );
};

export default Meals;
