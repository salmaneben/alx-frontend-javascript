# 0x00. ES6 Basics

## 📋 Description

This project introduces the fundamentals of ECMAScript 6 (ES6), also known as ECMAScript 2015. You'll learn about the new features and syntax improvements that make JavaScript more powerful and easier to work with.

## 🎯 Learning Objectives

After completing this project, you should be able to:

- Understand what ES6 is and its benefits
- Distinguish between constants and variables
- Use block-scoped variables (`let` and `const`)
- Implement arrow functions and default parameters
- Work with rest and spread operators
- Create and use template literals
- Understand object property shorthand
- Use computed property names
- Work with iterators and for-of loops

## 📚 Concepts Covered

### Constants and Variables
- **const**: For values that won't be reassigned
- **let**: For block-scoped variables
- **var**: Legacy variable declaration (avoid in modern code)

### Block Scope
- Understanding scope differences between `var`, `let`, and `const`
- Block-level scoping vs function-level scoping

### Arrow Functions
- Concise function syntax
- Lexical `this` binding
- When to use arrow functions vs regular functions

### Default Parameters
- Setting default values for function parameters
- Reducing the need for parameter validation

### Rest and Spread Operators
- **Rest (`...`)**: Collecting multiple arguments into an array
- **Spread (`...`)**: Expanding arrays or objects

### Template Literals
- String interpolation with `${}`
- Multi-line strings
- Tagged template literals

### Object and Array Destructuring
- Extracting values from arrays and objects
- Default values in destructuring
- Renaming variables during destructuring

## 🗂️ Files Overview

| File | Description |
|------|-------------|
| `0-constants.js` | Using `const` and `let` instead of `var` |
| `1-block-scoped.js` | Block scoping with conditional statements |
| `2-arrow.js` | Converting function expressions to arrow functions |
| `3-default-parameter.js` | Using default function parameters |
| `4-rest-parameter.js` | Using rest parameters for functions |
| `5-spread-operator.js` | Using spread syntax for arrays and function calls |
| `6-string-interpolation.js` | Template literals for string interpolation |
| `7-getBudgetObject.js` | Object property shorthand |
| `8-getBudgetCurrentYear.js` | Computed property names in objects |
| `9-getFullBudget.js` | Method properties in objects |
| `10-loops.js` | Using for-of loops with arrays |
| `11-createEmployeesObject.js` | Creating objects with computed property names |
| `12-createReportObject.js` | Using spread syntax with objects |
| `100-createIteratorObject.js` | Creating custom iterators |
| `101-iterateThroughObject.js` | Iterating through custom objects |

## 🚀 Getting Started

### Prerequisites
- Node.js (v12.11.x or higher)
- npm
- Basic understanding of JavaScript

### Setup
```bash
# Navigate to the project directory
cd 0x00-ES6_basic

# Install dependencies
npm install

# Install Babel for ES6 transpilation
npm install --save-dev @babel/core @babel/cli @babel/preset-env
```

### Running the Code

To test individual files:
```bash
# Run a specific test
node tests/0-main.js

# Run with Babel (ES6 support)
npm run dev tests/0-main.js
```

## 📋 Tasks Breakdown

### Task 0: Const or let?
**File**: `0-constants.js`
- Modify functions to use `const` and `let` appropriately
- Understand when to use `const` vs `let`

### Task 1: Block Scope
**File**: `1-block-scoped.js`
- Avoid variable overwriting inside conditional blocks
- Demonstrate block scoping behavior

### Task 2: Arrow Functions
**File**: `2-arrow.js`
- Convert function expressions to arrow functions
- Understand `this` binding in arrow functions

### Task 3: Parameter Defaults
**File**: `3-default-parameter.js`
- Implement default parameter values
- Simplify function parameter handling

### Task 4: Rest Parameter Syntax
**File**: `4-rest-parameter.js`
- Use rest parameters to handle variable arguments
- Return the count of arguments

### Task 5: Spread Syntax
**File**: `5-spread-operator.js`
- Concatenate arrays and strings using spread syntax
- Understand spread vs rest operators

### Task 6: Template Literals
**File**: `6-string-interpolation.js`
- Use template literals for string interpolation
- Embed expressions in strings

### Task 7: Object Property Shorthand
**File**: `7-getBudgetObject.js`
- Use shorthand syntax for object properties
- Simplify object creation

