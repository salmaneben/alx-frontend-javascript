# 0x03. ES6 Data Manipulation

## 📋 Description

This project focuses on advanced data manipulation techniques in JavaScript using ES6+ features. You'll master array methods, work with modern data structures like Set and Map, handle typed arrays, and implement efficient data processing patterns used in real-world applications.

## 🎯 Learning Objectives

After completing this project, you should be able to:

- Use `map`, `filter`, and `reduce` on arrays effectively
- Understand and implement typed arrays for performance
- Work with Set, Map, and WeakMap data structures
- Manipulate data structures efficiently
- Understand when to use different data structures
- Implement functional programming patterns
- Handle large datasets with optimal performance
- Use advanced array and object manipulation techniques

## 📚 Concepts Covered

### Array Methods
- **`map()`**: Transform array elements
- **`filter()`**: Select elements based on criteria
- **`reduce()`**: Aggregate array data into single values
- **`find()`**: Locate specific elements
- **`every()`** & **`some()`**: Test array conditions

### Modern Data Structures
- **Set**: Collection of unique values
- **Map**: Key-value pairs with any key type
- **WeakMap**: Garbage-collectable key-value pairs
- **Typed Arrays**: Efficient numerical data storage

### Functional Programming
- **Higher-Order Functions**: Functions that operate on other functions
- **Immutability**: Avoiding data mutation
- **Pure Functions**: Functions without side effects
- **Function Composition**: Combining functions for complex operations

### Performance Optimization
- **Memory Efficiency**: Choosing appropriate data structures
- **Time Complexity**: Understanding algorithm performance
- **Garbage Collection**: Managing memory with WeakMap/WeakSet

## 🗂️ Files Overview

| File | Description |
|------|-------------|
| `0-get_list_students.js` | Basic array creation with objects |
| `1-get_list_student_ids.js` | Extract specific properties with `map()` |
| `2-get_students_by_loc.js` | Filter arrays based on criteria |
| `3-get_ids_sum.js` | Aggregate data with `reduce()` |
| `4-update_grade_by_city.js` | Complex data transformation and merging |
| `5-typed_arrays.js` | Working with ArrayBuffer and typed arrays |
| `6-set.js` | Basic Set operations and creation |
| `7-has_array_values.js` | Set membership testing with arrays |
| `8-clean_set.js` | Advanced Set manipulation and string processing |
| `9-groceries_list.js` | Map creation and basic operations |
| `10-update_uniq_items.js` | Map modification and error handling |
| `100-weak.js` | WeakMap usage for tracking and garbage collection |

## 🚀 Getting Started

### Prerequisites
- Node.js (v12.11.x or higher)
- Understanding of ES6 classes and promises
- Basic knowledge of functional programming concepts

