const Footer = () => {
  return (
    <div className="bg-surface0 text-text p-4 rounded-lg shadow-md w-full max-w-4xl border border-lavender/10 flex justify-center items-center">
      <div className="flex flex-col items-center justify-center w-full">
        <div className="text-center items-center gap-2 sm:gap-4">
            <p className="text-sm text-lavender">mrrp meow :3</p>
            <p className="text-sm">Made with 🩵 by <a href="https://github.com/lovelytransgirl" className="text-lavender hover:text-mauve">lovelytransgirl</a></p>
        </div>
      </div>
    </div>
  );
};

export default Footer;