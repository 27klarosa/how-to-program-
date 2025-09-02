// This file shows how to use variables, arrays, objects, and classes.

/*
:::     :::     :::     :::::::::  :::::::::::     :::     :::::::::  :::        :::::::::: ::::::::
:+:     :+:   :+: :+:   :+:    :+:     :+:       :+: :+:   :+:    :+: :+:        :+:       :+:    :+:
+:+     +:+  +:+   +:+  +:+    +:+     +:+      +:+   +:+  +:+    +:+ +:+        +:+       +:+
+#+     +:+ +#++:++#++: +#++:++#:      +#+     +#++:++#++: +#++:++#+  +#+        +#++:++#  +#++:++#++
 +#+   +#+  +#+     +#+ +#+    +#+     +#+     +#+     +#+ +#+    +#+ +#+        +#+              +#+
  #+#+#+#   #+#     #+# #+#    #+#     #+#     #+#     #+# #+#    #+# #+#        #+#       #+#    #+#
    ###     ###     ### ###    ### ########### ###     ### #########  ########## ########## ########

Variables are used in every programming language. They hold all kinds of values (information).

Variables in javascript can be defined using three keywords: "let", "var", and "const".
*/

// Variables are written like this: definitionKeyword name = value. For example:
let num = 1
var letter = 'a'
const symbol = '.'

// Using the "let" keyword defines a variable that can only be used in a specific scope (function-scoped).
let var1 = 5

function scopeExample() {
    let cantBeUsed = 'Only this function can access my value.'

    console.log(cantBeUsed) // Outputs 'Only this function can access my value.'
    console.log(var1) // Outputs the number 5
}

console.log(cantBeUsed) // Variable not defined.

// You can also declare a variable using 'var'
var message = "Hello, world!"
console.log(message) // Outputs: Hello, world!

// 'var' is function-scoped, not block-scoped
if (true) {
    var test = 123
}

console.log(test) // Outputs: 123

// 'const' is special, and is also function-scoped. A value declared with 'const' cannot be reassigned.
const pi = 3.14
pi++ // This will throw an error

/*
Now for Arrays, objects, and classes. 
Arrays are lists of values. They count starting at 0. They are defined using square brackets [].
Values are separated by commas.
*/

// For example:
let fruits = ['apple', 'banana', 'cherry']
console.log(fruits[0], fruits[1], fruits[2]) // Outputs 'apple banana cherry'

/* 
Objects are collections of key-value pairs (like a dictionary).
They are defined using curly braces {}.
Keys are separated from other keys by commas.
Values are accessed using their keys.
*/

// For example:
let jackson = {
    name: 'Jackson',
    height: '5\'11"',
    age: 16
}

console.log(jackson.name, jackson.height, jackson.age) // Outputs 'Jackson 5'11" 16'

/*
Classes are recreatable, customizable objects.
They are defined with the 'Class' keyword, and are enclosed in curly brackets {}.
All classes have a constructor method that is called when an instance of the class is created.
A class refers to its properties using the 'this' keyword.
*/

// For example:
class Person {
    constructor(name, height, age) {
        this.name = name
        this.height = height
        this.age = age
    }

    introduce() {
        console.log(`Hi, I'm ${this.name}, I'm ${this.height} tall and ${this.age} years old.`)
    }
}

let ethan = new Person('Ethan', '5\'8"', 16)
ethan.introduce() // Outputs "Hi, I'm Ethan, I'm 5'8" tall and 16 years old."