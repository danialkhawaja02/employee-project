import img from "../img/Logo.png";

function Header() {
  return (
    <div>
      <header className="header_sect d-flex  justify-content-between align-items-center">
        <div>
          <img src={img} alt="Logo"></img>
        </div>
        <p>Employee Management</p>
      </header>
    </div>
  );
}

export default Header;
