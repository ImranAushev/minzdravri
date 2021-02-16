// const getDistance = ([x1, y1], [x2, y2]) => {
//     const xs = x2 - x1;
//     const ys = y2 - y1;
    
//     return Math.sqrt(xs ** 2 + ys ** 2);
//   };

// const getTheNearestLocation = (locations, currentPoint) => {
//     if (locations.length === 0) {
//       return null;
//     }
   
//     let [nearestLocation] = locations;
//     // console.log(nearestLocation);
//     const [, nearestPoint] = nearestLocation;
//     // console.log(nearestPoint);
//     let lowestDistance = getDistance(currentPoint, nearestPoint);
   
//     for (const location of locations) {
//       const [, point] = location;
//     //   console.log(point);
//       const distance = getDistance(currentPoint, point);
//       if (distance < lowestDistance) {
//         lowestDistance = distance;
//         nearestLocation = location;
//       }
//     }
   
//     return nearestLocation;
//   };
// console.log(getTheNearestLocation(
//     [ 
//         ['Park', [10, 5]], 
//         ['Sea', [1, 3]], 
//         ['Museum', [8, 4]]
//     ], 
//     [5, 5]
// ));

// const flatten = (coll) => {
//   let result = [];
//   for (const iterator of coll) {
//     if (Array.isArray(iterator)) {
//       result = [...result, ...iterator];
//     } else {
//       result = [...result, iterator];
//     }
//   }
 
//   return result;
// };
// console.log(flatten([]));
// console.log(flatten([1, [3, 2], 9]));
// console.log(flatten([1, [ [2], [3] ], [9] ]));


// function getMirrorMatrix(matrix) {  
//     const newMatrix = []
//     for (let i = 0; i < matrix.length; i++) {
//       const row = matrix[i]
//       const rowLength = row.length
//       const newRow = []
//       for (let j = 0; j < rowLength; j++) {
//         newRow.push(row[j < rowLength / 2 ? j : rowLength - j - 1])      
//       }
//       newMatrix.push(newRow)
//     }
//     return newMatrix
//   }
// console.log(getMirrorMatrix([
//     [11, 12, 13, 14],
//     [21, 22, 23, 24],
//     [31, 32, 33, 34],
//     [41, 42, 43, 44]
// ]));

// const getMirrorMatrix = (matrix) => {
// 	let result = [];

// 	for (let i = 0; i < matrix.length; i++) {
//     let newRow = [];
    
// 		for (let j = 0; j < matrix.length; j++) {
//     	if (j >= (matrix.length / 2)) {
//       	newRow.push(matrix[i][matrix.length-j-1]);
//       } else {
//       	newRow.push(matrix[i][j]);
//       }
//     }
    
//     result.push(newRow);
//   }
  
//   return result;
// };
   
// console.log(getMirrorMatrix([
//     [11, 12, 13, 14, 15, 16],
//     [21, 22, 23, 24, 15, 16],
//     [31, 32, 33, 34, 15, 16],
//     [41, 42, 43, 44, 15, 16]
// ]));



let example = 1;