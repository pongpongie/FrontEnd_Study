const check_list = [true, false, false, true, true];
console.log("before -->" + check_list);

for (let i = 0; i < check_list.length; i++) {
  check_list[i] = !check_list[i];
}

console.log("after -->" + check_list);
