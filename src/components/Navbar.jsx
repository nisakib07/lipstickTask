import { BiCartAdd } from "react-icons/bi";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-gray-700 text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Products</a>
                <ul className="p-2">
                  <li>
                    <a>Lipstick</a>
                  </li>
                  <li>
                    <a>Foundation</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>About Us</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">TopSale</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-lg font-bold">
            <li>
              <a>Home</a>
            </li>
            <li>
              <details>
                <summary>Products</summary>
                <ul className="p-2">
                  <li>
                    <a>Lipstick</a>
                  </li>
                  <li>
                    <a>Foundation</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a>About Us</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="  text-white text-2xl font-semibold">
            <BiCartAdd></BiCartAdd>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
