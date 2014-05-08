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

