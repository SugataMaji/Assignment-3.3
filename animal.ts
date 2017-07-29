/**
 * we can use common object-oriented patterns. 
 * Of course, one of the most fundamental patterns in class-based programming --
 *   is being able to extend existing classes to create new ones using inheritance.
*/


/**
 * The CricketGame class is base class which showing crciket properties and behavior
 * @class CricketGame
 * @constructor
 **/
class Animal {
  private _Name: string;

  constructor(Name: string) {
    this._Name = Name
  }
  animal(Move: number, MakeSound:string) {
    console.log(`The animal name is ${this._Name}, distance is ${Move} and make sound like ${MakeSound}`);
  }
};


/**
 * The WomenCricket class is type of WomenCricket which is drived from CricketGame, and will extend its properties
 * @class WomenCricket
 * @extends Cricket
 * @constructor
**/
class Tiger extends Animal {

  constructor(Name: string) {
    super(Name);
  }
  animal(Move = 100, MakeSound="Tiger Sound"){
    super.animal(Move, MakeSound);
  }

}

/**
 * The MenCricket class is type of MenCricket which is drived from CricketGame, and will extend its properties
 * @class MenCricket
 * @extends CricketGame
 * @constructor
**/
class Elephant extends Animal {

  constructor(Name: string) {
    super(Name);
  }
  animal(Move = 50, MakeSound="Elephant Sound"){
    super.animal(Move, MakeSound);
  }
}


let abouttiger = new Tiger("Tiger");
abouttiger.animal();
let aboutelephant = new Elephant("Elephant");
aboutelephant.animal();



//Here we see the extends keywords used to create a subclass. 
//You can see this where Horse and Snake subclass the base class Animal and gain access to its features.

/**
 * NOTE:
 * ====
 *Derived classes that contain constructor functions must call super() which will execute the constructor function on the base class.
*/