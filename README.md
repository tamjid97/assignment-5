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

```javascript
let div = document.createElement('div')
div.innerHTML = "Assalamualaikum"
document.body.appendChild(div)
