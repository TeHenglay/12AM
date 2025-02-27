import Link from "next/link";

export default function HomePage() {
  return (
    <div className="font-custom bg-gray-50 min-h-screen flex flex-col items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold">Welcome to 12AM</h1>
        <p className="text-lg mt-4">Your one-stop shop for minimalist shirts.</p>
        <div className="space-x-4">
          <Link href="/login">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300">
            Login
          </button>
          </Link>

          </div>  
          </div>
      
    </div>
  );
}