### Setup
```bash
# Navigate to the project directory
cd 0x03-ES6_data_manipulation

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

### Task 0: Basic List of Objects
**File**: `0-get_list_students.js`
- Create function returning array of student objects
- Basic object structure and array creation

```javascript
// Expected output
[
  { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
  { id: 2, firstName: 'James', location: 'Columbia' },
  { id: 5, firstName: 'Serena', location: 'San Francisco' }
]
```

### Task 1: More Mapping
**File**: `1-get_list_student_ids.js`
- Extract IDs from student objects using `map()`
- Handle edge cases with type checking

```javascript
// Expected behavior
getListStudentIds(students); // [1, 2, 5]
getListStudentIds("not an array"); // []
```

### Task 2: Filter
**File**: `2-get_students_by_loc.js`
- Filter students by location using `filter()`
- Functional programming approach to data selection

```javascript
// Expected usage
getStudentsByLocation(students, 'San Francisco');
// Returns students from San Francisco only
```

### Task 3: Reduce
**File**: `3-get_ids_sum.js`
- Sum all student IDs using `reduce()`
- Aggregate numerical data from objects

```javascript
// Expected behavior
getStudentIdsSum(students); // Returns sum of all IDs (1 + 2 + 5 = 8)
```

### Task 4: Combine
**File**: `4-update_grade_by_city.js`
- Complex data transformation combining filter and map
- Merge student data with grade information
- Handle missing grades gracefully

```javascript
// Expected behavior
updateStudentGradeByCity(students, "San Francisco", grades);
// Returns students from SF with their grades added
```

### Task 5: Typed Arrays
**File**: `5-typed_arrays.js`
- Create Int8Array with ArrayBuffer
- Handle typed array bounds and errors
- Performance-oriented numerical data storage

```javascript
// Expected behavior
createInt8TypedArray(10, 2, 89); // Creates 10-byte buffer with value 89 at position 2
```

### Task 6: Set Data Structure
**File**: `6-set.js`
- Convert array to Set for unique values
- Basic Set creation and deduplication

```javascript
// Expected behavior
setFromArray([12, 32, 15, 78, 98, 15]); // Set with unique values
```

### Task 7: More Set Data Structure
**File**: `7-has_array_values.js`
- Check if Set contains all values from array
- Set membership testing with `every()` and `has()`

```javascript
// Expected behavior
hasValuesFromArray(new Set([1, 2, 3, 4, 5]), [1]); // true
hasValuesFromArray(new Set([1, 2, 3, 4, 5]), [10]); // false
```

### Task 8: Clean Set
**File**: `8-clean_set.js`
- Advanced Set filtering and string manipulation
- Process Set values with specific criteria
- Handle edge cases and empty inputs

```javascript
// Expected behavior
cleanSet(new Set(['bonjovi', 'bonaparte', 'bonappetit', 'banana']), 'bon');
// Returns "jovi-aparte-appetit" (values starting with 'bon', prefix removed)
```

### Task 9: Map Data Structure
**File**: `9-groceries_list.js`
- Create Map with key-value pairs
- Basic Map operations and initialization

```javascript
// Expected output
Map {
  'Apples' => 10,
  'Tomatoes' => 10,
  'Pasta' => 1,
  'Rice' => 1,
  'Banana' => 5
}
```

### Task 10: More Map Data Structure
**File**: `10-update_uniq_items.js`
- Modify Map values based on conditions
- Error handling for invalid inputs
- Map iteration and value updates

```javascript
// Expected behavior
updateUniqueItems(groceriesMap); // Updates items with quantity 1 to 100
```

### Task 100: Weak Link Data Structure
**File**: `100-weak.js`
- Implement WeakMap for tracking API calls
- Garbage collection-friendly data storage
- Rate limiting and monitoring patterns

```javascript
// Expected behavior
queryAPI(endpoint); // Increments counter in WeakMap
// Throws error if endpoint queried >= 5 times
```

## 🧪 Testing

### Running Tests
```bash
# Test basic array operations
node tests/0-main.js

# Test array transformation
node tests/1-main.js

# Test filtering
node tests/2-main.js

# Test reduction
node tests/3-main.js

# Test Set operations
node tests/6-main.js

# Test Map operations
node tests/9-main.js

# Test WeakMap
node tests/100-main.js
```

### Example Test Outputs

**Test 1 - Array Mapping**:
```bash
$ node tests/1-main.js
[]
[1, 2, 5]
```

**Test 3 - Reduce Operation**:
```bash
$ node tests/3-main.js
8
```

**Test 6 - Set Creation**:
```bash
$ node tests/6-main.js
Set { 12, 32, 15, 78, 98 }
```

## 💡 Key Data Manipulation Concepts

### 1. Array Transformation Methods
```javascript
const numbers = [1, 2, 3, 4, 5];

// Transform each element
const doubled = numbers.map(x => x * 2); // [2, 4, 6, 8, 10]

// Filter based on condition
const evens = numbers.filter(x => x % 2 === 0); // [2, 4]

// Reduce to single value
const sum = numbers.reduce((acc, x) => acc + x, 0); // 15

// Find specific element
const found = numbers.find(x => x > 3); // 4

// Test conditions
const allPositive = numbers.every(x => x > 0); // true
const hasLarge = numbers.some(x => x > 10); // false
```

### 2. Set Operations
```javascript
const set = new Set([1, 2, 3, 3, 4]); // Set {1, 2, 3, 4}

// Add elements
set.add(5); // Set {1, 2, 3, 4, 5}

// Check membership
set.has(3); // true

// Remove elements
set.delete(2); // true

// Get size
set.size; // 4

// Convert to array
const array = [...set]; // [1, 3, 4, 5]

// Set operations
const setA = new Set([1, 2, 3]);
const setB = new Set([3, 4, 5]);

// Union
const union = new Set([...setA, ...setB]); // {1, 2, 3, 4, 5}

// Intersection
const intersection = new Set([...setA].filter(x => setB.has(x))); // {3}
```

### 3. Map Operations
```javascript
const map = new Map();

// Set key-value pairs
map.set('name', 'John');
map.set('age', 30);
map.set(42, 'number key');

// Get values
map.get('name'); // 'John'

// Check existence
map.has('age'); // true

// Iterate over map
for (const [key, value] of map) {
  console.log(`${key}: ${value}`);
}

// Get all keys/values
const keys = [...map.keys()]; // ['name', 'age', 42]
const values = [...map.values()]; // ['John', 30, 'number key']
```

### 4. Typed Arrays
```javascript
// Create buffer
const buffer = new ArrayBuffer(16);

// Create typed array views
const int32View = new Int32Array(buffer);
const int16View = new Int16Array(buffer);

// Set values
int32View[0] = 42;

// Access values
console.log(int32View[0]); // 42
console.log(int16View[0]); // 42 (same memory, different view)

// Specific typed arrays
const bytes = new Uint8Array([1, 2, 3, 4]);
const floats = new Float32Array([1.1, 2.2, 3.3]);
```

### 5. WeakMap Usage
```javascript
const weakMap = new WeakMap();
let obj = { name: 'example' };

// Set values (only objects as keys)
weakMap.set(obj, 'some value');

// Get values
weakMap.get(obj); // 'some value'

// Check existence
weakMap.has(obj); // true

// When obj is garbage collected, the entry is automatically removed
obj = null; // Entry in WeakMap becomes eligible for garbage collection
```

## 🔧 Advanced Patterns

### Functional Composition
```javascript
const compose = (...fns) => (value) => fns.reduceRight((acc, fn) => fn(acc), value);

const addOne = x => x + 1;
const double = x => x * 2;
const square = x => x * x;

const transform = compose(square, double, addOne);
console.log(transform(3)); // ((3 + 1) * 2)² = 64
```

### Pipeline Pattern
```javascript
const pipeline = (data, ...operations) => 
  operations.reduce((result, operation) => operation(result), data);

const result = pipeline(
  [1, 2, 3, 4, 5],
  arr => arr.filter(x => x % 2 === 0),
  arr => arr.map(x => x * 2),
  arr => arr.reduce((sum, x) => sum + x, 0)
); // 12
```

### Memoization with Map
```javascript
function memoize(fn) {
  const cache = new Map();
  return function(...args) {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      return cache.get(key);
    }
    const result = fn.apply(this, args);
    cache.set(key, result);
    return result;
  };
}

