const hobbies = ["Sports", "Cooking", "Reading"];
console.log(hobbies[0]); // put the position

// add a new element 
hobbies.push("Working");
console.log(hobbies);

// procura item
hobbies.findIndex((item) => {
    return item === 'Sports';
})