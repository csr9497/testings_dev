function sum(a, b) {
  let msg_string = `The variable %v doesn't be a integer`;
  let msg_null = `The variable %v doesn't have value`;

  // validations nulls
  if (!a || a == "") return msg_null.replace("%v", a);
  if (!b || b == "") return msg_null.replace("%v", b);

  // validations by type number
  if (typeof a != "number") return msg_string.replace("%v", a);
  if (typeof b != "number") return msg_string.replace("%v", b);

  
  return a + b;
}
module.exports = sum;
