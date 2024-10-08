import Link from "next/link";



const Navbar = () => {
    // navbar
    const navlinks = [
        {
            text: 'Home',
            path: '/'
        },
        {
            text: 'Posts',
            path: '/posts'
        }
    ];
    return (
        <div className="navbar bg-base-100 border">
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
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {
                            navlinks?.map(({ text, path }) => <Link
                                href={path}
                                key={path}
                            >{text}</Link>)
                        }
                    </ul>
                </div>
                <h1 className="font-bold text-xl">Next With <span 
                className="text-blue-700"
                >Typescript</span></h1>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-5">
                    {
                        navlinks?.map(({ text, path }) => <Link
                        className="text-xl"
                            href={path}
                            key={path}
                        >{text}</Link>)
                    }
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Button</a>
            </div>
        </div>
    );
};

export default Navbar;