import { Link } from "react-router-dom"

export const Header = () => {
    return (
        <header className="shadow-md flex flex-row justify-between py-4 bg-sky-100">
            <div className=" flex flex-row items-center">
                
                <p className="mx-2 my-auto text-xl ">
                    <Link to={'/'} className="temp-logo"> Jupiter</Link>
                </p>
            </div>
            <nav>
                    <Link to={'/signin'} className="mx-2 text-sm font-medium hover:text-black">Sign In</Link>
                    <Link to={'/signup'} className="mx-2 text-sm font-medium hover:text-black">Sign Up</Link>
                </nav>
        </header>
    )
}