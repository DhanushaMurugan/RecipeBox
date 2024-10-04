import React, { useEffect, useState } from "react";

import breakfast from "../Images/breakfast.jpg";
import meal from "../Images/meal.jpg";
import dinner from "../Images/dinner.jpg";
import dessert from "../Images/dessert.jpg";
import recipe1 from "../Images/recipe1.jpg";
import recipe2 from "../Images/recipe2.jpg";
import recipe3 from "../Images/recipe3.jpg";
import recipe4 from "../Images/recipe4.jpg";
import recipe5 from "../Images/recipe5.jpg";
import recipe6 from "../Images/recipe6.jpg";

import axios from "axios";

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import NavBar from "./NavBar";

function Homepage() {
  //function declaration for search bar
  const [searchTerm, setSearchTerm] = useState(""); // User input for search
  const [searchResults, setSearchResults] = useState([]); // Store search results
  // const [loading, setLoading] = useState(false); // Loading state
  const [isSearchRecipeModalOpen, setIsSearchRecipeModalOpen] = useState(false); // Control recipe modal
  const [SearchselectedMeal, setSearchSelectedMeal] = useState(null); // Store selected meal details


  //header meal breakfast dessert dinner
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isCategoryModalOpen, setIsCategoryModalOpen] = useState(false);
  const [isRecipeModalOpen, setIsRecipeModalOpen] = useState(false);
  const [selectedMeal, setSelectedMeal] = useState(null);

  //function for sign up
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Log the form data
    console.log("Full Name:", fullName);
    console.log("Email:", email);

    // Optionally, add your logic for sending data to a backend or displaying a confirmation
    alert("Welcome to Flavor Haven, Explore delicious recipes");

    // Reset form after submission
    setFullName("");
    setEmail("");
  };

  //header meal breakfast dessert dinner
  // Fetch meals from a specific category
  const fetchMeals = (category) => {
    setLoading(true);
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`) // Dynamic category URL
      .then((response) => {
        setMeals(response.data.meals);
        setIsCategoryModalOpen(true);
      })
      .catch((error) =>
        console.error(`Error fetching ${category} meals:`, error)
      )
      .finally(() => setLoading(false));
  };

  const fetchMealDetails = (idMeal) => {
    setLoading(true);
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`)
      .then((response) => {
        setSelectedMeal(response.data.meals[0]);
        setIsRecipeModalOpen(true);
      })
      .catch((error) => console.error("Error fetching meal details:", error))
      .finally(() => setLoading(false));
  };

  const closeCategoryModal = () => setIsCategoryModalOpen(false);
  const closeRecipeModal = () => setIsRecipeModalOpen(false);


 //function code for search bar
  // Function to fetch recipe based on user input
  const searchRecipes = (term) => {
    if (term.trim() === "") return; // Don't search if the input is empty

    setLoading(true);
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`)
      .then((response) => {
        if (response.data.meals) {
          setSearchResults(response.data.meals); // Store the results
          setIsSearchRecipeModalOpen(true); // Open the modal to display the results
        } else {
          setSearchResults([]); // Clear results if no match is found
        }
      })
      .catch((error) => console.error("Error fetching search results:", error))
      .finally(() => setLoading(false));
  };

  // Debounce function to delay the API call
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (searchTerm) {
        searchRecipes(searchTerm);
      }
    }, 500); // Adjust the delay (500ms) as needed

    return () => clearTimeout(delayDebounceFn); // Cleanup on unmount or new search term
  }, [searchTerm]);

  // Close recipe modal
  const closeSearchRecipeModal = () => setIsSearchRecipeModalOpen(false);

  return (
    <div>
      <div className="bg-gray-50">
        <NavBar />
        <p className="font-medium text-2xl font-domine py-12 text-center bg-grey-50">
          Simple recipes made for
          <span className=" pl-3 font-great-vibes text-customPurple text-4xl tracking-widest font-medium">
            real, actual, every day life
          </span>
        </p>
        <div className="flex flex-wrap justify-center gap-6 py-5">
          {/* Breakfast Card */}
          <div className="w-full sm:w-72 text-center">
            <img
              src={breakfast}
              alt="breakfast"
              className="h-60 w-full object-cover rounded-lg shadow-lg transition duration-300 hover:scale-105 hover:shadow-2xl hover:opacity-90"
            />
            <div className="pt-4">
              <button
                className="text-2xl font-semibold w-full bg-gradient-to-r from-[#734060] to-[#a0527f] text-white py-3 rounded-lg 
          shadow-lg hover:from-[#a0527f] hover:to-[#734060] hover:scale-105 transition-transform
          duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-[#734060]/50"
                onClick={() => fetchMeals("Breakfast")}
              >
                Breakfast
              </button>
            </div>
          </div>

          {/* Meal Card */}
          <div className="w-full sm:w-72 text-center">
            <img
              src={meal}
              alt="meal"
              className="h-60 w-full object-cover rounded-lg shadow-lg transition duration-300 hover:scale-105 hover:shadow-2xl hover:opacity-90"
            />
            <div className="pt-4">
              <button
                className="w-full bg-gradient-to-r from-[#734060] to-[#a0527f] text-white py-3 rounded-lg shadow-lg
          hover:from-[#a0527f] hover:to-[#734060] hover:scale-105 transition-transform duration-300 ease-in-out
          focus:outline-none focus:ring-4 focus:ring-[#734060]/50 text-2xl font-semibold"
                onClick={() => fetchMeals("Chicken")}
              >
                Meal
              </button>
            </div>
          </div>

          {/* Dinner Card */}
          <div className="w-full sm:w-72 text-center">
            <img
              src={dinner}
              alt="dinner"
              className="h-60 w-full object-cover rounded-lg shadow-lg transition duration-300 hover:scale-105 hover:shadow-2xl hover:opacity-90"
            />
            <div className="pt-4">
              <button
                className="w-full bg-gradient-to-r from-[#734060] to-[#a0527f] text-white py-3 rounded-lg shadow-lg hover:from-[#a0527f]
          hover:to-[#734060] hover:scale-105 transition-transform duration-300 ease-in-out 
          focus:outline-none focus:ring-4 focus:ring-[#734060]/50 text-2xl font-semibold"
                onClick={() => fetchMeals("Pasta")}
              >
                Dinner
              </button>
            </div>
          </div>

          {/* Dessert Card */}
          <div className="w-full sm:w-72 text-center">
            <img
              src={dessert}
              alt="dessert"
              className="h-60 w-full object-cover rounded-lg shadow-lg transition duration-300 hover:scale-105 hover:shadow-2xl hover:opacity-90"
            />
            <div className="pt-4">
              <button
                className="w-full bg-gradient-to-r from-[#734060] to-[#a0527f] text-white py-3 rounded-lg shadow-lg hover:from-[#a0527f]
          hover:to-[#734060] hover:scale-105 transition-transform duration-300 ease-in-out focus:outline-none 
          focus:ring-4 focus:ring-[#734060]/50 text-2xl font-semibold"
                onClick={() => fetchMeals("Dessert")}
              >
                Dessert
              </button>
            </div>
          </div>
        </div>

        {/* Category Modal for displaying meals */}
        {isCategoryModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
            <div className="bg-white w-full max-w-4xl p-6 rounded-lg shadow-lg relative max-h-[90vh] overflow-y-auto">
              <button
                className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
                onClick={closeCategoryModal}
              >
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              <h2 className="text-2xl font-bold mb-4">Selected Recipes</h2>

              <div className="max-h-[70vh] overflow-y-auto">
                {loading ? (
                  <p className="text-center text-gray-500">Loading...</p>
                ) : meals && meals.length > 0 ? ( // Check if meals is not null and has items
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {meals.map((meal) => (
                      <div
                        key={meal.idMeal}
                        className="p-4 border rounded shadow-md hover:shadow-lg cursor-pointer"
                        onClick={() => {
                          fetchMealDetails(meal.idMeal);
                          closeCategoryModal();
                        }}
                      >
                        <h3 className="text-lg mb-5 font-semibold">
                          {meal.strMeal}
                        </h3>
                        <img
                          src={meal.strMealThumb}
                          alt={meal.strMeal}
                          className="w-full h-40 object-cover mb-2 rounded"
                        />
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-center text-gray-500">No meals found.</p> // Fallback message
                )}
              </div>
            </div>
          </div>
        )}

        {/* Recipe Modal for displaying selected meal details */}
        {isRecipeModalOpen && selectedMeal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
            <div className="bg-white w-full max-w-3xl p-6 rounded-lg shadow-lg relative max-h-[90vh] overflow-y-auto">
              <button
                className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
                onClick={closeRecipeModal}
              >
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              <h2 className="text-2xl font-bold mb-4">
                {selectedMeal.strMeal}
              </h2>
              <img
                src={selectedMeal.strMealThumb}
                alt={selectedMeal.strMeal}
                className="w-full h-48 object-cover rounded mb-4"
              />
              <p className="mt-4">{selectedMeal.strInstructions}</p>

              <ul className="mt-4">
                <h3 className="font-bold">Ingredients:</h3>
                {Array.from({ length: 20 }, (_, index) => {
                  const ingredient = selectedMeal[`strIngredient${index + 1}`];
                  const measure = selectedMeal[`strMeasure${index + 1}`];
                  return (
                    ingredient && (
                      <li key={index}>
                        {ingredient} - {measure}
                      </li>
                    )
                  );
                })}
              </ul>
            </div>
          </div>
        )}

        {/* Search bar */}
        <div className="flex items-center justify-center pt-16">
          <div className="relative w-full max-w-md">
            <form>
              <input
                type="text"
                placeholder="Search for a recipe..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)} // Capture user input and trigger search
                className="font-semibold w-full py-3 pl-12 pr-4 bg-white border border-gray-400 rounded-lg
          shadow-md text-gray-700 focus:outline-none focus:ring-4 focus:ring-[#734060] transition duration-300 ease-in-out
          sm:text-base text-lg" // Adjust text size for smaller screens
              />
              <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                <MagnifyingGlassIcon className="h-6 w-6 text-gray-500" />
              </div>
            </form>
          </div>
        </div>

        {/*function code to serach bar */}
        {/* Recipe Modal for displaying search results */}
        {isSearchRecipeModalOpen && searchResults.length > 0 && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
            <div className="bg-white w-full max-w-3xl p-6 rounded-lg shadow-lg relative max-h-[90vh] overflow-y-auto">
              <button
                className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
                onClick={closeSearchRecipeModal}
              >
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              <h2 className="text-2xl font-bold mb-4">Search Results</h2>

              <div className="max-h-[70vh] overflow-y-auto">
                {loading ? (
                  <p className="text-center text-gray-500">Loading...</p>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {searchResults.map((meal) => (
                      <div
                        key={meal.idMeal}
                        className="p-4 border rounded shadow-md hover:shadow-lg cursor-pointer"
                        onClick={() => {
                          setSearchSelectedMeal(meal); // Store selected meal details
                          closeSearchRecipeModal(); // Close the modal when a meal is clicked
                        }}
                      >
                        <h3 className="text-lg mb-5 font-semibold">
                          {meal.strMeal}
                        </h3>
                        <img
                          src={meal.strMealThumb}
                          alt={meal.strMeal}
                          className="w-full h-40 object-cover mb-2 rounded"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
        {/* Detailed Recipe Modal for displaying selected meal details */}
        {SearchselectedMeal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
            <div className="bg-white w-full max-w-3xl p-6 rounded-lg shadow-lg relative max-h-[90vh] overflow-y-auto">
              <button
                className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
                onClick={() => setSearchSelectedMeal(null)} // Close the detailed modal
              >
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              <h2 className="text-2xl font-bold mb-4">
                {SearchselectedMeal.strMeal}
              </h2>
              <img
                src={SearchselectedMeal.strMealThumb}
                alt={SearchselectedMeal.strMeal}
                className="w-full h-48 object-cover rounded mb-4"
              />
              <p className="mt-4">{SearchselectedMeal.strInstructions}</p>

              <ul className="mt-4">
                <h3 className="font-bold">Ingredients:</h3>
                {Array.from({ length: 20 }, (_, index) => {
                  const ingredient =
                    SearchselectedMeal[`strIngredient${index + 1}`];
                  const measure = SearchselectedMeal[`strMeasure${index + 1}`];
                  return (
                    ingredient && (
                      <li key={index}>
                        {ingredient} - {measure}
                      </li>
                    )
                  );
                })}
              </ul>
            </div>
          </div>
        )}

        <div>
          <div>
            <p className="font-medium text-2xl font-domine py-12 text-center bg-gray-50">
              From our kitchen to yours
              <span className="pl-3 font-great-vibes text-customPurple text-4xl tracking-widest font-medium">
                every dish tells a story!
              </span>
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 py-6">
            <div className="w-72 text-center">
              <img
                src={recipe1}
                alt="recipe1"
                className="h-64 w-full object-cover rounded-lg shadow-lg transition duration-300 hover:scale-105 hover:shadow-2xl hover:opacity-90"
              />
            </div>
            <div className="w-72 text-center">
              <img
                src={recipe2}
                alt="recipe2"
                className="h-64 w-full object-cover rounded-lg shadow-lg transition duration-300 hover:scale-105 hover:shadow-2xl hover:opacity-90"
              />
            </div>
            <div className="w-72 text-center">
              <img
                src={recipe3}
                alt="recipe3"
                className="h-64 w-full object-cover rounded-lg shadow-lg transition duration-300 hover:scale-105 hover:shadow-2xl hover:opacity-90"
              />
            </div>
            <div className="w-72 text-center">
              <img
                src={recipe4}
                alt="recipe4"
                className="h-64 w-full object-cover rounded-lg shadow-lg transition duration-300 hover:scale-105 hover:shadow-2xl hover:opacity-90"
              />
            </div>
          </div>

          <div className="flex items-center justify-center py-16">
            <button
              className="font-semibold py-2 w-96 bg-gradient-to-r from-[#734060] to-[#a0527f] text-white rounded-lg shadow-lg hover:from-[#a0527f] hover:to-[#734060] hover:scale-105 transition-transform duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-[#734060]/50 text-2xl"
              onClick={() => fetchMeals("Vegetarian")}
            >
              Vegetarian Recipes
            </button>
          </div>
          <div className="pb-10 text-center">
            <div className="w-full bg-neutral-500 h-auto text-white py-10">
              <h1 className="font-semibold text-3xl font-great-vibes text-amber-300 tracking-widest mb-4">
                I Love Food
              </h1>
              <h1 className="font-semibold text-lg sm:text-xl md:text-2xl px-4">
                In this space, I am always sharing fresh, flavorful, (mostly)
                healthy recipes that I love to make and eat in my real, actual,
                everyday life. If I wouldn’t eat it in real life, I won’t put it
                on the blog. My goal is to inspire you with food that is both
                approachable AND exciting, whether you’re cooking for yourself,
                your family, your roommates, or your friends. I want you to be
                so excited about these recipes that you eagerly await 5pm when
                you can go home from work and start cooking.
              </h1>
            </div>
          </div>
          <div className="flex flex-col md:flex-row py-16 justify-center text-center">
            <div className="h-auto w-full md:w-96 shadow-lg bg-zinc-200 font-semibold text-gray-500 font-domine p-5">
              <p className="font-medium text-2xl font-domine py-4 text-black">
                Hii !
              </p>
              <p className="font-great-vibes text-customPurple text-4xl tracking-widest font-medium">
                Nice to meet you
              </p>
              <p className="py-6 text-xl">
                You're looking to impress guests or simply enjoy a comforting
                meal, our diverse collection has you covered. Explore various
                cuisines, including traditional favorites and modern twists.
              </p>
              <p className="py-6 text-xl">
                Additionally, we provide helpful tips and tricks to elevate your
                cooking skills. Join us in celebrating the joy of cooking.
              </p>
            </div>
            <div className="pl-5 mt-5 md:mt-0">
              <img
                src={recipe5}
                alt="recipe5"
                className="h-auto w-full md:w-96 shadow-lg object-cover rounded-lg"
              />
            </div>
            <div className="pl-5 mt-5 md:mt-0">
              <img
                src={recipe6}
                alt="recipe6"
                className="h-auto w-full md:w-96 shadow-lg object-cover rounded-lg"
              />
            </div>
          </div>

          
          <div className="mt-16 text-center">
            <div className="w-full mx-auto  bg-customPurple p-8 shadow-lg rounded-lg ">
              <h3 className="font-semibold text-3xl font-great-vibes text-amber-300 tracking-widest py-6">
                Get It Now
              </h3>
              <p className="text-center text-gray-100 text-3xl">
                Pinch of Yum Cookbook
              </p>
              <form className="mt-6 py-6" onSubmit={handleSubmit}>
                <div className="flex flex-col md:flex-row gap-4">
                  {/* First Name Input */}
                  <div className="flex-1">
                    <label htmlFor="first-name" className="sr-only">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="first-name"
                      className="w-full px-4 py-2 border rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-300"
                      placeholder="Full Name"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      required
                    />
                  </div>
                  {/* Email Input */}
                  <div className="flex-1">
                    <label htmlFor="email" className="sr-only">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-300"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  {/* Submit Button */}
                  <div>
                    <button
                      type="submit"
                      className="w-full bg-yellow-400 text-white font-bold text-xl px-6 py-2 rounded-md hover:bg-yellow-500 transition duration-200"
                    >
                      Go
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Homepage;
