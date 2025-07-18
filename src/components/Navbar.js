import "../style/Home.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-menu">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#info">Info</a>
        </li>
        <li>
          <a href="#story">Story</a>
        </li>
        <li>
          <a href="#gallery">Gallery</a>
        </li>
        <li>
          <a href="#form-guest">RSVP</a>
        </li>
        <li>
          <a href="#gifts">Gifts</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
