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