export default function LoginPage() {
    return (
      <div className="max-w-md mx-auto bg-white p-6 shadow-md">
        <h1 className="text-2xl font-bold mb-4">Login to Your Account</h1>
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">Email:</label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border rounded"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700">Password:</label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 border rounded"
              placeholder="Enter your password"
            />
          </div>
          <button type="submit" className="w-full bg-black text-white py-2 rounded">
            Login
          </button>
        </form>
      </div>
    );
  }
  