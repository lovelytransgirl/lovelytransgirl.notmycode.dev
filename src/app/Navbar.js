import { useEffect, useState } from "react";

const Navbar = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  const surprise = () => {
    window.location.href = "https://e926.net/posts/random?tags=protogen+order:score+rating:safe";
  }

  const notfin = () => {
    alert("This will be implemented in the future");
  }
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);
  }, []);
  return (
    <div className={`transform transition-all duration-1000 ease-out ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      } backdrop-blur-sm bg-gray-700/50 text-white p-4 rounded-lg shadow-md w-full max-w-4xl border border-purple-400/10 ring-4 ring-purple-400/20 flex justify-center items-center`}>
      <div className="flex flex-col items-center justify-center w-full">
        {/* NavBar Buttons */}
        <div className="flex flex-wrap sm:flex-nowrap items-center justify-center gap-2 sm:gap-4">
          <a href="/" className="bg-gray-700/50 px-4 py-2 rounded-lg transition-all duration-300 hover:bg-gray-900/50 hover:border-transparent hover:scale-105 active:scale-95 border border-purple-400/10 ring-4 ring-purple-400/20">Home</a>
          <a href="/projects" className="bg-gray-700/50 px-4 py-2 rounded-lg transition-all duration-300 hover:bg-gray-900/50 hover:border-transparent hover:scale-105 active:scale-95 border border-purple-400/10 ring-4 ring-purple-400/20">Projects</a>
          <a href="/blog" className="bg-gray-700/50 px-4 py-2 rounded-lg transition-all duration-300 hover:bg-gray-900/50 hover:border-transparent hover:scale-105 active:scale-95 border border-purple-400/10 ring-4 ring-purple-400/20">Blogs</a>
          <button onClick={notfin} className="bg-gray-700/50 px-4 py-2 rounded-lg transition-all duration-300 hover:bg-gray-900/50 hover:border-transparent hover:scale-105 active:scale-95 border border-purple-400/10 ring-4 ring-purple-400/20">Links</button>
          <button onClick={surprise} className="bg-gray-700/50 px-4 py-2 rounded-lg transition-all duration-300 hover:bg-gray-900/50 hover:border-transparent hover:scale-105 active:scale-95 border border-purple-400/10 ring-4 ring-purple-400/20">Click 4 Surprise</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;