import { useNavigate } from "react-router-dom"

export const Homepage = () => {
    let navigate = useNavigate()

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-sky-50">
            <h1 className="text-4xl font-bold mb-4 text-center">Welcome to Jupiter Marketplace</h1>
            <p className="text-lg text-gray-700">From brand new products to second-hand items, we have it all!</p>
            <button className="font-bold py-2 px-4 rounded my-2 hover:bg-slate-500 bg-slate-300" onClick={() => navigate('/products')}>
                Explore Now
            </button>
        </div>
    )
}