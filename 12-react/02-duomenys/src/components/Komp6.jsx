import React from "react";

const Komp6 = () => {
  let pageTitle = "Puslapio pavadinimas";
  let links = [
    { id: 1, url: "/", title: "Pradinis" },
    { id: 2, url: "/paslaugos", title: "Paslaugos" },
    { id: 3, url: "/apie-mus", title: "Apie mus" },
    { id: 4, url: "/kontaktai", title: "Kontaktai" },
  ];
  return (
    <div>
      <nav>
        <h1>{pageTitle}</h1>
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

export default Komp6;
