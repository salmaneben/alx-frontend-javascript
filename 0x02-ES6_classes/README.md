# 0x02. ES6 Classes

## 📋 Description

This project explores Object-Oriented Programming (OOP) in JavaScript using ES6 class syntax. You'll learn how to create classes, implement inheritance, use static methods, and apply advanced OOP concepts to build robust, maintainable applications.

## 🎯 Learning Objectives

After completing this project, you should be able to:

- Define a Class and instantiate objects
- Add methods to a class (including static methods)
- Extend a class from another using inheritance
- Understand and implement getters and setters
- Use abstract classes and method overriding
- Work with Symbol.species for advanced inheritance patterns
- Implement proper encapsulation with private properties
- Understand metaprogramming concepts

## 📚 Concepts Covered

### Class Fundamentals
- **Class Declaration**: Basic class syntax and structure
- **Constructor Method**: Initializing class instances
- **Instance Methods**: Methods available on class instances
- **Static Methods**: Methods available on the class itself

### Encapsulation
- **Private Properties**: Using underscore convention and true private fields
- **Getters and Setters**: Controlled access to class properties
- **Property Validation**: Ensuring data integrity

### Inheritance
- **Class Extension**: Creating subclasses with `extends`
- **Method Overriding**: Customizing inherited behavior
- **Super Calls**: Accessing parent class methods
- **Symbol.species**: Advanced inheritance patterns

### Advanced Concepts
- **Abstract Classes**: Classes that cannot be instantiated directly
- **Method Binding**: Understanding `this` context in class methods
- **Class Expressions**: Alternative class definition syntax
- **Mixins**: Combining multiple class behaviors

## 🗂️ Files Overview

| File | Description |
|------|-------------|
| `0-classroom.js` | Basic class definition with constructor |
| `1-make_classrooms.js` | Class instantiation and array creation |
| `2-hbtn_course.js` | Class with getters, setters, and validation |
| `3-currency.js` | Simple class with display methods |
| `4-pricing.js` | Class composition and static methods |
| `5-building.js` | Abstract class implementation |
| `6-sky_high.js` | Class inheritance and method overriding |
| `7-airport.js` | Custom string and number representation |
| `8-hbtn_class.js` | Type coercion with classes |
| `9-hoisting.js` | Class hoisting and organization |
| `10-car.js` | Symbol.species and cloning patterns |
| `100-evcar.js` | Advanced inheritance with Symbol.species override |

## 🚀 Getting Started

### Prerequisites
- Node.js (v12.11.x or higher)
- Understanding of ES6 basics and promises
- Basic knowledge of Object-Oriented Programming concepts

### Setup
```bash
# Navigate to the project directory
cd 0x02-ES6_classes

# Install dependencies
npm install
```

### Running the Code

```bash
# Run individual test files
node tests/0-main.js
node tests/1-main.js

# Run with Babel for full ES6 support
npm run dev tests/0-main.js
```

## 📋 Tasks Breakdown

### Task 0: You Used to Attend a Place Like This
**File**: `0-classroom.js`
- Implement a basic `ClassRoom` class
- Constructor that accepts `maxStudentsSize`
- Private property convention with underscore

```javascript
// Expected usage
const room = new ClassRoom(10);
console.log(room._maxStudentsSize); // 10
```

### Task 1: Let's Make Some Classrooms
**File**: `1-make_classrooms.js`
- Create function that returns array of ClassRoom instances
- Class instantiation and array manipulation

```javascript
// Expected output
[ClassRoom { _maxStudentsSize: 19 }, ClassRoom { _maxStudentsSize: 20 }, ClassRoom { _maxStudentsSize: 34 }]
```

### Task 2: A Course, Getters, and Setters
**File**: `2-hbtn_course.js`
- Implement `HolbertonCourse` class with validation
- Getters and setters with type checking
- Error throwing for invalid inputs

```javascript
// Expected behavior
const course = new HolbertonCourse("ES6", 1, ["Bob", "Jane"]);
course.name = "Python 101"; // Valid
course.name = 12; // Throws TypeError
```

### Task 3: Methods, Static Methods, Computed Method Names
**File**: `3-currency.js`
- Implement `Currency` class with display methods
- Method definitions using ES6 syntax

```javascript
// Expected usage
const currency = new Currency('EUR', 'Euro');
console.log(currency.displayFullCurrency()); // "Euro (EUR)"
```

