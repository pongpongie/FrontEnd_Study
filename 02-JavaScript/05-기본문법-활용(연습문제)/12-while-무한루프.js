let y = 0;

while (true) {
  y++;

  if (y % 2 == 0) {
    console.log("back to the top");
    continue;
  }
  if (y > 100) {
    break;
  }
  console.log("Hello world ::: %d", y);
}
