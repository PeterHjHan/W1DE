# week 1 Weekend work
* learn to use const, let and start avoiding var
* let and const are both scope-blocked


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
  