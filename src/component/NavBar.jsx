import React, { useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
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
import { useNavigate } from "react-router";
import axios from "axios";

function NavBar() {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const [searchResults, setSearchResults] = useState(null);

  //breakfast function code

  const [meals, setMeals] = useState([]); // Store meals by category
  const [loading, setLoading] = useState(false);
  const [isCategoryModalOpen, setIsCategoryModalOpen] = useState(false); // Control category modal
  const [isRecipeModalOpen, setIsRecipeModalOpen] = useState(false); // Control recipe modal
  const [selectedMeal, setSelectedMeal] = useState(null); // Store selected meal details

  // Fetch meals from Breakfast category
  const fetchMeals = () => {
    setLoading(true);
    axios
      .get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Breakfast")
      .then((response) => {
        setMeals(response.data.meals); // Store meals
        setIsCategoryModalOpen(true); // Open the category modal
      })
      .catch((error) => console.error("Error fetching breakfast meals:", error))
      .finally(() => setLoading(false));
  };

  // Fetch detailed meal information (instructions) by meal ID
  const fetchMealDetails = (idMeal) => {
    setLoading(true);
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`)
      .then((response) => {
        setSelectedMeal(response.data.meals[0]); // Store selected meal details
        setIsRecipeModalOpen(true); // Open the second modal to show recipe details
      })
      .catch((error) => console.error("Error fetching meal details:", error))
      .finally(() => setLoading(false));
  };

  // Close modals
  const closeCategoryModal = () => setIsCategoryModalOpen(false);
  const closeRecipeModal = () => setIsRecipeModalOpen(false);

  // Handle button click to fetch breakfast meals
  const handleRecipeClick = () => {
    fetchMeals(); // Call fetchMeals to get breakfast meals
  };

  // //Function to close the modal
  // const closeModal = () => {
  //   setIsModalOpen(false);
  //   setSearchResults(null); // Clear search results when modal closes
  // };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Log the form data
    console.log("First Name:", firstName);
    console.log("Email:", email);

    // Optionally, add your logic for sending data to a backend or displaying a confirmation
    alert("Welcome to Flavor Haven, Explore delicious recipes");

    // Reset form after submission
    setFirstName("");
    setEmail("");
  };

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");

  // Function to handle sign up submit
  const submit = (e) => {
    e.preventDefault();
    if (fullName && email) {
      const signUp = {
        name: fullName,
        email: email,
      };
      
      // Display success message
      alert(
        `Sign-up successful! ${fullName}, we will send new recipes to your ${email}`
      );

      setFullName([...fullName, signUp]);
      // Close the modal and reset the form
      setIsModalOpen(false);
      setFullName("");
      setEmail("");
    } else {
      alert("Please fill in all fields.");
    }
  };

  // Function to open the modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  return (
    <div>
      <div className="bg-gray-50">
        <div class=" bg-customPurple text-zinc-300 p-4 tracking-widest font-bold font-domine text-center">
          <p>
            OUR RECIPES, YOUR INBOX.{" "}
            <button onClick={openModal}>
              <span className="text-white">SIGN UP</span>
            </button>
          </p>
        </div>
        <div className="bg-white shadow-md py-4">
          <div className="container mx-auto flex justify-between items-center">
            <div>
              <h1 className="font-domine font-semibold text-5xl text-customPurple">
                Recipe Box
              </h1>
            </div>

            <div className="flex items-center space-x-8">
              <p className="text-lg font-semibold cursor-pointer">HOME</p>
              <p className="text-lg font-semibold cursor-pointer">ABOUT</p>
              <p className="text-lg font-semibold cursor-pointer">RECIPES</p>

              <p
                className="text-lg font-semibold cursor-pointer"
                onClick={() => navigate("/StartHerePage")}
              >
                START HERE
              </p>
              <MagnifyingGlassIcon className="h-6 w-6 text-gray-500 cursor-pointer" />
            </div>
          </div>
        </div>
        <p className="font-medium text-2xl font-domine py-12 text-center bg-grey-50">
          Simple recipes made for
          <span className=" pl-3 font-great-vibes text-customPurple text-4xl tracking-widest font-medium">
            real, actual, every day life
          </span>
        </p>
        <div className=" flex justify-evenly ">
          <div className="w-72  text-center">
            <img
              src={breakfast}
              alt="breakfast"
              className="h-[500px] w-auto object-cover rounded-lg shadow-lg transition duration-300 hover:scale-105 hover:shadow-2xl hover:opacity-90"
            />
            <div className="pt-8">
              <button
                className=" text-2xl font-semibold w-60 bg-gradient-to-r from-[#734060] to-[#a0527f] text-white py-3 rounded-lg 
              shadow-lg hover:from-[#a0527f] hover:to-[#734060] hover:scale-105 transition-transform
               duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-[#734060]/50"
                onClick={handleRecipeClick}
              >
                Breakfast
              </button>
            </div>
          </div>

          {/* Category Modal for displaying Breakfast meals */}
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

                <h2 className="text-2xl font-bold mb-4">Breakfast Recipes</h2>

                <div className="max-h-[70vh] overflow-y-auto">
                  {loading ? (
                    <p className="text-center text-gray-500">Loading...</p>
                  ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {meals.map((meal) => (
                        <div
                          key={meal.idMeal}
                          className="p-4 border rounded shadow-md hover:shadow-lg cursor-pointer"
                          onClick={() => {
                            fetchMealDetails(meal.idMeal); // Fetch recipe details when meal is clicked
                            closeCategoryModal(); // Close the category modal
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
                    const ingredient =
                      selectedMeal[`strIngredient${index + 1}`];
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
          <div className="w-72  text-center">
            <img
              src={meal}
              alt="meal"
              className="h-[500px] w-auto object-cover rounded-lg shadow-lg transition duration-300 hover:scale-105 hover:shadow-2xl hover:opacity-90"
            />
            <div className="pt-8">
              <button className="w-60 bg-gradient-to-r from-[#734060] to-[#a0527f] text-white py-3 rounded-lg shadow-lg hover:from-[#a0527f] hover:to-[#734060] hover:scale-105 transition-transform duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-[#734060]/50">
                <h1 className="text-2xl font-semibold">Meal</h1>
              </button>
            </div>
          </div>
          <div className="w-72 text-center">
            <img
              src={dinner}
              alt="dinner"
              className="h-[500px] w-auto object-cover rounded-lg shadow-lg transition duration-300 hover:scale-105 hover:shadow-2xl hover:opacity-90"
            />
            <div className="pt-8">
              <button className="w-60 bg-gradient-to-r from-[#734060] to-[#a0527f] text-white py-3 rounded-lg shadow-lg hover:from-[#a0527f] hover:to-[#734060] hover:scale-105 transition-transform duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-[#734060]/50">
                <h1 className="text-2xl font-semibold">Dinner</h1>
              </button>
            </div>
          </div>
          <div className="w-72  text-center">
            <img
              src={dessert}
              alt="dessert"
              className="h-[500px] w-auto object-cover rounded-lg shadow-lg transition duration-300 hover:scale-105 hover:shadow-2xl hover:opacity-90"
            />
            <div className="pt-8">
              <button className="w-60 bg-gradient-to-r from-[#734060] to-[#a0527f] text-white py-3 rounded-lg shadow-lg hover:from-[#a0527f] hover:to-[#734060] hover:scale-105 transition-transform duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-[#734060]/50">
                <h1 className="text-2xl font-semibold">Dessert</h1>
              </button>
            </div>
          </div>
        </div>
        {/* Search bar */}
        <div className="flex items-center justify-center pt-16">
          <div className="relative w-full max-w-md">
            <form>
              <input
                type="text"
                placeholder="Search for a recipe..."
                className="font-semibold w-full py-3 pl-12 pr-4 bg-white border border-gray-400 rounded-lg
               shadow-md text-gray-700 focus:outline-none focus:ring-4 focus:ring-[#734060] transition duration-300 ease-in-out"
              />
              <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                <MagnifyingGlassIcon className="h-6 w-6 text-gray-500" />
              </div>
            </form>
          </div>
        </div>

        {/* Search result modal */}
        {/* {isModalOpen && searchResults && (
          <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg w-full max-w-3xl mx-auto p-6 relative">
              <button
                className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
                onClick={closeModal}
              >
                ✖
              </button>
              <h2 className="text-xl font-bold mb-4">Search Results</h2>
              {searchResults.map((meal) => (
                <div key={meal.idMeal} className="flex mb-4">
                  <img
                    src={meal.strMealThumb}
                    alt={meal.strMeal}
                    className="w-32 h-32 object-cover rounded-lg"
                  />
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">{meal.strMeal}</h3>
                    <p className="text-gray-600">{meal.strCategory}</p>
                    <a
                      href={meal.strSource}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 underline"
                    >
                      Recipe Details
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )} */}

        <div>
          <div>
            <p className="font-medium text-2xl font-domine py-12 text-center bg-grey-50">
              From our kitchen to yours
              <span className=" pl-3 font-great-vibes text-customPurple text-4xl tracking-widest font-medium">
                every dish tells a story!
              </span>
            </p>
          </div>

          <div className=" flex justify-evenly ">
            <div className="w-72  text-center">
              <img
                src={recipe1}
                alt="recipe1"
                className="h-[500px] w-auto object-cover rounded-lg shadow-lg transition duration-300 hover:scale-105 hover:shadow-2xl hover:opacity-90"
              />
              <div className="pt-8">
                <button className="w-60 bg-gradient-to-r from-[#734060] to-[#a0527f] text-white py-3 rounded-lg shadow-lg hover:from-[#a0527f] hover:to-[#734060] hover:scale-105 transition-transform duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-[#734060]/50">
                  <h1 className="text-2xl font-semibold">Breakfast</h1>
                </button>
              </div>
            </div>
            <div className="w-72  text-center">
              <img
                src={recipe2}
                alt="recipe2"
                className="h-[500px] w-auto object-cover rounded-lg shadow-lg transition duration-300 hover:scale-105 hover:shadow-2xl hover:opacity-90"
              />
              <div className="pt-8">
                <button className="w-60 bg-gradient-to-r from-[#734060] to-[#a0527f] text-white py-3 rounded-lg shadow-lg hover:from-[#a0527f] hover:to-[#734060] hover:scale-105 transition-transform duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-[#734060]/50">
                  <h1 className="text-2xl font-semibold">Meal</h1>
                </button>
              </div>
            </div>
            <div className="w-72 text-center">
              <img
                src={recipe3}
                alt="recipe3"
                className="h-[500px] w-auto object-cover rounded-lg shadow-lg transition duration-300 hover:scale-105 hover:shadow-2xl hover:opacity-90"
              />
              <div className="pt-8">
                <button className="w-60 bg-gradient-to-r from-[#734060] to-[#a0527f] text-white py-3 rounded-lg shadow-lg hover:from-[#a0527f] hover:to-[#734060] hover:scale-105 transition-transform duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-[#734060]/50">
                  <h1 className="text-2xl font-semibold">Dinner</h1>
                </button>
              </div>
            </div>
            <div className="w-72  text-center">
              <img
                src={recipe4}
                alt="recipe4"
                className="h-[500px] w-auto object-cover rounded-lg shadow-lg transition duration-300 hover:scale-105 hover:shadow-2xl hover:opacity-90"
              />
              <div className="pt-8">
                <button className="w-60 bg-gradient-to-r from-[#734060] to-[#a0527f] text-white py-3 rounded-lg shadow-lg hover:from-[#a0527f] hover:to-[#734060] hover:scale-105 transition-transform duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-[#734060]/50">
                  <h1 className="text-2xl font-semibold">Dessert</h1>
                </button>
              </div>
            </div>
          </div>
          <div className="py-10 text-center">
            <div className="w-full bg-neutral-500 h-96 text-white ">
              <h1 className="font-semibold text-3xl font-great-vibes text-amber-300 tracking-widest py-10">
                I Love Food
              </h1>
              <h1 className=" font-semibold text-center ">
                In this space, I am always sharing fresh, flavorful, (mostly)
                healthy recipes that I love to make and eat
                <br /> in my real, actual, every day life. If I wouldn’t eat it
                in real life, I won’t put in on the blog. My goal is
                <br /> to inspire you with food that is both approachable AND
                exciting, whether you’re cooking for yourself,
                <br /> your family, your roommates, or your friends. I want you
                to be so excited about these recipes that
                <br /> you eagerly await 5pm when you can go home from work and
                start cooking.
              </h1>
            </div>
          </div>
          <div className="flex py-16 justify-center text-center">
            <div className="h-[500px] w-96  shadow-lg bg-zinc-200 font-semibold text-gray-500 font-domine">
              <p className="font-medium text-2xl font-domine py-8  text-black">
                Hii !
              </p>
              <p className="font-great-vibes text-customPurple text-4xl tracking-widest font-medium">
                Nice to meet you
              </p>
              <p className="py-8">
                you're looking to impress guests or <br />
                simply enjoy a comforting meal, our
                <br />
                diverse collection has you covered.
                <br />
                Explore various cuisines, including
                <br />
                traditional favorites and modern twists.
              </p>
              <p className="">
                Additionally, we provide helpful tips
                <br />
                and tricks to elevate your cooking
                <br />
                skills. Join us in celebrating the
                <br />
                joy of cooking
              </p>
            </div>
            <div className="pl-5">
              <img
                src={recipe5}
                alt="recipe5"
                className="h-[500px] w-96  shadow-lg "
              />
            </div>
            <div className="pl-5">
              <img
                src={recipe6}
                alt="recipe6"
                className="h-[500px] w-96  shadow-lg "
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
                      placeholder="First Name"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
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

          {/* Modal */}
          {isModalOpen && (
            <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
              <div className="bg-white rounded-lg w-full max-w-md mx-auto p-6 relative">
                <button
                  className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
                  // onClick={closeModal}
                >
                  ✖
                </button>
                <h2 className="text-xl font-bold mb-4">Sign Up</h2>
                <form onSubmit={submit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Full Name
                    </label>
                    <input
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-2"
                      placeholder="Enter your Full Name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-2"
                      placeholder="Enter your Email Address"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full h-12 bg-green-600 text-white hover:bg-green-700 rounded-md p-3"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
export default NavBar;
