// I worked on this challenge by myself

// For each mission, write the title as a comment. (Shown here). Also include pseudocode as a comment. 
// Note: to make commenting easier, you can highlight the section you want to comment and hold 
// command + / This will comment the line. 
 
 //RESCUE MISSION
 // Move down
 // move down
 // move right
 // move up
 // move up
 // move right
 // move right
 // move down
 // attack
 
 this.moveDown();
this.moveDown();
this.moveRight();
this.moveUp();
this.moveUp();
this.moveRight();
this.moveRight();
this.moveDown();
this.attackNearbyEnemy();


// GRAB THE MUSHROOMS
// move up
// move right
// move up
// move left
// move up
// attack
// Tharin might consider taking a detour after line 3.

this.moveUp();
this.moveRight();
this.moveUp();
this.moveLeft();
this.moveUp();

this.attackNearbyEnemy();

 
 
 
 // DRINK ME
 // attack
 // move right
 // move down
 // move up
 // move right
 // attack enemy
 this.attackNearbyEnemy();
this.moveRight();
this.moveDown();
this.moveUp();
this.moveRight();
this.attackNearbyEnemy();

 
 // TAUNT THE GUARDS
 // move right
 // bust down door
 // move right
 // distract guards
 // move left
 // move left
 // say attack
 // move right
 // say follow me
 // move right
 // move right
 // move up
 // move right
 // say run
 // move down
 // move up
 // move right
 
 this.moveRight();
this.bustDownDoor();

// Delete the "//" in front of each line below.
this.moveRight();
this.say("Hey there!");
this.moveLeft();
this.moveLeft();
this.say("Attack!");

// Now get Phoebe to follow through the dungeon.
this.moveRight();
this.say("Follow me.");
this.moveRight();
this.moveRight();
this.moveUp();
this.moveRight();
this.say("Run!"); 
this.moveDown();
this.moveRight();
this.moveUp();
this.moveRight();
 
 // It's a Trap
// move down
// move down 
// say something
// move up
// move up

// Code:
this.moveDown();
this.moveDown();
this.say("Hey there!");
this.moveUp();
this.moveUp();
 
 
 
 // BREAK THE PRISON
 // ask who goes there
 // if friend break door down
 // if not move right
 // repeat x7
 // move right
 
 
 // Write this isFriend(name) spell to tell friend from foe.
// Return true for friends' names, false for ogres' names.
if(name === "William")
    return true;
if(name === "Krogg")
    return false;  // <-- Start here; Krogg is not a friend!
if(name === "Lucas")
    return true;
if( name === "Brack")
    return false;
if(name === "Marcus" )
    return true;
if( name === "MARCUS")
    return false;
if( name === "Gordon")
    return true;
return true;

// COWARDLY TAUNT
// move in earshot of ogres
// taunt ogres
// move to safe location

this.moveXY(50, 16);
this.moveXY(63, 20);
this.moveXY(70, 10);  // This is a safe spot.

this.say("I can lure them in here.");

// Run your soldier out where the ogres can hear you.
this.moveXY(50,16);
// Say something!
this.say("Haters");
// Then run back behind the arrow towers for safety.
this.moveXY(70,10);
// You can shift+click on the map to insert coordinates.

// COMMANDING FOLLOWERS
// move in earshot of followers
// say follow
// move close to enemy
// say attack
this.moveXY(49, 66);
this.moveXY(60, 63);
this.moveXY(75, 63);
this.say("Hail, friends!");

// Saying anything with "follow" in it will get nearby soldiers
// to follow you
this.say("follow!");
// Saying anything with "attack" will send nearby troops into
// a battle mode.
this.moveXY(63, 40);
// Make sure Tharin is safe!
this.say("attack!"); 


// MOBILE ARTILLARY
// move into range
// attack ogres
// repeat move and attack x4
this.moveXY(30, 26);  // Move into range
this.attackXY(46, 5);  // Shoot once in the middle of the ogres

// If they survive a hit, ogres retaliate!
// Larger ogres take more than one hit...
// So, position and aim carefully.
this.moveXY(46,35);
this.attackXY(67,53);
this.moveXY(30,26);
this.attackXY(46,35);
this.moveXY(45,39);
this.attackXY(49,63);
this.moveXY(48,12);
this.attackXY(47,30);



// Reflection:
// // Write your reflection here.
// What parts of your strategy worked? What problems did you face?
// I only faced problems with the artillary because I skipped through the video

// What questions did you have while coding? What resources did you find to help you answer them?
// None

// What concepts are you having trouble with, or did you just figure something out? If so, what?
//I found this to be an odd tutorial, interesting way to do it. I just felt like it should have gone in more depth. Not just calling the functions, but writing them too. 
// Did you learn any new skills or tricks?
// No

// How confident are you with each of the Learning Competencies?
//Confident
// Which parts of the challenge did you enjoy?
//It was an interesting way to teach
// Which parts of the challenge did you find tedious?
// Just the mobile artillary one. it took me a bit.
