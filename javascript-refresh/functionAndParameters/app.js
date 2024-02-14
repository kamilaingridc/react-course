function createGreeting(userName, message = 'Hello!') {
    // console.log(userName);
    // console.log(message);
    return "Hi, I'm " + userName + ". " + message;
}

const greeting1 = createGreeting("Max"); // se não der o paramentro, vai aparecer o que está definido
console.log(greeting1);

const greeting2 = createGreeting("Manuel", "Hello, what's up?");
console.log(greeting2);

