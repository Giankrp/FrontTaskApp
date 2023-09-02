const Register = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-950">
      <div className="bg-gray-900 w-4/6 p-8 rounded-xl text-white">
        <form className="w-full max-w-md mx-auto">
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">Your email</label>
            <input
              type="email"
              id="email"
              className="shadow-sm bg-gray-700 border border-gray-600 text-gray-200 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="name@flowbite.com"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">
              Your password
            </label>
            <input
              type="password"
              id="password"
              className="shadow-sm bg-gray-700 border border-gray-600 text-gray-200 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">
              Repeat password
            </label>
            <input
              type="password"
              id="repeat-password"
              className="shadow-sm bg-gray-700 border border-gray-600 text-gray-200 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required
            />
          </div>
          <div className="flex items-start mb-6">
            <div className="flex items-center h-5">
              <input
                id="terms"
                type="checkbox"
                value=""
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                required
              />
            </div>
            <label className="ml-2 text-sm font-medium text-gray-200">
              I agree with the{" "}
              <a href="#" className="text-blue-500 hover:underline">
                terms and conditions
              </a>
            </label>
          </div>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mb-4"
          >
            Register new account
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
