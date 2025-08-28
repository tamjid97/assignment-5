# README

Answer to the following questions :

*** What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?  
All difference :

- getElementById = Returns a specific element by its id. (Only one element)  
- getElementsByClassName = Returns an HTMLCollection of all elements with given class name.  
- querySelector = Returns the first element (with css selector or tags name) like ( # , . , <> )  
- querySelectorAll = Returns a nodelist of all element.  

---

*** How do you create and insert a new element into the DOM?

# 📝 JavaScript DOM & Event Handling Notes

This README contains important notes about **DOM manipulation** and **event handling** in JavaScript.  
All answers are written clearly with examples to help understand concepts practically.

---

## 1️⃣ Creating and Inserting a New Element into the DOM

You can create a new element using `document.createElement`, set its content, and insert it into the DOM.

```javascript
// Create a new div element
let div = document.createElement('div');

// Set content
div.innerHTML = "Assalamualaikum";

// Insert into the DOM
document.body.appendChild(div);

