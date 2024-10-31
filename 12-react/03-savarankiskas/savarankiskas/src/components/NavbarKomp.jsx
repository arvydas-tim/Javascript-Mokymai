import "./NavbarKomp.css";

const NavbarKomp = () => {
  let links = [
    { id: 1, url: "/", title: "Pradinis" },
    { id: 2, url: "#services", title: "Paslaugos" },
    { id: 3, url: "#about", title: "Apie mus" },
    { id: 4, url: "#footer", title: "Kontaktai" },
  ];
  return (
    <div className="navbar">
      <nav>
        <h1>Navbar H1 headeris</h1>
        <div className="links">
          <ul>
            {links.map((link) => {
              return (
                <li key={link.id}>
                  <a href={link.url}>{link.title}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavbarKomp;