### Task 4: Pricing
**File**: `4-pricing.js`
- Implement `Pricing` class with composition
- Static method for currency conversion
- Class composition patterns

```javascript
// Expected usage
const pricing = new Pricing(100, new Currency("EUR", "Euro"));
console.log(pricing.displayFullPrice()); // "100 Euro (EUR)"
```

### Task 5: A Building
**File**: `5-building.js`
- Implement abstract `Building` class
- Force subclasses to implement specific methods
- Abstract class pattern in JavaScript

```javascript
// Expected behavior
const building = new Building(100); // OK
class TestBuilding extends Building {} // Must implement evacuationWarningMessage
new TestBuilding(200); // Throws error
```

### Task 6: Inheritance
**File**: `6-sky_high.js`
- Implement `SkyHighBuilding` extending `Building`
- Method overriding and super calls
- Proper inheritance patterns

```javascript
// Expected usage
const building = new SkyHighBuilding(140, 60);
console.log(building.evacuationWarningMessage()); // "Evacuate slowly the 60 floors"
```

### Task 7: Airport
**File**: `7-airport.js`
- Implement `Airport` class with custom string representation
- Override default toString behavior
- Symbol.toStringTag for custom class names

```javascript
// Expected behavior
const airport = new Airport("LAX", "Los Angeles");
console.log(String(airport)); // "LAX"
```

### Task 8: Primitive - Holberton Class
**File**: `8-hbtn_class.js`
- Implement class with custom type coercion
- valueOf() and toString() methods
- Type conversion behavior

```javascript
// Expected behavior
const hc = new HolbertonClass(12, "Mezzanine");
console.log(Number(hc)); // 12
console.log(String(hc)); // "Mezzanine"
```

### Task 9: Hoisting
**File**: `9-hoisting.js`
- Fix class hoisting issues
- Proper class declaration order
- Class and instance organization

```javascript
// Expected: Proper class definitions before usage
export class HolbertonClass { /* ... */ }
export class StudentHolberton { /* ... */ }
// Then create instances
```

### Task 10: Vroom
**File**: `10-car.js`
- Implement `Car` class with cloning functionality
- Symbol.species for inheritance control
- Cloning patterns and species override

```javascript
// Expected behavior
const car = new Car("Tesla", "Turbo", "Red");
const clone = car.cloneCar(); // Creates new instance of same class
```

### Task 100: EVCar
**File**: `100-evcar.js`
- Extend `Car` class with electric vehicle features
- Override Symbol.species to control inheritance
- Advanced inheritance patterns

```javascript
// Expected behavior
const evCar = new EVCar("Tesla", "Turbo", "Red", "250");
const clone = evCar.cloneCar(); // Returns Car instance, not EVCar
```

## 🧪 Testing

### Running Tests
```bash
# Test basic class creation
node tests/0-main.js

# Test class with validation
node tests/2-main.js

# Test inheritance
node tests/6-main.js

# Test advanced inheritance
node tests/100-main.js
```

### Example Test Outputs

**Test 0 - Basic Class**:
```bash
$ node tests/0-main.js
ClassRoom { _maxStudentsSize: 10 }
```

**Test 2 - Getters/Setters**:
```bash
$ node tests/2-main.js
ES6
HolbertonCourse { _name: 'Python 101', _length: 1, _students: [ 'Bob', 'Jane' ] }
TypeError: Name must be a string
```

**Test 8 - Type Coercion**:
```bash
$ node tests/8-main.js
12
Mezzanine
```

## 💡 Key Class Concepts

### 1. Basic Class Structure
```javascript
class MyClass {
  constructor(param) {
    this._privateProperty = param;
  }
  
  // Instance method
  instanceMethod() {
    return this._privateProperty;
  }
  
  // Static method
  static staticMethod() {
    return "I'm a static method";
  }
  
  // Getter
  get property() {
    return this._privateProperty;
  }
  
  // Setter
  set property(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Property must be a string');
    }
    this._privateProperty = value;
  }
}
```

### 2. Inheritance Pattern
```javascript
class Parent {
  constructor(name) {
    this._name = name;
  }
  
  parentMethod() {
    return `Parent: ${this._name}`;
  }
}

class Child extends Parent {
  constructor(name, age) {
    super(name); // Call parent constructor
    this._age = age;
  }
  
  // Override parent method
  parentMethod() {
    return `Child: ${super.parentMethod()}, Age: ${this._age}`;
  }
}
```

