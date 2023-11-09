const marvel = ["Thor","Ironman","Captain America"]
const Dc = ["Batman","Flash", "Green Lantern"]
const Anime = ["Asta","Huno", "Yami"]

// marvel.push(Dc);
// console.log(marvel);

// let heros = marvel.concat(Dc);
// console.log(heros);

const allHeros = [...Anime, ...Dc, ...marvel]
// console.log(allHeros);

let anotherarr = [1,2,3,4, [5,6],7,[6,7,[4,5]]]

let reusearr = anotherarr.flat(Infinity)
console.log(reusearr);

//  study this topics .isArray, .from, .of
