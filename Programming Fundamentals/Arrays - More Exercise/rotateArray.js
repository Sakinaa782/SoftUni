function rotateArray(arr) {
  let numberOfRotations = Number(arr.pop());
  for (let i = 1; i <= numberOfRotations; i++) {
    let lastElement = arr.pop();
    arr.unshift(lastElement);
  }
  console.log(arr.join(" "));
}
rotateArray(["1", "2", "3", "4", "2"]);