### 3. Abstract Class Pattern
```javascript
class AbstractClass {
  constructor() {
    if (this.constructor === AbstractClass) {
      throw new Error("Cannot instantiate abstract class");
    }
  }
  
  // Abstract method - must be implemented by subclasses
  abstractMethod() {
    throw new Error("Abstract method must be implemented");
  }
}

class ConcreteClass extends AbstractClass {
  abstractMethod() {
    return "Implemented!";
  }
}
```

### 4. Symbol.species Pattern
```javascript
class MyArray extends Array {
  static get [Symbol.species]() {
    return Array; // Return Array instead of MyArray for certain operations
  }
}

const myArr = new MyArray(1, 2, 3);
const mapped = myArr.map(x => x * 2); // Returns Array, not MyArray
```

## 🔧 Advanced Patterns

### Private Fields (Modern JavaScript)
```javascript
class ModernClass {
  #privateField = 'secret';
  
  constructor(public) {
    this.publicField = public;
  }
  
  getPrivate() {
    return this.#privateField;
  }
}
```

### Mixin Pattern
```javascript
const Mixin = {
  mixinMethod() {
    return "From mixin";
  }
};

class MyClass {
  constructor() {
    Object.assign(this, Mixin);
  }
}
```

### Factory Pattern with Classes
```javascript
class ShapeFactory {
  static createShape(type, ...args) {
    switch (type) {
      case 'circle':
        return new Circle(...args);
      case 'rectangle':
        return new Rectangle(...args);
      default:
        throw new Error('Unknown shape type');
    }
  }
}
```

## 🐛 Common Class Pitfalls

### 1. Forgetting `new` Keyword
```javascript
// ❌ Wrong
const instance = MyClass(); // TypeError

// ✅ Correct
const instance = new MyClass();
```

### 2. Arrow Functions in Classes
```javascript
// ❌ Wrong - loses `this` context
class MyClass {
  method = () => {
    // `this` might not be what you expect
  }
}

// ✅ Correct
class MyClass {
  method() {
    // `this` refers to the instance
  }
}
```

### 3. Not Calling Super Constructor
```javascript
// ❌ Wrong
class Child extends Parent {
  constructor(name, age) {
    this.age = age; // ReferenceError - must call super() first
  }
}

// ✅ Correct
class Child extends Parent {
  constructor(name, age) {
    super(name);
    this.age = age;
  }
}
```

## 🎨 Best Practices

### 1. Use Meaningful Names
```javascript
// ❌ Unclear
class X {
  constructor(a, b) { /* ... */ }
}

// ✅ Clear
class UserAccount {
  constructor(username, email) { /* ... */ }
}
```

### 2. Validate Constructor Parameters
```javascript
class User {
  constructor(name, email) {
    if (!name || !email) {
      throw new Error('Name and email are required');
    }
    this._name = name;
    this._email = email;
  }
}
```

### 3. Use Getters/Setters for Validation
```javascript
class Temperature {
  constructor(celsius) {
    this.celsius = celsius;
  }
  
  set celsius(value) {
    if (value < -273.15) {
      throw new Error('Temperature cannot be below absolute zero');
    }
    this._celsius = value;
  }
  
  get celsius() {
    return this._celsius;
  }
}
```

## 📖 Additional Resources

- [MDN - Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
- [MDN - Inheritance](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)
- [MDN - Symbol.species](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/species)
- [JavaScript.info - Classes](https://javascript.info/classes)

## ✅ Checklist

- [ ] Can create basic classes with constructors
- [ ] Understand instance vs static methods
- [ ] Know how to implement getters and setters
- [ ] Can validate input in constructors and setters
- [ ] Understand class inheritance with extends
- [ ] Can override methods in subclasses
- [ ] Know how to call parent methods with super
- [ ] Understand abstract class patterns
- [ ] Can implement custom type coercion
- [ ] Familiar with Symbol.species for inheritance control
- [ ] Know common class pitfalls and best practices

---

**Previous**: [0x01-ES6_promise](../0x01-ES6_promise/) | **Next**: [0x03-ES6_data_manipulation](../0x03-ES6_data_manipulation/)
