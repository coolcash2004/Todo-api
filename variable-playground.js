// var person = {
// 	name: 'Andrew',
// 	age: 21
// };

// function updatePerson (obj) {
// 	// obj = {
// 	// 	name: 'Andrew',
// 	// 	age: 24
// 	// }; ASSIGNING NEW VALUE WILL NOT UPDATE ORIGINAL BUT CALLING ORIGINAL WITH NEW VALUE WITH CHANGE IT

// 	obj.age = 24
// }

// updatePerson(person);
// console.log(person);

var grades = [15, 88];

function addGrades (grades) {
	grades.push(55);
	debugger;

	grades = [12, 33, 99]; //wontwork
}


addGrades(grades);
console.log(grades);





