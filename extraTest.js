/*
Dado un array crear uno nuevo con los elementos no repetidos

*/


const animals = ['dog', 'cat', 'bat', 'squirrel', 'cat', 'cat', 'dog'];

function getCommonWord(list) {
    let result = new Set(list);
    result = [...result]

//   let result = [];
//   list.forEach(item => {
//     if (!result.includes(item)) {
//       result.push(item);
//     }
//   });
  return result;
}

console.log(getCommonWord(animals));