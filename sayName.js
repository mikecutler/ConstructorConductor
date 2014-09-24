//Create a Person constructor that accepts name and age as parameters and sets those properties accordingly in the Constructor.

  //code here
var Person = function(name, age){
	this.name = name;
	this.age = age;
}

//Now create three instances of Person with data you make up

  //code here
var mike = new Person("Mike", 24);
var landon = new Person("Landon", 24);
var Jon = new Person("Jon", 32);

//Now add a sayName method on your Person class that will alert the name of whatever Person instance called it.

  //code here
Person.prototype.sayName = function(){
	alert("Hello my name is " + this.name)
}


Person.prototype.numKids = function(){
	alert("I have " + this.numKids)
}

mike.numKids();