import React from 'react';

export const Navbar = () => {

    // Click function for mobile menu
    const mobileClick = () => {
        const menu = document.querySelector(".mobile-menu");
        menu.classList.toggle("hidden");
    }

    return (
        <>
            <nav className="bg-gray-900 text-white sticky top-0 z-30">
                {/* START: Main Navbar */}
                <div className="max-w-6xl px-8 mx-auto">
                    <div className="flex justify-between">
                        <div className="flex space-x-4">
                            {/* Logo */}
                            <div className="">
                                <a
                                href="/#"
                                className="flex items-center py-5 px-2"
                                >
                                    <p className='text-2xl'>
                                        mnml
                                    </p>
                                </a>
                            </div>
                        </div>
                        
                        <div className="hidden md:flex items-center space-x-1">
                        {/* Main nav */}
                        <div className="hidden md:flex items-center space-x-20 pl-10">
                            <a
                            href="/#"
                            className="text-xs tracking-widest py-5 px-3 hover:underline"
                            >
                                <p>who</p>
                            </a>
                            <a
                            href="/#"
                            className="text-xs tracking-widest py-5 px-3 hover:underline"
                            >
                                <p>what</p>
                            </a>
                            <a
                            href="/#"
                            className="text-xs tracking-widest py-5 px-3 hover:underline"
                            >
                                <p>why</p>
                            </a>
                        </div>
                        </div>
                        {/* Mobile button */}
                        <div className="md:hidden flex items-center">
                        <button onClick={mobileClick} className="mobile-menu-button">
                            <svg
                            class="w-6 h-6 text-black hover:text-pink-500 transition duration-300"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M4 6h16M4 12h16m-7 6h7"
                            ></path>
                            </svg>
                        </button>
                        </div>
                    </div>
                </div>
                {/* END: Main Navbar */}
                {/* START: Mobile menu */}
                <div className="mobile-menu hidden md:hidden">
                    <a
                        href="/#"
                        className="block uppercase tracking-wide py-6 px-24 text-sm tracking-widest bg-gradient-to-r from-red-500 to-pink-500 text-white hover:from-white hover:to-white hover:text-black transition duration-500"
                    >
                        Pricing
                    </a>
                    <a
                        href="/#"
                        className="block uppercase tracking-wide py-6 px-24 text-sm tracking-widest bg-gradient-to-r from-red-500 to-pink-500 text-white hover:from-white hover:to-white  hover:text-black transition duration-500"
                    >
                        Why us?
                    </a>
                    <a
                        href="/#"
                        className="block uppercase tracking-wide py-6 px-24 text-sm tracking-widest bg-gradient-to-r from-red-500 to-pink-500 text-white hover:from-white hover:to-white hover:text-black transition duration-500"
                    >
                        About
                    </a>
                    <a
                        className="block uppercase tracking-wide py-6 px-24 text-sm tracking-widest bg-gradient-to-r from-red-500 to-pink-500 text-white hover:from-white hover:to-white rounded-b-xl shadow-xl hover:text-black transition duration-500"
                    >
                        Log out
                    </a>
                </div>
                {/* END: Mobile Menu */}
            </nav>
        </>
    )
}



export default Navbar;
