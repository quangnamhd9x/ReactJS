export function calulateWinner(cells) {
  const lines = [];
  for (let i = 0; i < 10; i++) {
    for (let k = 0; k <= 10; k++) {
      lines[[i][k]] = null;
    }
  }

  console.log(lines);
  // const lines = [
  //   [0, 1, 2, 3,4,5,6,7,8,9,10],
  //   [11,12,13,14,15,16,17,18,19,20],
  //   [8, 9, 10, 11],
  //   [12, 13, 14, 15],
  //   [0, 4, 8, 12],
  //   [1, 5, 9, 13],
  //   [2, 6, 10, 14],
  //   [3, 7, 11, 15],
  //   [3, 6, 9, 12],
  //   [0, 5, 10, 15],
  // ];
  for (let index = 0; index < lines.length; index++) {
    const [a, b, c, d, e, f, g, h, l, m] = lines[index];
    console.log(cells[a]);
    console.log(cells[b]);
    console.log(cells[c]);
    console.log(cells[d]);
    if (
      cells[a] &&
      cells[a] === cells[b] &&
      cells[a] === cells[c] &&
      cells[a] === cells[d] &&
      cells[a] === cells[e] &&
      cells[a] === cells[f] &&
      cells[a] === cells[g] &&
      cells[a] === cells[h] &&
      cells[a] === cells[l] &&
      cells[a] === cells[m]
    ) {
      return cells[a];
    }
  }
  return null;
}
