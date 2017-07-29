/**
 * we can use common object-oriented patterns.
 * Of course, one of the most fundamental patterns in class-based programming --
 *   is being able to extend existing classes to create new ones using inheritance.
*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * The CricketGame class is base class which showing crciket properties and behavior
 * @class CricketGame
 * @constructor
 **/
var Animal = (function () {
    function Animal(Name) {
        this._Name = Name;
    }
    Animal.prototype.animal = function (Move, MakeSound) {
        console.log("The animal name is " + this._Name + ", distance is " + Move + " and make sound like " + MakeSound);
    };
    return Animal;
}());
;
/**
 * The WomenCricket class is type of WomenCricket which is drived from CricketGame, and will extend its properties
 * @class WomenCricket
 * @extends Cricket
 * @constructor
**/
var Tiger = (function (_super) {
    __extends(Tiger, _super);
    function Tiger(Name) {
        return _super.call(this, Name) || this;
    }
    Tiger.prototype.animal = function (Move, MakeSound) {
        if (Move === void 0) { Move = 100; }
        if (MakeSound === void 0) { MakeSound = "Tiger Sound"; }
        _super.prototype.animal.call(this, Move, MakeSound);
    };
    return Tiger;
}(Animal));
/**
 * The MenCricket class is type of MenCricket which is drived from CricketGame, and will extend its properties
 * @class MenCricket
 * @extends CricketGame
 * @constructor
**/
var Elephant = (function (_super) {
    __extends(Elephant, _super);
    function Elephant(Name) {
        return _super.call(this, Name) || this;
    }
    Elephant.prototype.animal = function (Move, MakeSound) {
        if (Move === void 0) { Move = 50; }
        if (MakeSound === void 0) { MakeSound = "Elephant Sound"; }
        _super.prototype.animal.call(this, Move, MakeSound);
    };
    return Elephant;
}(Animal));
var abouttiger = new Tiger("Tiger");
abouttiger.animal();
var aboutelephant = new Elephant("Elephant");
aboutelephant.animal();
//Here we see the extends keywords used to create a subclass. 
//You can see this where Horse and Snake subclass the base class Animal and gain access to its features.
/**
 * NOTE:
 * ====
 *Derived classes that contain constructor functions must call super() which will execute the constructor function on the base class.
*/ 
