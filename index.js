import HashMap from "./hashMap.js";

const myMap = new HashMap();

// Adding key-value pairs
myMap.set("name", "John Doe");
myMap.set("age", 30);
myMap.set("occupation", "Developer");
console.log("After setting key-value pairs:");
console.log(myMap.entries());

// Getting a value by key
console.log("Get value by key 'name':", myMap.get("name")); // John Doe

// Checking if a key exists
console.log("Has key 'age':", myMap.has("age")); // true
console.log("Has key 'gender':", myMap.has("gender")); // false

// Removing a key-value pair
myMap.remove("occupation");
console.log("After removing 'occupation':");
console.log(myMap.entries());

// Checking the length (number of key-value pairs)
console.log("Number of elements:", myMap.length());

// Retrieving all keys
console.log("Keys:", myMap.keys());

// Retrieving all values
console.log("Values:", myMap.values());

// Clearing the HashMap
myMap.clear();
console.log("After clearing:");
console.log("Number of elements:", myMap.length());
console.log("Entries:", myMap.entries());