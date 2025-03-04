import { useEffect, useState } from "react";

const Footer = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);
  }, []);
  return (
    <div className={`transform transition-all duration-1000 ease-out ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      } backdrop-blur-sm bg-gray-700/50 text-white p-4 rounded-lg shadow-md w-full max-w-4xl border border-purple-400/10 ring-4 ring-purple-400/20 flex justify-center items-center`}>
      <div className="flex flex-col items-center justify-center w-full">
        {/* Footer */}
        <div className="text-center items-center gap-2 sm:gap-4">
            <p className="text-sm text-purple-400">🏳️‍⚧️🏳️‍⚧️🏳️‍⚧️🏳️‍⚧️🏳️‍⚧️ mrrp meow :3 🏳️‍⚧️🏳️‍⚧️🏳️‍⚧️🏳️‍⚧️🏳️‍⚧️</p>
            <p className="text-sm">Made with ❤️ by <a href="https://github.com/lovelytransgirl" className="text-purple-400 hover:text-purple-300">LovelyTransGirl</a></p>
        </div>
      </div>
    </div>
  );
};

export default Footer;