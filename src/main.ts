import { people, PersonInterface } from './db/data.js';

console.log('main');

// console.log(people);

// 1. parasyti Fn kuri atspausdina visus vyrus
function printMales(arr: PersonInterface[]): void {
  // array.filter((el): boolean => true | false)
  const malesArr: PersonInterface[] = arr.filter(
    (pObj: PersonInterface): boolean => pObj.sex === 'male'
  );
  console.log(
    'malesArr ===',
    malesArr.map((pObj) => pObj.name)
  );
}

// printMales(people);

// 1.1 parasyti Fn kuri  atspausdina moteris

function printFemales(arr: PersonInterface[]): void {
  arr.forEach((pObj: PersonInterface): void => {
    if (pObj.sex === 'female') {
      console.log('female === ', pObj);
    }
  });
}

// printFemales(people);

// 2. parasyti Fn kuri grazina masyve moteris jaunesnies nei 35 metai

function getYoungWomen(arr: PersonInterface[]): PersonInterface[] {
  return arr.filter(
    (pObj: PersonInterface): boolean => pObj.sex === 'female' && pObj.age < 35
  );
}
// getYoungWomen(people);
// console.log('getYoungWomen(people) ===', getYoungWomen(people));

// 3. parasyti Fn kuri grazina masyve visus žmones kurie turi mašinas
function getDrivers(arr: PersonInterface[]): PersonInterface[] {
  return arr.filter((pObj: PersonInterface): boolean => pObj.hasCar);
}
const drivers = getDrivers(people);
// console.log('first driver ===', drivers[0]);

// 3.1 same kaip ir 3 bet grazinam vardu ir pavardziu masyva
// [ 'severija aksds', 'james bond ', .... ]
function getDriversNames(arr: PersonInterface[]): string[] {
  const drivers: PersonInterface[] = arr.filter(
    (pObj: PersonInterface): boolean => pObj.hasCar
  );
  const stringArrDrivers: string[] = drivers.map(
    (pObj: PersonInterface): string => `${pObj.name} ${pObj.surname}`
  );
  return stringArrDrivers;
}
// console.log('getDriversNames(people) ===', getDriversNames(people));

// function getDriversNames(arr: PersonInterface[]): string[] {
//   return arr
//     .filter((pObj: PersonInterface): boolean => pObj.hasCar)
//     .map((pObj: PersonInterface): string => `${pObj.name} ${pObj.surname}`)
//     .sort();
// }

// 5. atspausdinti visų vairuojančių žmonių lytis

function printDriverGenders(arr: PersonInterface[]): void {
  // sukti cikla
  arr.forEach((pObj: PersonInterface): void => {
    // tikrinti ar vairuotojas
    if (pObj.hasCar) {
      // jei vairuotojas = spausdinti
      // salyga ? true : false
      // jei vyras => he
      // jei moteris => she
      console.log(`${pObj.name} ${pObj.sex === 'male' ? 'he' : 'she'} is a driver`);
    }
    // jei ne ne
  });
}
printDriverGenders(people);

// function sum(x: number, y: string): number {
//   return x;
// }

// [1, 2, 3].forEach((sk) => console.log(sk + ' sk'));

// 6. parasyti fn kuri suskaiciuoja ir grazina kiek yra vairuojanciu vyru ir moteru
// pvz {man: 4, woman: 5}
interface DriverObj {
  man: number;
  woman: number;
}

function getDriversObj(arr: PersonInterface[]): DriverObj {
  let rezult: DriverObj = {
    man: 0,
    woman: 0,
  };

  arr.forEach((pObj: PersonInterface): void => {
    // jei vyras tai pridedam vieneta prie
    if (pObj.sex === 'male') {
      rezult.man++;
    } else {
      rezult.woman++;
    }
  });
  // rezult.woman = arr.length - rezult.man;
  return rezult;
}
console.log('getDriversObj(people) ===', getDriversObj(people));
