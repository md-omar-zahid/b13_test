function first() {
  const data_four = ["test", 13, "Batch", ["3rd", 4, "5th"]];
  console.log(data_four[3][0]);
  console.log(data_four.length);
  // counting the array index
  console.log("Array index no: ", data_four.length - 1);
  console.log(data_four[data_four.length - 1]);
  console.log(data_four[data_four.length - 1][0]);
}
first();
