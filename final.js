var [S, E] = ['S', 'E']

var array = [
  [S, 1, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 1, 0, 0, 0, 1, 1, 0, 0],
  [0, 0, 1, 1, 0, 0, 1, 0, 0, 0],
  [0, 0, 0, 1, 1, 1, 1, 1, 1, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
  [0, 0, 1, 1, 1, 1, 0, 0, 1, 1],
  [1, 1, 1, 0, 0, 1, 0, 0, 0, 1],
  [0, 0, 1, 0, 0, 1, 1, 1, 1, 1],
  [0, 0, 1, 1, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 1, 1, 1, 1, E]
];

findPath(array);

function findPath(arr) {
  const theWay = [];
  const visited = {};

  for (var r = 0; r < arr.length; r++) {
    for (var c = 0; c < arr.length; c++) {
      var element = arr[r][c]
      if (element === S) { findCoordinates({ r, c }); } break;
    }
  }

  function findCoordinates(coord) {
    if (arr[coord.r][coord.c] && !visited[coord.r + '' + coord.c]) {
      visited[coord.r + '' + coord.c] = true;

      if (arr[coord.r][coord.c] === E) {
        theWay.push([coord.r, coord.c]); 
        return true; }

      if (arr[coord.r + 1] && findCoordinates({ r: coord.r + 1, c: coord.c })) {
         theWay.push([coord.r, coord.c]); 
         return true; }

      if (arr[coord.r][coord.c + 1] && findCoordinates({ r: coord.r, c: coord.c + 1 })) {
         theWay.push([coord.r, coord.c]); 
         return true; }

      if (arr[coord.r - 1] && findCoordinates({ r: coord.r - 1, c: coord.c })) {
         theWay.push([coord.r, coord.c]);
          return true; }

      if (arr[coord.r][coord.c - 1] && findCoordinates({ r: coord.r, c: coord.c - 1 })) {
         theWay.push([coord.r, coord.c]); 
         return true; }
    }
  }
  return theWay;
}
