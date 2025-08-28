# README

## Assignment Questions and Answers

### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

- *getElementById(id)* → এটি একটি নির্দিষ্ট element কে id দ্বারা খুঁজে আনে। সবসময় কেবল একটি element রিটার্ন করে।  
- *getElementsByClassName(className)* → এটি একটি HTMLCollection রিটার্ন করে যেটাতে ওই className এর সব element থাকে।  
- *querySelector(selector)* → এটি CSS selector ব্যবহার করে প্রথম যে element মেলে সেটি রিটার্ন করে। যেমন #id, .class, div।  
- *querySelectorAll(selector)* → এটি সব matching element রিটার্ন করে এবং একটি NodeList আকারে দেয়।  

---

### 2. How do you create and insert a new element into the DOM?

DOM-এ নতুন element তৈরি করার জন্য document.createElement() ব্যবহার করা হয়।  
তারপর innerHTML বা textContent দিয়ে content বসিয়ে appendChild() বা append() দিয়ে body অথবা parent element-এ যোগ করা হয়।  

```javascript
let div = document.createElement('div');
div.innerHTML = "<h2>Assalamualaikum</h2>";
document.body.appendChild(div);
