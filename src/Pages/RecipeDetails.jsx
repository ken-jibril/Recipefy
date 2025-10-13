import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";


function RecipeDetails() {
  const { id } = useParams();
  

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["recipeDetails", id],
    queryFn: async () => {
      const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
      return res.json();
    },
  });

  if (isLoading) return <p className="text-center text-white">Loading recipe...</p>;
  if (isError) return <p className="text-center text-red-500">Error: {error.message}</p>;

  const meal = data?.meals?.[0];

  if (!meal) return <p className="text-center text-white">No recipe found.</p>;

  // 🧄 extract ingredients and measures
  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = meal[`strIngredient${i}`];
    const measure = meal[`strMeasure${i}`];
    if (ingredient && ingredient.trim()) {
      ingredients.push(`${ingredient} - ${measure}`);
    }
  }


  return (
    <div className="text-white px-6 py-10">

      <h1 className="text-4xl font-bold text-center mb-6">{meal.strMeal}</h1>
      <img
        src={meal.strMealThumb}
        alt={meal.strMeal}
        className="w-full max-w-xl mx-auto rounded-2xl shadow-lg mb-8"
      />

      <p className="text-center text-2xl mb-3">
        <span className="font-bold text-2xl">Category:</span> {meal.strCategory}
      </p>
      <p className="text-center text-xl mb-6">
        <span className="font-semibold">Area:</span> {meal.strArea}
      </p>
       
       <div className="flex flex-col max-w-3xl mx-auto bg-white text-gray-800 p-6 rounded-2xl shadow-lg">
            <h2 className="text-3xl font-semibold mb-4 text-center underline-offset-8 underline decoration-black">🧂 Ingredients</h2>
            <ul className="list-disc pl-6 space-y-1 text-lg">
                {ingredients.map((item, idx) => (
                <li key={idx}>{item}</li>
                ))}
            </ul>

            <h2 className="text-3xl font-semibold mt-8 mb-4 text-center underline underline-offset-8">👨‍🍳 Instructions</h2>
            <ul className="list-decimal pl-6 space-y-2 text-lg leading-relaxed">
                {meal.strInstructions
                ?.split(/\r?\n|\r/) // split only on actual new lines
                .map((step) => step.replace(/^\d+\.\s*/, "")) // remove any "1." or "2." at the start
                .filter((step) => step.trim().length > 0) // clean up empty lines
                .map((step, index) => (
                <li key={index}>{step.trim()}</li>
                ))}
            </ul>
            {/* <p className="text-lg leading-relaxed">{meal.strInstructions}</p> */}
       </div>
    </div>
  );
}

export default RecipeDetails;
