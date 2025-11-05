function condition() {
  const data = -1;
  if (data == 0) {
    console.log(data + "is a odd number");
  } else if (data % 2 == 1 && data > 0) {
    console.log(`${data}  is a odd number`);
  } else if (data % 2 == 0 && data > 0) {
    console.log(`${data} is a even number`);
  } else {
    console.log(
      `${data} is not valid number \n Please enter the correct number`
    );
  }
}
condition();
