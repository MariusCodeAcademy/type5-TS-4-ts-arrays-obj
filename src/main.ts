import { people, PersonInterface } from './db/data.js';

console.log('main');

// console.log(people);

// 1. parasyti Fn kuri atspausdina visus vyrus
function printMales(arr: PersonInterface[]): void {
  // array.filter((el): boolean => true | false)
  const malesArr: PersonInterface[] = arr.filter((pObj: PersonInterface): boolean => {
    // atrenkam jei tai yra vyras
    if (pObj.sex === 'male') {
      return true;
    } else {
      return false;
    }
    // return salyga ? true : false
  });
  console.log(
    'malesArr ===',
    malesArr.map((pObj) => pObj.name)
  );
}

printMales(people);
