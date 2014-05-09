// GPS 1.2 - JavaScript

// YOUR FULL NAMES:
//  1.Allison Reilly
//  2. Justin Lee


// 1. "YOU SIGNED... WHO?!"


// 2. "Here they Come!"


// created objects for each actor with parameters of name age and quote


// 3. "TIME IS MONEY!"

//created a function called client with parameters of name age and quote
//assigned this to proptery and assigned it to parameter
// changed object

// 4. "SHOW 'EM OFF!"

// created a way to display client's properties in a neat string


// ** BONUS **
// FULL CODE
// We added movies as a property
// We added a function that allowed new clients to push to the client list array

var clientList = []

function Client(name,age,quote,movie){
    this.name = name;
    this.age = age;
    this.quote = quote;
    this.movie = movie;
    this.showQuoteMovie = function(){
        return this.quote + " from " + this.movie + "."
    }
    this.addToClientList = function(){
        clientList.push(this)
    }
    this.addToClientList();
}

var jimCarrey = new Client("Jim Carrey",52,"...So you're telling me there is a chance? YEAH!")
var adamSandler = new Client("Adam Sandler",47,"Thats your home! Are you too good for your home?!")
var kristenBell = new Client("Kristen Bell", 33, "Do you want to build a snowman?")


var shooterMcGavin = new Client("Shooter McGavin", 48, "Just stay out of my way... or you'll pay. Listen to what I say.");

jimCarrey.movie = "Dumb and Dumber";
adamSandler.movie = "Happy Gilmore";
kristenBell.movie = "Frozen";

function displayClient(actor){
    var name = actor.name;
    var age = actor.age;
    var quote = actor.quote;
    return "Your actor's name is " + name + ". Your actor's age is " + age + ". Your actor says: " + quote
}


displayClient(jimCarrey)

jimCarrey.showQuoteMovie()

clientList

//  Your Reflection:
// What parts of your strategy worked? What problems did you face?
// We didn't seem to have a driver or navigator, we did it equally which at times was a bit difficult.
// What questions did you have while coding? What resources did you find to help you answer them?
// I felt like in some sections the directions were not clear, but our guide helped us understand.
// What concepts are you having trouble with, or did you just figure something out? If so, what?
// My guide suggested I look into closures and constructers to get a better understanding
// Did you learn any new skills or tricks?
// We learned how to have the client list update when a new client is added.
// How confident are you with each of the Learning Competencies?
//  Decently confident
// Which parts of the challenge did you enjoy?
// I thought it was really cool figuring out how to update the client list. That could be a very beneficial thing to know for a coder.
// Which parts of the challenge did you find tedious?
// none
