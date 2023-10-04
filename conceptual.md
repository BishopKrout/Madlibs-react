### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?
It is a JS library made by Facebook for building user interfaces. React is typically used to create single-page applications or when a component based UI is needed. It is easy to reuse code and manage states in React. Why? Code reusage and organization, creates virtual representation of UI in memory, mkaing updates easier, can be integrated with many different backend techs.
- What is Babel?
It is a JS compiler that allows for next gen JS today. It transforms newer syntax and features into a version taht can run in older and current browers. Converts JSX into regualr JS. 
- What is JSX?
JavaScript XML. Allows you to write HTML-like code in JS. No more 'React.createElement()' now const element = <h1> Hello World</h1>;
- How is a Component created in React?
They are created as either a class or functional component. 
- What are some difference between state and props?
Props: Read-only and immutable from component perspective, allow you to pass data from parent to child, equivalent to func parameters.
State: Is mutable. It represents change over time, due to user actions. It is internal to a component and defines its behavior and rendering. When state changes, the comp re-renders.
- What does "downward data flow" refer to in React?
It means that data in a React app flows from parent comps down to child comps via props. Chils comps cannot send props bacl to parent or modify props they receive. This ensures a unidirectional flow of data, which makes things more predictable.
- What is a controlled component?
It refers to a comp where the value of an input element is controlled by the state of the comp. React controls the input fields based on the state, and any change to the input is handled by a function that updates the state. 
- What is an uncontrolled component?
It does not store its input values in the state. Instead, it relies on the DOM to store the values. In React, we use 'refs' to directly interact w the DOm elements to get their values. 
- What is the purpose of the `key` prop when rendering a list of components?
The 'key' prop helps React identify which items in a list have change, are added, or are removed. It ensures efficient updates and rendering by providing stable ID for each element. 
- Why is using an array index a poor choice for a `key` prop when rendering a list of components?
It can lead to rendering issues if items in the list change order or if new items are added/removed. Without a stable 'key', React might not correctly identify individual elements, leading to bugs and slow DOM updates. 
- Describe useEffect.  What use cases is it used for in React components?
It is a hook in react that lets you perform side effects (like fetching data, settings up subscriptions, manual DOM manipulations) in functional comps. It can mimic lifecycle behaviors like 'componentDidMount', 'componentDidUpdate', and 'componentWillUnmount'.
- What does useRef do?  Does a change to a ref value cause a rerender of a component?
It returns a mutable ref object whose '.current' property can hold a reference to a DOM element or any value. Changes to the ref value do not cause comp rerender. 
- When would you use a ref? When wouldn't you use one?
Use: Accessing DOm elements directly, keeping a mutable value without triggering a rerender. 
Don't: For data that is part of the render flow(use sate instead), when you can use declarative handling provided by react.  
- What is a custom hook in React? When would you want to write one?
They are functions that allow you to use React state and other react features without writing a class. They normally start with the word 'use' (by convention). You would write one when you want to reuse logic across mulitple comps or to encapsulate complex logic, making comps cleaner and more readable. 