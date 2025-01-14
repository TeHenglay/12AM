

const Navbar = () => {
  return (
    <nav className="bg-white shadow p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-500">12AM</h1>
        <div>
          <Link href="/">
            <a className="text-gray-700 hover:text-blue-500 mx-2">Home</a>
          </Link>
          <Link href="/login">
            <a className="text-gray-700 hover:text-blue-500 mx-2">Login</a>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;