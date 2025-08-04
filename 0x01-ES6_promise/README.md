# 0x01. ES6 Promises

## 📋 Description

This project focuses on asynchronous JavaScript programming using ES6 Promises. You'll learn how to handle asynchronous operations, manage API responses, and work with modern async/await syntax to write cleaner, more maintainable code.

## 🎯 Learning Objectives

After completing this project, you should be able to:

- Understand what Promises are and why they're useful
- Use the `then`, `resolve`, and `catch` methods
- Use every method of the Promise object
- Understand `throw` / `try` error handling
- Use the `await` operator and `async` functions
- Handle multiple asynchronous operations with `Promise.all()`, `Promise.race()`, and `Promise.allSettled()`

## 📚 Concepts Covered

### Promise Fundamentals
- **Promise States**: Pending, Fulfilled, Rejected
- **Promise Creation**: Using the Promise constructor
- **Promise Resolution**: Resolving and rejecting promises
- **Promise Chaining**: Connecting multiple asynchronous operations

### Promise Methods
- **`.then()`**: Handle successful promise resolution
- **`.catch()`**: Handle promise rejection
- **`.finally()`**: Execute code regardless of promise outcome
- **`Promise.resolve()`**: Create immediately resolved promises
- **`Promise.reject()`**: Create immediately rejected promises

### Advanced Promise Patterns
- **`Promise.all()`**: Wait for all promises to complete
- **`Promise.race()`**: Get the first promise to complete
- **`Promise.allSettled()`**: Wait for all promises, regardless of outcome

### Async/Await
- **`async` functions**: Functions that return promises
- **`await` operator**: Wait for promise resolution
- **Error handling**: Using try/catch with async/await

## 🗂️ Files Overview

| File | Description |
|------|-------------|
| `0-promise.js` | Basic Promise creation and usage |
| `1-promise.js` | Promise with conditional resolution/rejection |
| `2-then.js` | Promise chaining with `.then()`, `.catch()`, and `.finally()` |
| `3-all.js` | Using `Promise.all()` for multiple operations |
| `4-user-promise.js` | Creating resolved promises with data |
| `5-photo-reject.js` | Creating rejected promises with error messages |
| `6-final-user.js` | Handling multiple promises with different outcomes |
| `7-load_balancer.js` | Using `Promise.race()` for load balancing |
| `8-try.js` | Error handling in functions |
| `9-try.js` | Implementing guardrail pattern for error handling |
| `100-await.js` | Using async/await syntax |

## 🚀 Getting Started

### Prerequisites
- Node.js (v12.11.x or higher)
- Understanding of ES6 basics
- Basic knowledge of asynchronous programming concepts

### Setup
```bash
# Navigate to the project directory
cd 0x01-ES6_promise

# Install dependencies
npm install
```

### Running the Code

```bash
# Run individual test files
node tests/0-main.js
node tests/1-main.js

# Run with full ES6 support
npm run dev tests/0-main.js
```

## 📋 Tasks Breakdown

### Task 0: Keep Every Promise
**File**: `0-promise.js`
- Return a Promise using the Promise constructor
- Basic promise creation and instantiation

```javascript
// Expected behavior
const response = getResponseFromAPI();
console.log(response instanceof Promise); // true
```

### Task 1: Don't Make a Promise...
**File**: `1-promise.js`
- Return a promise that resolves or rejects based on parameter
- Understanding conditional promise outcomes

```javascript
// Expected behavior
getFullResponseFromAPI(true)  // Resolves with success object
getFullResponseFromAPI(false) // Rejects with error
```

### Task 2: Catch Me If You Can!
**File**: `2-then.js`
- Use `.then()`, `.catch()`, and `.finally()` methods
- Proper promise chain handling

```javascript
// Expected behavior
promise
  .then(() => ({ status: 200, body: 'success' }))
  .catch(() => new Error())
  .finally(() => console.log('Got a response from the API'));
```

### Task 3: Handle Multiple Successful Promises
**File**: `3-all.js`
- Use `Promise.all()` to handle multiple promises
- Process results from multiple asynchronous operations

```javascript
// Expected behavior
Promise.all([uploadPhoto(), createUser()])
  .then(results => console.log(`${results[0].body} ${results[1].firstName} ${results[1].lastName}`))
  .catch(() => console.log('Signup system offline'));
```

### Task 4: Simple Promise
**File**: `4-user-promise.js`
- Return a resolved promise with user data
- Creating immediately resolved promises

```javascript
// Expected behavior
signUpUser('Bob', 'Dylan'); // Returns resolved promise with user object
```

### Task 5: Reject the Promises
**File**: `5-photo-reject.js`
- Return a rejected promise with error message
- Creating immediately rejected promises

```javascript
// Expected behavior
uploadPhoto('guillaume.jpg'); // Returns rejected promise with error
```

### Task 6: Handle Multiple Promises
**File**: `6-final-user.js`
- Use `Promise.allSettled()` to handle mixed promise outcomes
- Process both successful and failed promises

```javascript
// Expected behavior
handleProfileSignup('Bob', 'Dylan', 'bob_dylan.jpg')
// Returns array with status and value/reason for each promise
```

### Task 7: Load Balancer
**File**: `7-load_balancer.js`
- Use `Promise.race()` to get the fastest response
- Implement simple load balancing logic

```javascript
// Expected behavior
loadBalancer(chinaDownload, USDownload); // Returns first resolved promise
```

### Task 8: Throw Error / Try
**File**: `8-try.js`
- Implement error handling in mathematical operations
- Basic try/catch error management

```javascript
// Expected behavior
divideFunction(10, 2);  // Returns 5
divideFunction(10, 0);  // Throws error
```

