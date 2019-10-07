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