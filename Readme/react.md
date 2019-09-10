React is a js library for building user interface.
React introduces a more efficient and flexible way of building, 
organizing and maintaining your UI code.
One of the main benefits of working with React,is that it lets you build your application's user interface by breaking it up into small reusable pieces of code called components.
let's say that you're building a book review app using only HTML and JavaScript.
You'll almost likely create the UI by combining elements like divs,spans, inputs and others.
There are sections or pieces of the UI that you will likely reuse over and over again.
While those sections are composed with HTML elements like divs, headings,paragraphs and images, each section can be thought of as a self-contained component.
React provide tools for us to create our own custom components,
then quickly compose or combine them together to build complex interactive UIs.
This means we can design, build, even test a component once and then reuse it as needed in our application.
The other big benefit is that React keeps your application's data or at state and the UI in-sync and can efficiently update you UI when data changes.
This is one of the most difficult parts of building interactive user interfaces. When building UIs with JavaScript, we often have some sort of data model. For example, we might use arrays and objects to describe our data. In the book review app for instance, reviews might be represented as an array of objects, with each object being one book reviewed.
Imagine maintaining an application with hundreds or thousands of reviews. The programming or bookkeeping needed to manually keep visual elements like comments and ratings for all reviews in-sync with their JavaScript data model, can quickly go out of control, specially as you add more and more features. So React includes clever features that remove much of the complexity around building your UI and keeping it in-sync with your application data.
============================================================================================
Both React and ReactDOM are available over a CDN. This means that the React library is hosted by a third party service which we can link to in our project using the provided URLs.

npx create-react-app playground

start to run all the dependencies you use to run and build.
Create React App was built by developers at Facebook to help save you from the time consuming setup and configuration that building a react application normally requires.
Create React App is the most common way to get up and running quickly with React.
It automatically sets up a build system, and creates the files and folders you need to get started with React.

===============================================================
And react-dom is the library for building web apps and is what lets React connect to and manipulate the dom.

react is component based and that is one of its benefits.React is only a library for creating and updating HTML elements in your UI, that's all it does. So to better understand how React creates UI. we're going to begin using the React API to create React elements.
Which are the smallest building blocks of React apps.React provides the createElement function to create and return elements.

createElement accepts three arguments that define the element you want to create.
1- The first argument is the type of argument you want to create. This is usually a string which represents an HTML element or a tag.

2- Now the second argument you pass to React.createElement is an object, containing any attribute and value you want to give the element.

3- So the third argument you pass to React.createElement, is the contents or children of the element you're creating. For instance any text that will display between the opening and closing h1 tags.
Which library lets React connect to and update the DOM? ReactDom
React create objects that describe Dom node.
===============================================
Conclusion

React cannot update and manipulate Dom directly.it can only manages what gets render to the Dom via ReactDom.render. it is job of render() to interpret the element objects and create Dom nodes out of them.