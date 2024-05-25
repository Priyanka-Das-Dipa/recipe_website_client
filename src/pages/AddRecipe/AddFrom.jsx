import { useState } from "react";

const AddFrom = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState("Choose One");
  // array of options
  const options = ["Apple", "banana", "chips"];

  return (
    <div className="pb-20">
      <div className="w-full max-w-3xl p-8 space-y-3 rounded-xl border bg-white font-sans mx-auto">
        <h1 className="text-3xl font-bold text-center text-primary">
          Add A Recipe
        </h1>
        {/* Input fields and the form started */}
        <form action="" className="space-y-6">
          <div className="space-y-2 text-sm">
            <label htmlFor="recipename" className="block ">
              Recipe name
            </label>
            <input
              type="text"
              name="recipename"
              id="recipename"
              placeholder="recipe name"
              className="w-full px-4 py-3 rounded-md border border-indigo-300 focus:outline-none focus:ring  "
            />
          </div>
          <div className="space-y-2 text-sm">
            <label htmlFor="imageUrl" className="block ">
              Recipe Image(url)
            </label>
            <input
              type="text"
              name="imgUrl"
              id="imgUrl"
              placeholder="image URL"
              className="w-full px-4 py-3 rounded-md border border-indigo-300 focus:outline-none focus:ring  "
            />
          </div>
          <div className="space-y-2 text-sm">
            <label htmlFor="recipedetails" className="block ">
              Recipe Details
            </label>
            <textarea
              type="text"
              name="recipedetails"
              id="recipedetails"
              placeholder="recipe details"
              className="w-full px-4 py-3 rounded-md border border-indigo-300 focus:outline-none focus:ring  "
            />
          </div>
          <div className="space-y-2 text-sm">
            <label htmlFor="youtubeCode" className="block ">
              Embedded Youtube video code
            </label>
            <textarea
              type="text"
              name="youtubeCode"
              id="youtubeCode"
              placeholder="youtube video code"
              className="w-full px-4 py-3 rounded-md border border-indigo-300 focus:outline-none focus:ring  "
            />
          </div>
          <div className="space-y-2 text-sm">
            <label htmlFor="countryname" className="block ">
              Country Name
            </label>
            <textarea
              type="text"
              name="countryname"
              id="countryname"
              placeholder="country name"
              className="w-full px-4 py-3 rounded-md border border-indigo-300 focus:outline-none focus:ring  "
            />
          </div>
          <div className="space-y-2 text-sm">
            <label htmlFor="recipedetails" className="block ">
              Recipe Details
            </label>
            <div
              onClick={() => setIsOpen(!isOpen)}
              className="mx-auto flex w-full items-center justify-between rounded-md bg-white px-4 py-3 border border-indigo-300 "
            >
              <h1 className="font-medium text-gray-600">{selectedValue}</h1>
              <svg
                className={`${
                  isOpen ? "-rotate-180" : "rotate-0"
                } duration-300`}
                width={25}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M7 10L12 15L17 10"
                    stroke="#4B5563"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>{" "}
                </g>
              </svg>
            </div>
            {/* dropdown - options  */}
            <div
              className={`${
                isOpen
                  ? "visible top-0 opacity-100"
                  : "invisible -top-4 opacity-0"
              } relative mx-auto my-4 w-72 rounded-xl py-4 border duration-300`}
            >
              {options?.map((option, idx) => (
                <div
                  key={idx}
                  onClick={(e) => {
                    setSelectedValue(e.target.textContent);
                    setIsOpen(false);
                  }}
                  className="px-4 py-1 text-gray-500 hover:bg-gray-100"
                >
                  {option}
                </div>
              ))}
            </div>
          </div>
          {/* Add Button */}
          <button className="text-lg rounded-xl relative p-[10px] block w-full bg-primary  text-white border-y-4 duration-500 overflow-hidden focus:border-indigo-500 z-50 group">
            Add Recipe
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddFrom;
