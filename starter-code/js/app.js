var tvShow = 'Friends';
console.log(tvShow);

var characters = 6;
characters = 8;

var rating = 7.5;

var name = 'Rohi'
console.log(`My name is ${name} and I am learning javascript`) ;

var hasShowfinished = false;

if (hasShowfinished){
    console.log('yes it has :p');
}else{
    console.log('no it has not');
}


// DATA TYPES 

// DATA TYPES EXERCISE

// IF/ELSE STATEMENTS 

// IF/ELSE EXERCISE

// ARRAY 

// ARRAY EXERCISE

// FINAL CLASS EXERCISE

//ask the user for input 
//var response = prompt ('Are you coming to the party');

//check the value
//if yes then ouput message
/*if (response === 'Yes'){
    alert('See you there!');
}
else{
    alert('ahh maybe next time then');
}
//else ouput different message
*/

var countries = ['Nigeria','Thailand'];
console.log(countries);
countries.push('United Kingdom');
console.log(countries);
countries.shift();
console.log(countries);
countries[1] = 'Morocco'
console.log(countries);
var countrieslist = countries.join(', ')
console.log(countrieslist) 



//session 6 - Object
var person = {
    name: 'Rohi'
    age: 20,
    Friends: ['Akin', 'Shamira', 'Simi', 'Jade', 'Mariatu'],
address: {
    street: 'Electric wharf',
    streetNumber: 23,
},
sayHello: function() {
    //function
    console.log ('Hello!');
},
};

console.log(person.name);
person.sayHello();
console.log(person.friends[2])
console.log(person.address.street);
