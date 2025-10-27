# 📅 Day 10: Closures & Call, Apply, Bind
🧠 Learn:

Lexical scope and how JavaScript decides variable accessibility based on where a function is defined.

Closures and how inner functions can remember variables from their outer scope even after the outer function has executed.

The this keyword and its behavior in different contexts (regular functions, arrow functions, and object methods).

Call, Apply, and Bind methods to explicitly control the this context and borrow methods from other objects.

⚙️ Application of Closure:

Closures are widely used to achieve:

Data privacy and encapsulation.

Maintaining state without using global variables.

Function factories (functions returning functions).

Memoization for improving performance and caching results.

💻 Code Practice:

Create a counter using closures to maintain a private count.

Build a memoization function to store and reuse computed results.

🔁 Revise:

Deeply understand how closures work behind the scenes and how they appear inside the Window object.
Explore these behaviors directly in the browser console to visualize scope chains and closure references.
(Refer: Namaste JavaScript by Akshay Saini for better understanding.)

🧩 Summary:

Closures are a powerful concept in JavaScript that enable data protection and memory efficiency.
When combined with call, apply, and bind, they give you full control over how and where functions execute — forming a strong foundation for mastering advanced JavaScript.
