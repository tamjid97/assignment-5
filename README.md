# README

## Answer to the following questions :

### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?  

- *getElementById* → Returns a specific element by its id. (Only one element)  
- *getElementsByClassName* → Returns an HTMLCollection of all elements with given class name.  
- *querySelector* → Returns the first element (with css selector or tag name) like #id, .class, div.  
- *querySelectorAll* → Returns a NodeList of all matched elements.  

---

### 2. How do you create and insert a new element into the DOM?  

```javascript
let div = document.createElement('div');
div.innerHTML = "<h1>Assalamualaikum</h1>";
document.body.appendChild(div);