### Task 9: Throw an Error
**File**: `9-try.js`
- Implement guardrail pattern for safe function execution
- Advanced error handling with guaranteed cleanup

```javascript
// Expected behavior
guardrail(() => divideFunction(10, 2))  // ['5', 'Guardrail was processed']
guardrail(() => divideFunction(10, 0))  // ['Error: ...', 'Guardrail was processed']
```

### Task 100: Await
**File**: `100-await.js`
- Use async/await syntax instead of promise chains
- Modern asynchronous programming patterns

```javascript
// Expected behavior
asyncUploadUser(); // Returns {photo: photoData, user: userData} or {photo: null, user: null}
```

## 🧪 Testing

### Running Tests
```bash
# Test basic promise creation
node tests/0-main.js

# Test conditional promises
node tests/1-main.js

# Test promise chaining
node tests/2-main.js

# Test Promise.all()
node tests/3-main.js

# Test async/await
node tests/100-main.js
```

### Example Test Outputs

**Test 0 - Basic Promise**:
```bash
$ node tests/0-main.js
true
```

**Test 2 - Promise Chaining**:
```bash
$ node tests/2-main.js
Got a response from the API
```

**Test 7 - Load Balancer**:
```bash
$ node tests/7-main.js
Downloading from UK is faster
Downloading from FR is faster
```

## 💡 Key Promise Concepts

### 1. Promise States
```javascript
// Pending - Initial state
const pending = new Promise((resolve, reject) => {
  // Operation in progress
});

// Fulfilled - Operation completed successfully
const fulfilled = Promise.resolve('Success!');

// Rejected - Operation failed
const rejected = Promise.reject(new Error('Failed!'));
```

### 2. Promise Chaining
```javascript
promise
  .then(result => {
    // Handle success
    return processResult(result);
  })
  .catch(error => {
    // Handle error
    console.error(error);
  })
  .finally(() => {
    // Always executed
    cleanup();
  });
```

### 3. Multiple Promises
```javascript
// Wait for all to complete
Promise.all([promise1, promise2, promise3])
  .then(results => console.log('All completed:', results))
  .catch(error => console.log('One failed:', error));

// Get the first to complete
Promise.race([promise1, promise2, promise3])
  .then(result => console.log('First completed:', result));

// Get all results (success or failure)
Promise.allSettled([promise1, promise2, promise3])
  .then(results => console.log('All settled:', results));
```

### 4. Async/Await
```javascript
// Traditional promise chain
function fetchUserData() {
  return fetch('/api/user')
    .then(response => response.json())
    .then(data => processData(data))
    .catch(error => handleError(error));
}

// Modern async/await
async function fetchUserData() {
  try {
    const response = await fetch('/api/user');
    const data = await response.json();
    return processData(data);
  } catch (error) {
    handleError(error);
  }
}
```

## 🔧 Utility Functions

### Creating Utility Functions (utils.js)
```javascript
// Simulated API functions for testing
export function uploadPhoto() {
  return Promise.resolve({
    status: 200,
    body: 'photo-profile-1'
  });
}

export function createUser() {
  return Promise.resolve({
    firstName: 'Guillaume',
    lastName: 'Salva'
  });
}
```

## 🐛 Common Promise Pitfalls

### 1. Forgetting to Return Promises
```javascript
// ❌ Wrong
promise.then(result => {
  processResult(result); // Missing return
});

// ✅ Correct
promise.then(result => {
  return processResult(result);
});
```

### 2. Not Handling Errors
```javascript
// ❌ Wrong
promise.then(result => {
  // Handle success only
});

// ✅ Correct
promise
  .then(result => {
    // Handle success
  })
  .catch(error => {
    // Handle error
  });
```

### 3. Mixing async/await with .then()
```javascript
// ❌ Wrong
async function mixedApproach() {
  const result = await promise.then(data => data);
  return result;
}

// ✅ Correct
async function asyncApproach() {
  const result = await promise;
  return result;
}
```

## 🎨 Best Practices

### 1. Error Handling
```javascript
// Always handle errors
async function safeFunction() {
  try {
    const result = await riskyOperation();
    return result;
  } catch (error) {
    console.error('Operation failed:', error);
    throw error; // Re-throw if needed
  }
}
```

### 2. Promise Composition
```javascript
// Compose promises for complex operations
async function complexOperation() {
  const [user, posts, comments] = await Promise.all([
    fetchUser(),
    fetchPosts(),
    fetchComments()
  ]);
  
  return { user, posts, comments };
}
```

### 3. Timeout Handling
```javascript
// Add timeouts to prevent hanging
function withTimeout(promise, ms) {
  const timeout = new Promise((_, reject) =>
    setTimeout(() => reject(new Error('Timeout')), ms)
  );
  
  return Promise.race([promise, timeout]);
}
```

## 📖 Additional Resources

- [MDN - Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [MDN - async/await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)
- [Promises/A+ Specification](https://promisesaplus.com/)
- [JavaScript.info - Promises](https://javascript.info/promise-basics)

## ✅ Checklist

- [ ] Understand Promise states and lifecycle
- [ ] Can create and resolve/reject promises
- [ ] Know how to chain promises with .then()/.catch()
- [ ] Can handle multiple promises with Promise.all()
- [ ] Understand Promise.race() for competitive scenarios
- [ ] Can use Promise.allSettled() for mixed outcomes
- [ ] Comfortable with async/await syntax
- [ ] Know how to handle errors in async code
- [ ] Understand the guardrail pattern
- [ ] Can implement load balancing with promises

---

**Previous**: [0x00-ES6_basic](../0x00-ES6_basic/) | **Next**: [0x02-ES6_classes](../0x02-ES6_classes/)
