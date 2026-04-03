//TODO
//Note: You will not be able to run parcel without first fixing these errors
// Check for ESLint errors and format with Prettier.
// This file contains a number of helper functions that create DOM elements.
// These functions help prevent code repetition.
// While the functions are mostly correct, there are some errors, the code is messy and hard to read.
// Add configuration with ESLint for rules that disallow 'let', unused variables, require a semicolon
// and at least two other rules: https://eslint.org/docs/latest/rules/
// Use ESLint to identify the errors and Prettier to format the code.

// Create a general element with specified text
const createElement = (elementType, text) => {
    const element = document.createElement(elementType);
    element.textContent = text;
    return element;
};

//Creates images with alt
const createImage = (url, alt) => {
    let img = document.createElement("img");
    img.src = url;
    console.log("alt:" + alt);
    console.log("url:");
    console.log(url);
    img.alt = alt;
    return img;
};

// Create a header element with specified text and data attribute
const createHeader = (headerType, text, dataCy) => {
    let header = document.createElement(headerType);
    header.textContent = text;
    header.setAttribute("data-cy", dataCy);
    return header;
};

// Create a button that toggles the visibility of the form
const createToggleButton = (text, element) => {
    const button = document.createElement("button");
    button.textContent = text;
    button.addEventListener("click", () => {
        element.classList.toggle("notVisible");
    });

    return button;
};

// Form Helper Functions
// Helper function to create a label element
const createLabel = (text, htmlFor) => {
    const label = document.createElement("label");
    label.textContent = text;
    label.setAttribute("for", htmlFor);
    return label;
};

// Helper function to create an input element
const createInput = (name) => {
    const input = document.createElement("input");
    input.name = name;
    input.id = name;
    return input;
};

const createSubmitButton = (value) => {
    let submit = document.createElement("input");
    submit.type = "submit";
    submit.value = value;

    return submit;
};

export {
    createElement,
    createImage,
    createHeader,
    createToggleButton,
    createLabel,
    createInput,
    createSubmitButton,
};
