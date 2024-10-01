import "../components/Navbar.css";

function Navbar() {
  const home = 6;
  return ( 
    // css normale
    // <ul>
    //     <p className={`box ${home < 5 ? "rounded":""}`}>{home}</p>
    //     <li><a href="#about">About</a></li>
    // </ul>


    // css tailwind
    <ul>
      <p
        className={`p-5 m-14  rounded-lg w-56 h-52 ${
          home < 5 ? "bg-red-500 rotate-45" : "bg-lime-600"
        }`}
      >
        {home}
      </p>
      <li>
        <a href="#about">About</a>
      </li>
    </ul>
  );
}

export default Navbar;
