# week 1 Weekend work
* learn to use const, let and start avoiding var
* let and const are both scope-blocked

# CLEAN CODING
### Object
  * don't use the followings for creating objects;
    * const obj = new Object();
    * const obj = {};
  * Use Computed property names
  * Use object method shorthand
  ```js
  const atom = {
    value:1, 

    addValue(value) {
      return atom.value + value;
    },
  };
  ```
  * Use shortened versions when assigning variables to an object and put them on top of the object for easier read
    ```js
    const name = "Peter";

    var person = {
      name,
    }

    //NOT
    ver person1 = {
      name: name,
    }
    ```
  * Only put quotes with invalid identifiers
    * var person = { name, age, 'idontknow',}
  * Use Object.prototype as the syntax instead of just Object.______ for functions that have the "prototype" as optional
  * Don't use the Object.assign property
    ```js
        // very bad
    const original = { a: 1, b: 2 };
    const copy = Object.assign(original, { c: 3 }); // this mutates `original` ಠ_ಠ
    delete copy.a; // so does this

    // bad
    const original = { a: 1, b: 2 };
    const copy = Object.assign({}, original, { c: 3 }); // copy => { a: 1, b: 2, c: 3 }

    // good
    const original = { a: 1, b: 2 };
    const copy = { ...original, c: 3 }; // copy => { a: 1, b: 2, c: 3 }

    const { a, ...noA } = copy; // noA => { b: 2, c: 3 }
    ```
### Arrays
  * use [...array] to copy arrays
  * assign arrays with cosnt array = []; not the new Array();
  * to convert an iterable object to an array, use...
  * to convert an array-like object to an array, use from.
    * Notice that an "aray-like object" are objects has INDEXES as keys and a length variable set;
      * the length value can be changed to truncate it at a certain position
        * i.e, underneath, if length = 2, only will print out foo, bar    and NOT baz.
  ```js 
  const arrLike = { 0: 'foo', 1: 'bar', 2: 'baz', length: 3 };

  // bad
  const arr = Array.prototype.slice.call(arrLike);

  // good
  const arr = Array.from(arrLike);
  ```
  * Array.from() = method creates a new, shallow-copied Array instance from an array-like or iterable object.

    ```js
    console.log(Array.from('foo'));
    // expected output: Array ["f", "o", "o"]

    console.log(Array.from([1, 2, 3], x => x + x));
    // expected output: Array [2, 4, 6]
    ``` 
  * Array.map creates a new arry with a certain condition of the function
    * syntax = Array.map(element => algorithms)
      * e.g. Array.map(x => x * 2);
    * If a variable is not assigned to the map function, after executing the map function, the original array will NOT be stored in memory
  * for conditional statements, not always necessary to create an "else" if it's at the end of a function
  * if going to use link breaks for an Array, use line breaks for each values
    ```js
    const array = [
      1,
      2,
      3,
    ]
    ```
### Object Destructing
  * Using object destructing when accessing and using multiple prorperties of an OBJECT
  ```js
  // bad
  function getFullName(user) {
    const firstName = user.firstName;
    const lastName = user.lastName;

    return `${firstName} ${lastName}`;
  }

  // good
  function getFullName(user) {
    const { firstName, lastName } = user;
    return `${firstName} ${lastName}`;
  }

  // best
  function getFullName({ firstName, lastName }) {
    return `${firstName} ${lastName}`;
  }
  ```
  * Use array destructing
    * the bottom code's first will return 1, and second will return 2;
  ```js
  const arr = [1, 2, 3, 4];

  // bad
  const first = arr[0];
  const second = arr[1];

  // good
  const [first, second] = arr;
  ```

### String
  * use single quotes;
  * do not break strings because they are too long
  * when buildling strings, use the $ function notation
    * NOTE: the "good" version uses ` (the ~ button) and not the actual quote ';
  ```js 
    // bad
  function sayHi(name) {
    return 'How are you, ' + name + '?';
  }

  // bad
  function sayHi(name) {
    return ['How are you, ', name, '?'].join();
  }

  // bad
  function sayHi(name) {
    return `How are you, ${ name }?`;
  }

  // good
  function sayHi(name) {
    return `How are you, ${name}?`;
  }
  ```
  * NEVER use eval();

### Functions
  * Wrap immediately invoked function expressions in parentheses
    * def of iife: an anonymous function that calls itself as it is being delcared
    * syntax (function{})();
    ```js
    (function () {
      console.log('Welcome to the Internet. Please follow me.');
    }());
    ```
  * do NOT write functions in a non-function block (if, while, for etc.); create a varable with the function and call the function in the non-function block
  * NEVER name an argument as "arguments" because it will override it with the actual global arguments
  * NEVER mutate, reassign parameters within a function
  * functinons with various arguments should be noted with each line indented
  ```js
  function foo(
    bar,
    baz,
    quux,
  ) {
    // ...
  }
  ```

# WHAT IS THE HTTP AND INTERNET AND OTHER RELATED THINGS
### Common sense
  * WHAT do you want to ACCOMPLISH
  * HOW do you want to do it?
  * WHAT tools do you need? 
  * when buildling a website, find a good balance of too many or little internal links; 


# File I/O
  * requires npm fs
  * can be synchronus or asynchronus
    * by default, sychronus is enabled
    * BEST PRACTICE: have it asynchronus
      * to enable asynchronus, the LAST parameter, will be taken as a cb must be submitted, 
        * the first argument of the cb function is the one that gives the error message; 
      ```js 
      fs.writeFile(filePath, fileData, function(err) {
        if (err) {
          throw err;
        }
        console.log("Successfully wrote to", filePath);
      });
      ```

  # UTF - 8
  * [Best Video to Summarize](https://www.youtube.com/watch?v=MijmeoH9LT4)
  * best practice: reference it to UTF-8 on all websites as the first head line in html;

  # Streams in Node.js
  * allow to read or write data in a continous way by sending data in chunks
  * readable and writable
  * [read this node](http://www.tutorialspoint.com/nodejs/nodejs_streams.htm)