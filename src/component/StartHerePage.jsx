import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import recipe7 from "../Images/recipe7.jpg";
import { HeartIcon } from "@heroicons/react/24/outline";
import healthy1 from "../Images/healthy1.jpg";
import healthy2 from "../Images/healthy2.jpg";
import healthy3 from "../Images/healthy3.jpg";
import healthy4 from "../Images/healthy4.jpg";
import meal1 from "../Images/meal1.png";
import meal2 from "../Images/meal2.jpg";
import meal3 from "../Images/meal3.png";
import meal4 from "../Images/meal4.png";
import mealHead from "../Images/mealHead.png";
function StartHerePage() {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");

 
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Log the form data
    console.log("First Name:", firstName);
    console.log("Email:", email);

    // Optionally, add your logic for sending data to a backend or displaying a confirmation
    alert(`Welcome! ${firstName}, we will send new recipes to your Email`);

    // Reset form after submission
    setFirstName("");
    setEmail("");
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
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

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
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
            <p
              className="text-lg font-semibold cursor-pointer"
              onClick={() => navigate("/")}
            >
              HOME
            </p>
            <p className="text-lg font-semibold cursor-pointer">ABOUT</p>
            <p className="text-lg font-semibold cursor-pointer">RECIPES</p>
            <p className="text-lg font-semibold cursor-pointer">START HERE</p>
            <MagnifyingGlassIcon className="h-6 w-6 text-gray-500 cursor-pointer" />
          </div>
        </div>
      </div>
      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg w-full max-w-md mx-auto p-6 relative">
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
              onClick={closeModal}
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
      <div className="flex justify-center text-center items-center pt-10">
        <div className="bg-gray-50">
          <img
            src={recipe7}
            alt="recipe7"
            className="h-[500px] w-96 shadow-lg transition duration-300 hover:scale-105 hover:shadow-2xl hover:opacity-90"
          />
        </div>
        <div className="pl-20">
          <h1 className="font-domine font-mediam text-5xl text-customPurple py-8">
            Welcome To Recipe Box
          </h1>
          <p className="font-medium text-2xl font-domine">
            Let's Talk Food
            <span className=" pl-2 font-great-vibes text-customPurple text-2xl tracking-widest font-mediam">
              Shall We ?
            </span>
          </p>
          <p className="font-domine text-lg text-gray-500 py-10">
            Well, we hope that’s why you’re here. Our recipes are designed for
            real, actual, every
            <br /> day life, and we try to focus on real foods and healthy
            recipes (which honestly means
            <br /> a lot of different things to us, including the perfect
            chocolate chip cookie and cheese
            <br /> on cheese on cheese, because health is all about balance,
            right?).
          </p>
          <p className="font-domine text-lg text-gray-500">
            This is the place to find those recipes — everything from our most
            popular, to meal
            <br /> prep, to Instant Pot recipes, or if you just, like, have some
            sad greens in your fridge to
            <br /> use up and you need some inspiration.
          </p>
          <p className="font-domine text-lg text-gray-500 py-10">
            You’re here! Have fun. We hope you find something (many things) you
            love.
          </p>
        </div>
      </div>
      <div className="bg-customPurple pt-5 pb-5">
        <h1 className="text-4xl text-white font-semibold text-center py-10">
          Search Our Recipes
        </h1>
        <div className="flex items-center justify-center ">
          <div className="relative w-full max-w-md">
            <input
              type="text"
              placeholder="Search..."
              className="font-semibold w-full py-3 pl-12 pr-4 bg-white border border-gray-400 rounded-lg shadow-md text-gray-700
               focus:outline-none focus:ring-4 focus:ring-[#734060] transition duration-300 ease-in-out"
            />
            <div className="absolute inset-y-0 left-0 flex items-center pl-3">
              <MagnifyingGlassIcon class="h-6 w-6 text-gray-500" />
            </div>
          </div>
        </div>
        <p className="text-zinc-300 text-lg tracking-widest text-center py-5 ">
          or browse our favourites
        </p>
      </div>
      <div className="flex items-center justify-center py-10">
        <div>
          <HeartIcon class="h-16 w-16 text-gray-500" />
        </div>
        <div>
          <h1 className="text-3xl text-customPurple font-semibold font-domine pl-3">
            Random & Healthy Recipes
          </h1>
        </div>
      </div>

      <div className="flex justify-center justify-evenly">
        <div className="flex border-2 border-slate-400 w-2/5 h-64 items-center justify-center py-5 px-5 justify-around ">
          <div>
            <img src={healthy1} alt="healthy1" className="h-52 w-52" />
          </div>
          <div className="text-center">
            <h1 className="text-xl font-bold">Sesame Noodle Bowls</h1>
            <p className="font-domine text-lg text-gray-600 py-5">
              Meal Prep Sesame Noodle Bowls! Fork-
              <br />
              twirly noodles, an easy creamy sesame
              <br />
              sauce, perfect browned chicken,
              <br /> and all the veg YUM.
            </p>
          </div>
        </div>

        <div className="flex border-2 border-slate-400 w-2/5 h-64 items-center justify-center py-5 px-5 justify-around">
          <div>
            <img src={healthy2} alt="healthy2" className="h-52 w-52" />
          </div>
          <div className="text-center">
            <h1 className="text-xl font-bold">Velvet Sunset Pasta</h1>
            <p className="font-domine text-lg text-gray-600 py-5">
              This creamy pasta dish captures the
              <br />
              essence of a sunset with its vibrant
              <br />
              blend of sun-dried tomatoes, roasted
              <br />
              garlic, and a velvety Parmesan sauce.
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-center justify-evenly py-10">
        <div className="flex border-2 border-slate-400 h-64 w-2/5 items-center justify-center py-5 px-5 justify-around ">
          <div>
            <img src={healthy3} alt="healthy3" className="h-52 w-52" />
          </div>
          <div className="text-center">
            <h1 className="text-xl font-bold">Saffron Ember Chicken Curry</h1>
            <p className="font-domine text-lg text-gray-600 py-5">
              This flavorful dish blends tender
              <br />
              chicken with rich spices, creating
              <br />
              a symphony of warmth and depth.
              <br />
              Infused with aromatic saffron.
              <br />
            </p>
          </div>
        </div>

        <div className="flex border-2 border-slate-400 h-64 w-2/5 items-center justify-center py-5 px-5 justify-around">
          <div>
            <img src={healthy4} alt="healthy4" className="h-52 w-52" />
          </div>
          <div className="text-center">
            <h1 className="text-xl font-bold">Golden Rice with Papadam</h1>
            <p className="font-domine text-lg text-gray-600 py-5">
              This quintessential South Indian
              <br />
              dish features fragrant, fluffy rice
              <br />
              paired with crispy, golden papadam
              <br />
              for a delightful contrast in texture.
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center py-5">
        <button
          class="bg-[#734060] text-white font-semibold py-2 w-96 rounded-md shadow-md hover:bg-[#5a3049] hover:scale-105 hover:opacity-90
        focus:ring-4 focus:ring-[#734060] focus:outline-none active:scale-95 transition duration-300 ease-in-out"
        >
          View Recipes
        </button>
      </div>

      {/* meals recipe */}
      <div className="flex items-center justify-center py-10">
        <div>
          <img
            src={mealHead}
            alt="mealHead"
            className="h-16 w-16 text-gray-500"
          />
        </div>
        <div>
          <h1 className="text-3xl text-customPurple font-semibold font-domine pl-3">
            Meal Prep Recipes
          </h1>
        </div>
      </div>

      <div className="flex justify-center justify-evenly">
        <div className="flex border-2 border-slate-400 w-2/5 h-64 items-center justify-center py-5 px-5 justify-around ">
          <div>
            <img src={meal1} alt="meal1" className="h-52 w-52" />
          </div>
          <div className="text-center">
            <h1 className="text-xl font-bold">Royal Saffron Chicken Biryani</h1>
            <p className="font-domine text-lg text-gray-600 py-5">
              This luxurious biryani is a<br />
              celebration of tender chicken,
              <br />
              long-grain basmati rice, and
              <br />
              aromatic spices, layered with
              <br />
              the golden richness of saffron.
            </p>
          </div>
        </div>

        <div className="flex border-2 border-slate-400 w-2/5 h-64 items-center justify-center py-5 px-5 justify-around">
          <div>
            <img src={meal2} alt="meal2" className="h-52 w-52" />
          </div>
          <div className="text-center">
            <h1 className="text-xl font-bold">Soulful Harmony Platter</h1>
            <p className="font-domine text-lg text-gray-600 py-5">
              This comforting meal brings
              <br />
              together the simplicity of
              <br />
              white rice with hearty soups,
              <br />
              rich stews, and a flavorful
              <br /> chicken curry.
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-center justify-evenly py-10">
        <div className="flex border-2 border-slate-400 h-64 w-2/5 items-center justify-center py-5 px-5 justify-around ">
          <div>
            <img src={meal3} alt="meal3" className="h-52 w-52" />
          </div>
          <div className="text-center">
            <h1 className="text-xl font-bold">Maharaja's Delight Thaali</h1>
            <p className="font-domine text-lg text-gray-600 py-5">
              This exquisite North Indian
              <br />
              platter features soft, freshly
              <br />
              made rotis, fragrant vegetable
              <br />
              pulao, and a rich paneer curry
              <br /> that’s simmered in aromatic spices.
            </p>
          </div>
        </div>

        <div className="flex border-2 border-slate-400 h-64 w-2/5 items-center justify-center py-5 px-5 justify-around">
          <div>
            <img src={meal4} alt="meal4" className="h-52 w-52" />
          </div>
          <div className="text-center">
            <h1 className="text-xl font-bold">Heritage Feast Thaali</h1>
            <p className="font-domine text-lg text-gray-600 py-5">
              From spicy curries and tangy
              <br />
              sambar to refreshing curd and
              <br />
              crispy papadam, each dish showcases
              <br />
              the rich culinary heritage of the region.
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center py-5">
        <button
          class="bg-[#734060] text-white font-semibold py-2 w-96 rounded-md shadow-md hover:bg-[#5a3049] hover:scale-105 hover:opacity-90
        focus:ring-4 focus:ring-[#734060] focus:outline-none active:scale-95 transition duration-300 ease-in-out"
        >
          View Recipes
        </button>
      </div>

      <div className="mt-16 text-center">
        <div className="w-full mx-auto  bg-customPurple p-8 shadow-lg rounded-lg ">
          <h3 className="font-semibold text-3xl font-great-vibes text-amber-300 tracking-widest py-6">
            Sign Up
          </h3>
          <p className="text-center text-gray-100 text-3xl">
            For Email Updates
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
    </div>
  );
}

export default StartHerePage;
