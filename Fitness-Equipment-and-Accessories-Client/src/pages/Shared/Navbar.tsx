import { Link } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";

const Navbar = () => {
  return (
    <div>
      <div className="hidden md:flex sticky navbar bg-neutral-900 text-orange-600 p-5">
        <div className="flex-1 ml-5">
          <img src="logo.png" className="h-8 mr-2" alt="" />
          <Link
            to={"/"}
            className=" text-4xl font-bold bg-gradient-to-r from-orange-200 via-orange-500 to-orange-600 bg-clip-text text-transparent  "
          >
            FiTFlex
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 text-lg font-semibold mr-10">
            <li>
              <Link to={"/products"}>Products</Link>
            </li>
            <li>
              <Link to={"/about"}>About</Link>
            </li>
            <li>
              <Link to={"/cart"}>
                <FaCartPlus className="text-3xl" />
              </Link>
            </li>
            {/* <li>
                            <details>
                                <summary>Parent</summary>
                                <ul className="bg-base-100 rounded-t-none p-2">
                                    <li><a>Link 1</a></li>
                                    <li><a>Link 2</a></li>
                                </ul>
                            </details>
                        </li> */}
          </ul>
        </div>
      </div>

      <div className="flex md:hidden sticky navbar bg-neutral-900 text-orange-600 p-4">
        <div className="flex-1">
          <img src="logo.png" className="h-6 mr-1" alt="Logo" />
          <Link
            to="/"
            className="text-2xl font-bold bg-gradient-to-r from-orange-200 via-orange-500 to-orange-600 bg-clip-text text-transparent"
          >
            FiTFlex
          </Link>
        </div>
        <div className="flex-none mr-2">
          <ul className="menu menu-horizontal px-1 text-lg font-semibold">
            <li>
              <details open>
                <summary>Menu</summary>
                <ul className="bg-neutral-900 rounded-t-none p-2">
                  <li>
                    <Link to="/products">Products</Link>
                  </li>
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                  <li>
                    <Link to="/cart">
                      <FaCartPlus className="text-2xl" />
                    </Link>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
