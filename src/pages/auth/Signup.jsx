import { Navhook } from "../../hooks/Navhook";

export default function Signup() {
    const { goToSignin } = Navhook();
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-semibold text-gray-800">Create Account</h1>
          <p className="text-gray-500 mt-2 text-sm">Sign up to get started</p>
        </div>

        <form className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black transition"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black transition"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black transition"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Confirm Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black transition"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-2.5 rounded-xl font-medium hover:opacity-90 transition duration-200"
          >
            Create Account
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-500">
          Already have an account?{' '}
          <a href="#" className="text-black font-medium hover:underline" onClick={() => goToSignin()}>
            Sign in
          </a>
        </p>
      </div>
    </div>
  );
}
