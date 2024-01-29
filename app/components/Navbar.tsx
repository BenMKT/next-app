import React from "react";
import Link from "next/link";

// use <Link> tag instead of <a> tag for efficient client-side navigation and pre-fetching 

const Navbar = () => {
    return (
      <div className="navbar bg-slate-200 rounded-lg align-baseline ">
        <div className="flex-1">
          <Link href="/" className="btn ring-1 ring-slate-400 btn-ghost pt-1">
            Home
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link className="btn pt-4 " href="/users">
                Users
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
};

export default Navbar;
