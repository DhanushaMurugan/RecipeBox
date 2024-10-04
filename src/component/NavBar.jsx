import React, { useState } from "react";
import { useNavigate } from "react-router";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

function NavBar() {
  const navigate = useNavigate();
 
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");

  // Function to open the modal
  const openModal = () => {
    setIsModalOpen(true);
  };

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

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="bg-gray-50">
      <div className="bg-customPurple text-zinc-300 p-4 tracking-widest font-bold font-domine text-center">
        <p>
          OUR RECIPES, YOUR INBOX.{" "}
          <button onClick={openModal}>
            <span className="text-white">SIGN UP</span>
          </button>
        </p>
      </div>
      <div className="bg-white shadow-md py-4">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div>
            <h1 className="font-domine font-semibold text-5xl text-customPurple">
              Recipe Box
            </h1>
          </div>

          <div className="flex items-center space-x-8 mt-4 md:mt-0">
            <p className="text-lg font-semibold cursor-pointer">HOME</p>
            <p
              className="text-lg font-semibold cursor-pointer"
              onClick={() => navigate("/about")}
            >
              ABOUT
            </p>
            <p
              className="text-lg font-semibold cursor-pointer"
              onClick={() => navigate("/recipes")}
            >
              RECIPES
            </p>

            <p
              className="text-lg font-semibold cursor-pointer"
              onClick={() => navigate("/StartHerePage")}
            >
              START HERE
            </p>
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
                <label className="block text-sm font-medium text-gray-700 text-left">
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
                <label className="block text-sm font-medium text-gray-700 text-left">
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
                onClick={handleSubmit}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default NavBar;


  

  

  
