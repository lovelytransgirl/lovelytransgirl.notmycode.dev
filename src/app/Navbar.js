const Navbar = () => {
  const surprise = () => {
    window.location.href = "https://e926.net/posts/random?tags=protogen+order:score+rating:safe";
  }

  const notfin = () => {
    alert("This will be implemented in the future");
  }

  return (
    <div className="bg-surface0 text-text p-4 rounded-lg shadow-md w-full max-w-4xl border border-lavender/10 flex justify-center items-center">
      <div className="flex flex-col items-center justify-center w-full">
        <div className="flex flex-wrap sm:flex-nowrap items-center justify-center gap-2 sm:gap-4">
          <a href="/" className="bg-surface1 px-4 py-2 rounded-lg transition-all duration-300 hover:bg-surface2 border border-lavender/10">Home</a>
          <a href="/projects" className="bg-surface1 px-4 py-2 rounded-lg transition-all duration-300 hover:bg-surface2 border border-lavender/10">Projects</a>
          <a href="/blog" className="bg-surface1 px-4 py-2 rounded-lg transition-all duration-300 hover:bg-surface2 border border-lavender/10">Blogs</a>
          {/* ts aint getting implemented any time soon --> <button onClick={notfin} className="bg-surface1 px-4 py-2 rounded-lg transition-all duration-300 hover:bg-surface2 border border-lavender/10">Links</button> */}
          <button onClick={surprise} className="bg-surface1 px-4 py-2 rounded-lg transition-all duration-300 hover:bg-surface2 border border-lavender/10">Click 4 Surprise</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;