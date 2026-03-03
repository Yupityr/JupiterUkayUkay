import { Navhook } from "../../hooks/Navhook";

export default function Signin() {
  const { goToSignup } = Navhook();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-semibold text-gray-800">Welcome Back</h1>
          <p className="text-gray-500 mt-2 text-sm">Please enter your details to sign in</p>
        </div>

        <form className="space-y-5">
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

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-gray-600">
              <input type="checkbox" className="rounded" />
              Remember me
            </label>
            <a href="#" className="text-black hover:underline">
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-2.5 rounded-xl font-medium hover:opacity-90 transition duration-200"
            >
            Sign In
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-500">
          Don't have an account?{' '}
          <a href="#" className="text-black font-medium hover:underline" onClick={() => goToSignup()}>
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}