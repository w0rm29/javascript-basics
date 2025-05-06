// For a given object o, the object from which o inherits properties is called the prototype of o.

var a = { x: 10, y: 20 };
var b = { p: 100, q: 200 };

b.__proto__ = a;

console.log(b);


/**
 * There are only two limitations:
    1) The references can’t go in circles. JavaScript will throw an error if we try to assign __proto__ in a circle.
    2) The value of __proto__ can be either an object or null. Other types are ignored.


 * this is not affected by prototypes at all.
 * No matter where the method is found: in an object or its prototype. In a method call, this is always the object before the dot.
    So, the setter call admin.fullName= uses admin as this, not user. That is actually a super-important thing, because we may have a big object with many methods, 
    and have objects that inherit from it. And when the inheriting objects run the inherited methods, they will modify only their own states, 
    not the state of the big object.
*/


let user = {
    name: "John",
    surname: "Smith",
  
    set fullName(value) {
      [this.name, this.surname] = value.split(" ");
    },
  
    get fullName() {
      return `${this.name} ${this.surname}`;
    }
  };
  
  let admin = {
    __proto__: user,
    isAdmin: true
  };
  
  alert(admin.fullName); // John Smith (*)
  
  // setter triggers!
  admin.fullName = "Alice Cooper"; // (**)
  
  alert(admin.fullName); // Alice Cooper, state of admin modified
  alert(user.fullName); // John Smith, state of user protected

/**
 * obj.hasOwnProperty(key): it returns true if obj has its own (not inherited) property named key.
 */

/**
 * But why does hasOwnProperty not appear in the for..in loop like eats and jumps do, if for..in lists inherited properties?
    Ans) The answer is simple: it’s not enumerable. Just like all other properties of Object.prototype, it has enumerable:false flag. 
        And for..in only lists enumerable properties. That’s why it and the rest of the Object.prototype properties are not listed.
 */

/**
 * The most intricate thing happens with strings, numbers and booleans.

 * As we remember, they are not objects. But if we try to access their properties, temporary wrapper objects are created using built-in constructors 
String, Number and Boolean. They provide the methods and disappear.

 * These objects are created invisibly to us and most engines optimize them out, but the specification describes it exactly this way. 
Methods of these objects also reside in prototypes, available as String.prototype, Number.prototype and Boolean.prototype.
*/

/**
 * We can use Object.create to perform an object cloning more powerful than copying properties in for..in:
 */
let clone = Object.create(
    Object.getPrototypeOf(obj), Object.getOwnPropertyDescriptors(obj)
  );

  /**
   * This call makes a truly exact copy of obj, including all properties: enumerable and non-enumerable, data properties and setters/getters – everything, 
   * and with the right [[Prototype]].
   */


/**
 * Why was __proto__ replaced by the functions getPrototypeOf/setPrototypeOf?
 * Why was __proto__ partially rehabilitated and its usage allowed in {...}, but not as a getter/setter?
 */


// https://javascript.info/prototype-inheritance#the-value-of-this
