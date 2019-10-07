// "use strict";
class Cat{
	constructor(name, color){
		this.name = name;
		this.color = color;
	}

	speak = () =>{
		display('Meeooow!!');
	};
}

let cat = new Cat('Fluffy', 'White');

display(cat.name,cat.color);
cat.speak()

display(Object.getOwnPropertyDescriptor(cat,'name'));

let array1 = ['red', 'blue', 'green']
// Define last property to extend array1- get last element
Object.defineProperty(array1, 'last', { get: function() {
	return this[this.length-1];
}});

let last = array1.last;
display(last);