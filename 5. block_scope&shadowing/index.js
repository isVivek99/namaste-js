// let a = 100;
// let b = 20;
// {
//   let a = 10;
//   console.log(a);
// }

// console.log(a, b);
// -----------------------------

// function func() {
//   let a = "Geeks";

//   if (true) {
//     let a = "GeeksforGeeks"; // New value assigned
//     console.log(a);
//   }

//   console.log(a);
// }
// func();
// ---------------------------

// let employee = "Liza";

// ["Lucia", "James", "Vera"].forEach((employee) => {
//   //variable 'employee' defined on line 1 is accessible in the inner scope.
//   console.log(employee); // Liza Liza Liza (repeated three times in each loop)
// });
// -----------------------

// var c = 100;
// function x() {
//   var c = 20;
//   console.log(c);
// }
// x();
// console.log(c);
// -------------------------

let a = 10;
{
  var a = 10;
}