### Task 8: Computed Property Names
**File**: `8-getBudgetCurrentYear.js`
- Use computed property names in objects
- Dynamic object property creation

### Task 9: Method Properties
**File**: `9-getFullBudget.js`
- Use ES6 method definitions in objects
- Shorthand for object methods

### Task 10: For...of Loops
**File**: `10-loops.js`
- Replace traditional for loops with for-of
- Iterate over array values directly

### Task 11: Iterator Object
**File**: `11-createEmployeesObject.js`
- Create objects with dynamic property names
- Use computed property syntax

### Task 12: Report Object
**File**: `12-createReportObject.js`
- Use spread syntax with objects
- Create complex object structures

### Task 100: Iterator Pattern
**File**: `100-createIteratorObject.js`
- Implement custom iterators
- Work with iterator protocol

### Task 101: Iterate Through Object
**File**: `101-iterateThroughObject.js`
- Iterate through custom objects
- Join iterator values

## 🧪 Testing

Each implementation has corresponding test files in the `tests/` directory:

```bash
# Test constants and variables
node tests/0-main.js

# Test block scoping
node tests/1-main.js

# Test arrow functions
node tests/2-main.js

# ... and so on
```

### Example Test Output
```javascript
// Running tests/0-main.js
I prefer const when I can.
But sometimes let is okay
```

## 💡 Key ES6 Features Demonstrated

### 1. Block Scoping
```javascript
// ES5 (avoid)
var name = 'John';

// ES6 (preferred)
const name = 'John';  // Won't change
let age = 25;         // Might change
```

### 2. Arrow Functions
```javascript
// ES5
var add = function(a, b) {
  return a + b;
};

// ES6
const add = (a, b) => a + b;
```

### 3. Template Literals
```javascript
// ES5
var message = 'Hello, ' + name + '!';

// ES6
const message = `Hello, ${name}!`;
```

### 4. Destructuring
```javascript
// Array destructuring
const [first, second] = array;

// Object destructuring
const { name, age } = person;
```

### 5. Spread Operator
```javascript
// Array spreading
const newArray = [...oldArray, newItem];

// Object spreading
const newObj = { ...oldObj, newProp: value };
```

## 🔧 Configuration Files

### package.json
```json
{
  "scripts": {
    "dev": "babel-node",
    "test": "jest",
    "lint": "eslint"
  },
  "devDependencies": {
    "@babel/core": "^7.6.0",
    "@babel/cli": "^7.6.0",
    "@babel/preset-env": "^7.6.0"
  }
}
```

### .babelrc
```json
{
  "presets": ["@babel/preset-env"]
}
```

## 🐛 Common Issues and Solutions

### Issue 1: `const` Reassignment
```javascript
// ❌ Wrong
const arr = [];
arr = [1, 2, 3]; // TypeError

// ✅ Correct
const arr = [];
arr.push(1, 2, 3); // OK - modifying contents, not reassigning
```

### Issue 2: Arrow Function `this` Binding
```javascript
// ❌ Wrong
const obj = {
  name: 'John',
  greet: () => {
    console.log(`Hello, ${this.name}`); // `this` is undefined
  }
};

// ✅ Correct
const obj = {
  name: 'John',
  greet() {
    console.log(`Hello, ${this.name}`); // `this` refers to obj
  }
};
```

## 📖 Additional Resources

- [MDN Web Docs - ES6](https://developer.mozilla.org/en-US/docs/Web/JavaScript/New_in_JavaScript/ECMAScript_2015_support_in_Mozilla)
- [ES6 Features Overview](https://github.com/lukehoban/es6features)
- [Babel Documentation](https://babeljs.io/docs/)
- [ESLint Configuration](https://eslint.org/docs/user-guide/configuring)

## ✅ Checklist

- [ ] Understand `const` vs `let` vs `var`
- [ ] Can write arrow functions
- [ ] Know when to use default parameters
- [ ] Comfortable with template literals
- [ ] Understand destructuring assignment
- [ ] Can use spread and rest operators
- [ ] Know object property shorthand
- [ ] Understand block scoping
- [ ] Can create and use iterators
- [ ] Familiar with for-of loops

---

**Next**: Move on to [0x01-ES6_promise](../0x01-ES6_promise/) to learn about asynchronous JavaScript programming.
