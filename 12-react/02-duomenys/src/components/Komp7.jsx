import React from "react";

const Komp7 = () => {
  // susikurkite žodžių masyvą (tiesiog string reikšmės,
  // ne objektai)
  // ir tą masyvą atvaizduokite return dalyje
  let zodziai = ["vienas", "du", "trys", "keturi"];
  return <div>{zodziai.join(", ")}</div>;
};

export default Komp7;
