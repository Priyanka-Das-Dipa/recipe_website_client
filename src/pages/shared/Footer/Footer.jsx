import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";
import logo from "../../../../public/images/yumma_logo.png";

const Footer = () => {
  return (
    <div>
      <footer className="bg-red-100/60">
        <div className="mx-auto max-w-screen-7xl px-4 pb-6 pt-16 sm:px-6 lg:px-8 lg:pt-24">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {/* logo part */}
            <div>
              <img width="150px" src={logo}></img>

              <p className="mt-6 max-w-md text-center leading-relaxed text-gray-500 sm:max-w-xs sm:text-left">
                Discover delicious recipes on our user-friendly website. Join
                our community and share culinary inspiration with fellow food
                enthusiasts!
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:col-span-2">
              <div className="text-center sm:text-left">
                <p className="text-lg font-bold text-gray-900">Categories</p>

                <ul className="mt-8 space-y-4 text-sm">
                  <li className="flex gap-1 items-center">
                    <GoArrowUpRight className="text-[#D54215]" />
                    <a
                      className="text-gray-700 transition hover:text-gray-700/75"
                      href="#"
                    >
                      Breakfast Recipes
                    </a>
                  </li>

                  <li className="flex gap-1 items-center">
                    <GoArrowUpRight className="text-[#D54215]" />
                    <a
                      className="text-gray-700 transition hover:text-gray-700/75"
                      href="#"
                    >
                      Lunch Recipe
                    </a>
                  </li>

                  <li className="flex gap-1 items-center">
                    <GoArrowUpRight className="text-[#D54215]" />
                    <a
                      className="text-gray-700 transition hover:text-gray-700/75"
                      href="#"
                    >
                      Dinner Recipe
                    </a>
                  </li>

                  <li className="flex gap-1 items-center">
                    <GoArrowUpRight className="text-[#D54215]" />
                    <a
                      className="text-gray-700 transition hover:text-gray-700/75"
                      href="#"
                    >
                      Drink Recipe
                    </a>
                  </li>
                </ul>
              </div>

              <div className="text-center sm:text-left">
                <p className="text-lg font-bold text-gray-900">Learn More</p>

                <ul className="mt-8 space-y-4 text-sm">
                  <li className="flex gap-1 items-center">
                    <GoArrowUpRight className="text-[#D54215]" />
                    <a
                      className="text-gray-700 transition hover:text-gray-700/75"
                      href="#"
                    >
                      About us
                    </a>
                  </li>
                  <li className="flex gap-1 items-center">
                    <GoArrowUpRight className="text-[#D54215]" />
                    <a
                      className="text-gray-700 transition hover:text-gray-700/75"
                      href="#"
                    >
                      Team
                    </a>
                  </li>
                  <li className="flex gap-1 items-center">
                    <GoArrowUpRight className="text-[#D54215]" />
                    <a
                      className="text-gray-700 transition hover:text-gray-700/75"
                      href="#"
                    >
                      Careers
                    </a>
                  </li>
                  <li className="flex gap-1 items-center">
                    <GoArrowUpRight className="text-[#D54215] font-bold" />
                    <a
                      className="text-gray-700 transition hover:text-gray-700/75"
                      href="#"
                    >
                      Advertise
                    </a>
                  </li>
                </ul>
              </div>

              <div className="text-center sm:text-left">
                <p className="text-lg font-bold text-gray-900">
                  Get in connect
                </p>
                <span className="text-sm ">Follow us</span>
                <ul className="mt-8 text-sm flex items-center gap-6">
                  <li>
                    <FaFacebookF className="hover:text-primary text-lg" />
                  </li>
                  <li>
                    <FaInstagram className="hover:text-primary text-lg" />
                  </li>
                  <li>
                    <FaTwitter className="hover:text-primary text-lg" />
                  </li>
                  <li>
                    <FaYoutube className="hover:text-primary text-xl  " />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* all right */}
        <div className="mt-12  bg-[#D54215]  mx-auto max-w-screen-7xl px-10 py-6">
          <div className="text-center sm:flex sm:justify-between sm:text-left">
            <div className="text-sm">
              <a href="#" className="mr-3 text-white">
                Term of use
              </a>
              <a href="#" className="mr-3 text-white">
                Privacy policy
              </a>
              <a href="#" className="mr-3 text-white">
                Cookie policy
              </a>
              <a href="#" className="mr-3 text-white">
                Sitemap
              </a>
            </div>

            <p className="mt-4 text-sm text-white sm:order-first sm:mt-0">
              Copyright &copy; 2022 yumma, All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
