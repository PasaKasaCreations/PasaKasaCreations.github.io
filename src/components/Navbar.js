function Navbar() {
  return (
    <div
      className={`flex items-center justify-around text-white top-0 z-10 w-full transition-[top] duration-500
        fixed animate-topdown bg-black`}
    >
      <div className="flex items-center cursor-pointer">
        <img className="w-28" src="../logo.png" alt="Logo" />
      </div>
      <div className="flex items-center gap-10 tracking-wider cursor-pointer">
        <a
          href="#home"
          className="aria-[current=page]:underline underline-offset-4 color decoration-red-600"
        >
          Home
        </a>
        <a
          href="#fighter"
          className="aria-[current=page]:underline underline-offset-4 color decoration-red-600"
        >
          Fighter
        </a>
        <a
          href="#team"
          className="aria-[current=page]:underline underline-offset-4 color decoration-red-600"
        >
          Team
        </a>
        <a
          href="#blog"
          className="aria-[current=page]:underline underline-offset-4 color decoration-red-600"
        >
          Blog
        </a>
        <a
          href="#contact"
          className="aria-[current=page]:underline underline-offset-4 color decoration-red-600"
        >
          Contact
        </a>
      </div>
      <div>
        <button className="p-5 pl-10 pr-10 cursor-pointer bg-gradient-to-r from-red-600 to-pink-500 font-bold">
          Install Now
        </button>
      </div>
    </div>
  );
}

export default Navbar;
