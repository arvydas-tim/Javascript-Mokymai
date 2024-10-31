import "./FooterKomp.css";


const FooterKomp = () => {
  let links = [
    { id: 1, url: "/", title: "Pradinis" },
    { id: 2, url: "#services", title: "Paslaugos" },
    { id: 3, url: "#about", title: "Apie mus" },
    { id: 4, url: "#footer", title: "Kontaktai" },
  ];
  return (
    <div id="footer" className="footer">
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat provident ad animi unde dolor consequatur non alias. Odit sit incidunt ab, molestias sequi libero adipisci.</p>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non, optio?</p>
      <nav>
        <ul>
          {links.map((link) => {
            return (
              <li key={link.id}>
                <a href={link.url}>{link.title}</a>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default FooterKomp;
