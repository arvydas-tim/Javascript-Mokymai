tekstas = "vienas vienas karves pienas";
skaiciai2 = [7, 2, 3, 4, 6];

skaiciai2.forEach((skaicius) => console.log(skaicius));
let zodziai = tekstas.split(` `);
// let skaiciaiSpausd = skaiciai2.split(` `);
console.log(zodziai);

let surikiuotiSk = skaiciai2.sort();
console.log(surikiuotiSk);
console.log();

let courses = [
  { id: 1, name: `Node.js` },
  { id: 2, name: `Javascri[t]` },
];
console.log(courses);
courses.sort(function (a, b) {
  if (a.name < b.name) return -1;
  if (b.name < a.name) return 1;
  return 0;
});
console.log(courses);

let dvigubi = skaiciai2.map((x) => x * 2);
console.log(dvigubi);

let skaiciai = [7, 8, -3, 5, -7, 2, 0, 8, -4];

let teigiami = skaiciai.filter(function(skaicius) {

return skaicius > 0;

});

console.log('teigiami skaiciai', teigiami);

let skaiciai5 = [1, -1, 2, 3];

let yraTeigiamu = skaiciai5.some(function(skaicius) {

return skaicius > 0;

});

console.log('yra bent vienas teigiamas', yraTeigiamu);