# javaScriptNotes

<h2>Creating a Counter</h2>
<p>This process will be done using the DOM, which is just a fancy way of saying that we will by using the html document as an object in JS to modify it.</p>
<h4>Step One:</h4>
<p>
  First, you have to set an id in the html element (in this case, a button) that you wish to link to your JS function. In the Scrimba lesson, this is a button, and we will use the attribute <bold>onclick</bold>, setting the value to '="increment()"'.
</p>

<h4>Step Two:</h4>
<p>
Next, we go to the JS file and begin the dirty work. We first have to store the request for the html element in a "let" variable of our choosing, in this case, <bold>countEL</bold>. Here comes the confusing part, the request for the html element. This is done through 'document.getElementById("count-el")'. This is basically JavaScript telling html "hey document, get the element by its ID, "count-el". If you console.log at this point, you will get the html element in the console (best to do this to make sure there will be no bugs).
</p>

<h4>Step Three:</h4>
<p>
  Next, we of course have to set the 'count' variable as well, since we are making a counter. 'let count = 0'
</p>

<h4>Step Four:</h4>
<p>
  Here comes the function. This will essentially work in a similar way as 'let', and you can store a function(duh) using any variables you have made above it. It almost looks similar to a CSS selector:
</p>
<p>function increment() {</p>
<p>&nbsp count = count + 1</p>
<p>}</p>
<p>this alone, will not be enough however. To be able to store the number as text in the html, we also need 'countEL.innertext = count'. What this is saying is essentially 'for the countEL which I have defined above, make it display the value of 'count' in the inner text of the html tags'.</p>
<h3>Let's take a second to put that all together:<h3>
<p>let countEL = document.getElementById("count-el")</p>
<p>let count = 0</p>
<p>function increment() {</p>
<p>&nbsp count = count + 1</p>
<p>&nbsp countEL.innerText = count</p>
<p>}</p>
<p>And there we have it. That should create a simple counter. Don't forget it!</p>

<h2>FreeCodeCamp JavaScript Tutorial Notes</h2>
<h3>RPG project notable notes</h3>
<ul>
  <li>Put the link element for JavaScript at the bottome of the html, just before the closing body tag</li>
</ul>

### Difference between .getElementById and .querySelector
I believe that the differences can be attributed to something similar to `class` and `id`.
They both retrieve elements, but when you want to be specific, `.getElementById` should be used. `.queryselector` is more broad, just like applying a class to an html element. I have read that in most cases, `.getElementById` should be used.


# let, var, and const

**There is a difference between _let_, _var_, and _const_**

## let

*This needs more work later, get back to this one!*

## var

*This needs more work later, get back to this one!*

## const

*This needs more work later, get back to this one!*

## Compound Assignment

For some reason, when creating a function that has a variable that adds or subtracts from itself, we can shorten it using something calles Compound Assignment

```
function buyHealth() {
  gold = gold - 10;
  health = health + 10;
}
```
Becomes

```
function buyHealth() {
  gold -= 10;
  health += 10;
}
```

Only god knows why the "=" and "+" switch places.

And to increase a variable by just one (incrementing), we can use the special operator ``` ++ ```. In use, this would look like

```
function buyWeapon() {
  if (gold >= 30) {
    gold -= 30;
    currentWeapon++;
  }
}
```
Instead of
```
function buyWeapon() {
  if (gold >= 30) {
    gold -= 30;
    currentWeapon = currentWeapon + 1;
  }
}
```

### The push() Function

You can add items to an array without directly going to the array through the push function:

```
inventory.push(newWeapon);
```


## Scope

Scope refers to the range of which a given variable can be accessed. Even if you create a variable that already exists, as long as the second one falls within something like an `if` statement, it will only be acecssible within that `if` statement. 

Examples:
```
let num = 1;
if (num === 1) {
  let num = 2; //this num is scoped to the if statement, meaning the variable will only be affected within this statement.
  console.log(num); //expected output: 2
}
console.log(num); // expected output: 1 (the global variable)
```
Another:
```
function sellWeapon() {
  if (inventory.length > 1) {
    gold += 15:
    goldText.innerText = gold;
```

### _array_.shift() Method

Removes the 0th item in the specified array.

## Return

Return seems to be something that stipulates further an `if` statement. An `if` within an `if`, if you will.
*This one needs to be looked into further!*

## Ternary Operators
*This one needs to be looked into further!*

### Increment Decrement Shorthand

There is a fast method to incrementing/decrementing a variable.
Instead of:
```
currentWeapon += 1
```
You can write:
```
currentWeapon++
```
The same goes for decrementing:
```
currentWeapon -= 1
```
Turns into:
```
currentWeapon--
```

## "if", "else", "if else", "and" (&&), "while" and "for"
This is another doozy, strap in.

### if

### else

### if else

### and

### while

### for
`for` loops are declared with three expressions separated by semicolons. `for (a; b; c)`, where `a` is the initialization expression, `b` is the condition, and `c` is the final expression.

The initialization expression is executed only once, before the loop starts, and is often used to define and set up the loop variable. Think of it like declaring a counter to use in your loop.

