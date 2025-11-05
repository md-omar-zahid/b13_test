function first() {
  const data_one = "Hello Batch Thirteen";
  const data_two = "77";
  const data_three = "This is a new line";
  const data_four = ["test", 13, "four"];
  const data_five = { name: "Omar", title: "DGM" };
  const data_six = 3;
  console.log(data_two + data_six);
  console.log(data_two, data_six);
  console.log(data_five);
}
first();
// self calling function
(function secnd() {
  console.log("self calling function");
})();
