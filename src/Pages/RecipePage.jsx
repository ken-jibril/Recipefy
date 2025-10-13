import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Link } from "react-router-dom";

function RecipePage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [noMeals, setNoMeals] = useState(false); // 👈 track when no meals are found

  const API_URL = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`;
  const INGREDIENTS_API_URL = `https://www.themealdb.com/api/json/v1/1/list.php?i=list`;

  const {
    data,
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ["recipes", searchTerm],
    queryFn: async () => {
      const res = await fetch(API_URL);
      const json = await res.json();

      // 👇 check if no meals were found
      if (json.meals === null) {
        setNoMeals(true);
        return { meals: [] }; // return an empty array to avoid mapping errors
      } else {
        setNoMeals(false);
        return json;
      }
    },
  });

  const {
    data: ingredientsData,
    isLoading: ingredientsLoading,
    isError: ingredientsError,
  } = useQuery({
    queryKey: ["ingredients"],
    queryFn: async () => {
      const res = await fetch(INGREDIENTS_API_URL);
      return res.json();
    },
  });

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchTerm(searchInput);
  };

  // 🌀 Loading State
  if (isLoading) {
    return (
      <p className="bg-white text-gray-700 shadow-lg max-w-fit rounded px-1 py-1.5 mx-auto text-center">
        Loading...
      </p>
    );
  }

  // ⚠️ Error State
  if (isError) {
    return (
      <p className="bg-white text-gray-700 shadow-lg">
        Error: {error.message}
      </p>
    );
  }

  return (
    <>
      <h1 className="text-white text-4xl text-center font-bold py-5">
        Recipes
      </h1>

      {/* 🧭 Search Bar */}
      <form
        onSubmit={handleSearch}
        className="search flex mx-auto items-center justify-center gap-3 py-4"
      >
        <input
          type="search"
          placeholder="Chicken fry"
          required
          className="px-4 py-2.5 rounded-lg bg-white border-0 outline-0"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button
          type="submit"
          className="bg-[#92FF32] px-4 py-2.5 rounded-lg font-bold cursor-pointer"
        >
          SEARCH
        </button>
      </form>

      {/* 🥘 Meal Results */}
      {noMeals ? (
        <p className="text-black text-center text-xl font-semibold py-6">
          ❌ No meals found for "{searchTerm}". Please try another search.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-3 py-12">
          {data?.meals?.map((meal) => (
            <Link to={`/recipe/${meal.idMeal}`} key={meal.idMeal} className="flex flex-col justify-between max-w-full mx-auto rounded overflow-hidden mb-8 transition-all duration-300 hover:scale-[1.02]">
            <div
              key={meal.idMeal}
              className="flex flex-col justify-between max-w-full mx-auto bg-white rounded-xl shadow-lg overflow-hidden mb-8 transition-all duration-300 hover:scale-[1.02]"
            >
              <img
                src={meal.strMealThumb}
                alt={meal.strMeal}
                loading="lazy"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold text-center text-green-700 mb-4 line-clamp-2">
                  {meal.strMeal}
                </h2>
              </div>
            </div>
          </Link>
          ))}
        </div>
      )}

      <hr className="w-5/6 mx-auto border-white border-2" />

      {/* 🧄 Popular Ingredients (only when no search term) */}
      {!searchTerm && (
        <section>
          {ingredientsLoading && (
            <p className="bg-white text-gray-700 shadow-lg max-w-fit rounded px-1 py-1.5 mx-auto text-center">
              Loading...
            </p>
          )}
          {ingredientsError && (
            <p className="bg-white text-gray-700 shadow-lg">
              Error loading ingredients
            </p>
          )}

          <h2 className="text-white text-4xl text-center font-bold py-6">
            Popular Ingredients
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 px-3 py-12">
            {ingredientsData?.meals?.slice(0, 15).map((ingredient) => (
              <div
                key={ingredient.idIngredient}
                className="flex flex-col justify-between max-w-full mx-auto bg-white py-1 px-1 rounded-xl shadow-lg overflow-hidden mb-8 transition-all duration-300 hover:scale-[1.02]"
              >
                <img
                  src={`https://www.themealdb.com/images/ingredients/${ingredient.strIngredient}-Small.png`}
                  alt={ingredient.strIngredient}
                  loading="lazy"
                  className="w-full h-64 object-cover"
                />
                <h2 className="text-2xl font-bold text-center text-green-700 mb-4 line-clamp-2">
                  {ingredient.strIngredient}
                </h2>
              </div>
            ))}
          </div>
        </section>
      )}
    </>
  );
}

export default RecipePage;
