import React from "react";

// padarykite kad šis komponentas priimtų reikiamą informaciją
const NavbarLinks = ({ links }) => {
  // padarykite taip, kad informaciją kurią gavote (nuorodos),
  // susidėtų į parodytą žemiau dalį (galbūt pasiliks tik vienas li elementas,
  // nes juos kartos map funkcija, bet iš principo, kai išvedimas pasibaigs,
  // tai turėtumėte turėti nerikiuotą sąrašą su keliais sąrašo elementais, kur
  // kiekviename būtų nuorodos)
  return (
    <ul>
      {links.map((link) => {
        return <li>
          <a href={link.url}>{link.title}</a>
        </li>;
      })}
    </ul>
  );
};

export default NavbarLinks;
