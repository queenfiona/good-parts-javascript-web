"use strict";

let cat = {name: "Fluffy", color : "White"}

cat.age = 3

// add speak function to cat object

cat.speak = function () { display("Meooow!")}

display(cat.name);
display(cat.age);
cat.speak();