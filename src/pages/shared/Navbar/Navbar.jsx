import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../../../public/images/yumma_logo.png";
import { FiMenu } from "react-icons/fi";

const Navbar = () => {
  const [dropDownState, setDropDownState] = useState(false);
  const dropDownMenuRef = useRef();

  useEffect(() => {
    const closeDropDown = (e) => {
      if (!dropDownMenuRef?.current?.contains(e?.target)) {
        setDropDownState(false);
      }
    };

    document.addEventListener("mousedown", closeDropDown);

    return () => {
      document.removeEventListener("mousedown", closeDropDown);
    };
  }, []);

  const navLinks = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="about">Recipes</Link>
      </li>
      <li>
        <Link to="/">Add Recipe</Link>
      </li>

      <li>
        <Link to="/">LogOut</Link>
      </li>
    </>
  );

  return (
    <div>
      <nav className="flex items-center justify-between bg-white px-4 py-2 text-black mb-5n">
        <div className="scale-100 cursor-pointer rounded-2xl px-3 py-2 text-xl font-semibold text-white transition-all duration-200 hover:scale-110">
          <img src={logo} alt="logo image" width={150} />
        </div>
        <ul className="hidden items-center justify-between gap-10 lg:flex">
          {navLinks}
        </ul>

        <div>
          <div className="flex items-center gap-5">
            <div
              ref={dropDownMenuRef}
              onClick={() => setDropDownState(!dropDownState)}
              className="relative flex transition-transform lg:hidden"
            >
              <FiMenu />
              {dropDownState && (
                <ul className=" z-10  gap-2  bg-white px-5 py-2 absolute right-0 top-11 flex w-[200px] flex-col  rounded-lg   text-base ">
                  {navLinks}
                </ul>
              )}
            </div>

            <img
              className="size-[40px] bg-slate-500 object-cover rounded-full  duration-500"
              src="https://source.unsplash.com/300x300/?profile"
              alt="avatar navigate ui"
            />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
