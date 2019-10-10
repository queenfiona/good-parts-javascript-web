var Task = function (name) {
    this.name = name;
    this.completed = false;
}

Task.prototype.complete = function () {
    console.log('completing task: ' + this.name);
    this.completed = true;
};

Task.prototype.save = function () {
    console.log('saving Task: ' + this.name);
};

var myTask = new Task('Legacy Task');
myTask.complete();
myTask.save();

// This is a decoration, extending the object Task without modifying it
var urgentTask = new Task('Urgent Task');
urgentTask.priority = 2;
urgentTask.notify = function(){
    console.log('notifying important people');
};

urgentTask.extendComplete = function(){
	console.log("Demonstrates extending object functionality without being obstrusive");
};
// Call the normal complete
urgentTask.complete();

urgentTask.complete = function(){
	this.extendComplete();
	Task.prototype.complete.call(this);
};

//After extending, make sure to call the function
urgentTask.complete();

urgentTask.save = function(){
    this.notify();
    Task.prototype.save.call(this)
};

urgentTask.save();