const expensiveFunction = memoize((n) => {
  console.log('Computing...');
  return n * n;
});
```

## 🐛 Common Pitfalls

### 1. Mutating Original Arrays
```javascript
// ❌ Wrong - mutates original
const numbers = [1, 2, 3];
numbers.sort().reverse(); // Modifies original array

// ✅ Correct - creates new array
const numbers = [1, 2, 3];
const sorted = [...numbers].sort().reverse(); // Original unchanged
```

### 2. Incorrect Reduce Initial Value
```javascript
// ❌ Wrong - no initial value for empty array
const empty = [];
const sum = empty.reduce((a, b) => a + b); // TypeError

// ✅ Correct - provide initial value
const sum = empty.reduce((a, b) => a + b, 0); // 0
```

### 3. Set vs Array Performance
```javascript
// ❌ Slow for large datasets
const array = [1, 2, 3, /* ... thousands more */];
const hasValue = array.includes(1000); // O(n)

// ✅ Fast lookups
const set = new Set([1, 2, 3, /* ... thousands more */]);
const hasValue = set.has(1000); // O(1)
```

## 🎨 Best Practices

### 1. Choose Right Data Structure
```javascript
// Use Set for unique values
const uniqueUsers = new Set(userIds);

// Use Map for key-value relationships
const userProfiles = new Map();
userProfiles.set(userId, profile);

// Use Array for ordered data
const timeline = events.sort((a, b) => a.timestamp - b.timestamp);
```

### 2. Prefer Immutable Operations
```javascript
// ❌ Avoid mutation
function addToArray(arr, item) {
  arr.push(item); // Mutates original
  return arr;
}

// ✅ Return new array
function addToArray(arr, item) {
  return [...arr, item]; // Creates new array
}
```

### 3. Use Method Chaining
```javascript
const result = students
  .filter(student => student.grade >= 80)
  .map(student => ({ ...student, status: 'passed' }))
  .sort((a, b) => b.grade - a.grade);
```

## 📖 Additional Resources

- [MDN - Array Methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [MDN - Set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)
- [MDN - Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)
- [MDN - Typed Arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays)
- [Functional Programming in JavaScript](https://github.com/mostly-adequate/mostly-adequate-guide)

## ✅ Checklist

- [ ] Master array methods: map, filter, reduce, find, every, some
- [ ] Understand when to use Set vs Array
- [ ] Can work with Map for key-value relationships
- [ ] Know how to use typed arrays for performance
- [ ] Understand WeakMap for memory-efficient caching
- [ ] Can implement functional programming patterns
- [ ] Know how to chain array operations efficiently
- [ ] Understand time/space complexity of different operations
- [ ] Can handle edge cases in data processing
- [ ] Familiar with immutable data manipulation patterns

---

**Previous**: [0x02-ES6_classes](../0x02-ES6_classes/) | **Next**: Continue exploring advanced JavaScript concepts!
