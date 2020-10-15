function GetTriangleLevel(n, table) {
  if (n === 1) return table;
  else {
    let tempTable = [];
    tempTable.push(table[0]);
    for (let i = 0; i < table.length - 1; i++) {
      tempTable.push(table[i] + table[i + 1]);
    }
    tempTable.push(table[0]);

    return GetTriangleLevel(--n, tempTable);
  }
}

console.log(GetTriangleLevel(5, [1]));
