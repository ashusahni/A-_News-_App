
import Button from "./Button";

export const SinginComponent = () => {



  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-10 rounded-lg shadow-md w-96">
        <h2 className="text-2xl text-black font-bold mb-6">Login</h2>
        <form >
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full border text-black border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <Button/>
        </form>
      </div>
    </div>
  );
};
