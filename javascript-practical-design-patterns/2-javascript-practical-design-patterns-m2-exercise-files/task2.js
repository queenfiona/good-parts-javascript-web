let Task = function (name){
	this.name = name;
	this.completed = false;

	this.complete = function (){
		console.log("Completing task: " + this.name);
		this.completed = true;
	}

	this.save = function (){
		console.log("Saving task: " + this.name);
	}
}

let task1 = new Task("Create a demo for constructor design pattern");
let task2 = new Task("Create a demo for modules design pattern");
let task3 = new Task("Create a demo for singleton design pattern");
let task4 = new Task("Create a demo for prototype design pattern");

task1.complete()
task2.save()
task3.save()
task4.save()