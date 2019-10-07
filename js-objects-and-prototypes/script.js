"use strict";
let cat = Object.create(Object.prototype,{
	name: {
		value : "Fluffy",
		enumerable : true,
		writable: true,
		configurable: true
	},
	color : {
		value : "White",
		enumerable : true,
		writable: true,
		configurable: true
	}
})

display(cat.name,cat.color);