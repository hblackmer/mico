export const REACT = [
    {
        id: 0,
        question: "What are the advantages of React?",
        answer: "",
        micoAnswer: "[See Source]",
        source: "https://da-14.com/blog/its-high-time-reactjs-ten-reasons-give-it-try",
        category: "react"
    },
    {
        id: 1,
        question: "What is JSX?",
        answer: "",
        micoAnswer: "JSX is an optional syntax extension to JavaScript that makes writing your own components much easier. It accepts HTML quoting and makes a subcomponent rendering easier.",
        source: "https://eloquentjavascript.net/05_higher_order.html",
        category: "react"
    },
    {
        id: 2,
        question: "What are the differences between functional and class components?",
        answer: "",
        micoAnswer: "[See Source]",
        source: "https://www.geeksforgeeks.org/differences-between-functional-components-and-class-components-in-react/",
        category: "react"    
    },
    {
        id: 3,
        question: "What is the virtual DOM?",
        answer: "",
        micoAnswer: "The virtual DOM (VDOM) is a programming concept where an ideal, or 'virtual', representation of a UI is kept in memory and synced with the 'real' DOM by a library such as ReactDOM.",
        source: "https://reactjs.org/docs/faq-internals.html",
        category: "react"    
    },
    {
        id: 4,
        question: "Why can’t browsers read JSX?",
        answer: "",
        micoAnswer: "Browsers can only read JavaScript objects but JSX in not a regular JavaScript object. Thus to enable a browser to read JSX, first, we need to transform JSX file into a JavaScript object using JSX transformers like Babel and then pass it to the browser.",
        source: "https://dev.to/cloud_developr/why-can-t-browsers-read-jsx-5boc",
        category: "react"    
    },
    {
        id: 5,
        question: "Explain: 'In React, everything is a component.'",
        answer: "",
        micoAnswer: "Components are the building blocks of a React application’s UI. These components split up the entire UI into small independent and reusable pieces. Then it renders each of these components independent of each other without affecting the rest of the UI.",
        source: "https://www.pluralsight.com/guides/everything-as-a-component-in-reactjs",
        category: "react"    
    },
    {
        id: 6,
        question: "What is the purpose of render() in React?",
        answer: "",
        micoAnswer: "Each React component must have a render() mandatorily. It returns a single React element which is the representation of the native DOM component. If more than one HTML element needs to be rendered, then they must be grouped together inside one enclosing tag such as <form>, <group>,<div> etc. This function must be kept pure i.e., it must return the same result each time it is invoked.",
        source: "https://www.geeksforgeeks.org/explain-the-purpose-of-render-in-reactjs/",
        category: "react"    
    },
    {
        id: 7,
        question: "What is Props?",
        answer: "",
        micoAnswer: "Props is the shorthand for Properties in React. They are read-only components which must be kept pure i.e. immutable. They are always passed down from the parent to the child components throughout the application. A child component can never send a prop back to the parent component. This help in maintaining the unidirectional data flow and are generally used to render the dynamically generated data.",
        source: "https://www.w3schools.com/react/react_props.asp",
        category: "react"    
    },
    {
        id: 8,
        question: "What is a state in React and how is it used?",
        answer: "",
        micoAnswer: "States are the heart of React components. States are the source of data and must be kept as simple as possible. Basically, states are the objects which determine components rendering and behavior. They are mutable unlike the props and create dynamic and interactive components. They are accessed via this.state().",
        source: "https://reactjs.org/docs/faq-state.html",
        category: "react"    
    },
    {
        id: 9,
        question: "How can you update the state of a component?",
        answer: "",
        micoAnswer: "State of a component can be updated using this.setState().",
        source: "https://reactjs.org/docs/faq-state.html",
        category: "react"    
    },
    {
        id: 10,
        question: "What is an event in React?",
        answer: "",
        micoAnswer: "In React, events are the triggered reactions to specific actions like mouse hover, mouse click, key press, etc. Handling these events are similar to handling events in DOM elements.",
        source: "https://www.w3schools.com/react/react_events.asp",
        category: "react"    
    },
    {
        id: 11,
        question: "What are refs in React?",
        answer: "",
        micoAnswer: "Refs is the short hand for References in React. It is an attribute which helps to store a reference to a particular React element or component, which will be returned by the components render configuration function. It is used to return references to a particular element or component returned by render(). They come in handy when we need DOM measurements or to add methods to the components.",
        source: "https://www.geeksforgeeks.org/reactjs-refs/",
        category: "react"    
    }
];