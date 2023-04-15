"use strict";
(function() {
  window.addEventListener("load", init);

  let first;
  let operator;
  let second;
  let displayVal = "";
  
  function init() {
    let nums = qsa('div button');
    for (let i = 0; i < nums.length; i++) {
        nums[i].addEventListener('click', updateDisplay);
    }
    id('clear').addEventListener('click', clearDisplay);
    id('equals').addEventListener('click', parseDisplay);
  }

  function clearDisplay() {
    id('ans').textContent = '';
  }

  function updateDisplay(e) {
    id('ans').textContent += e.target.textContent;
  }

  function parseDisplay() {
    let args = id('ans').textContent.split(/\D/);
    first = args[0];
    second = args[1];
    let opsIndex = first.length;
    operator = id('ans').textContent.charAt(opsIndex);
    console.log(operator);
    let res = operate(operator, parseInt(first), parseInt(second));
    id('ans').textContent = res;
  }

  function add(a, b) {
    return a + b;
  }

  function subtract(a, b) {
    return a - b;
  }

  function multiply(a, b) {
    return a * b;
  }

  function divide(a, b) {
    if (b === 0) {
        return "Can't divide by 0!";
    } else {
        return a / b;
    }
  }

  function operate(op, a, b) {
    switch(op) {
        case "+":
            return add(a, b);
        case "-":
            return subtract(a, b);
        case "*":
            return multiply(a, b);
        case "/":
            return divide(a, b);
    }
  }

  /**
   * Helper function to get element by id
   * @param {str} id - The id of the element to retrieve
   * @return {HTMLElement} element - DOM object associated with the given ID
   */
  function id(id) {
    return document.getElementById(id);
  }

  /**
   * Helper function to get elements by selector
   * @param {str} selector - The selector for the elements to retrieve
   * @return {HTMLElement} element - first DOM object associated with
   * the given selector
   */
  function qs(selector) {
    return document.querySelector(selector);
  }

  /**
   * Helper function to get elements by selector
   * @param {str} selector - The selector for the elements to retrieve
   * @return {NodeList} - Static nodelist of DOM elements associated with
   * the given selector
   */
  function qsa(selector) {
    return document.querySelectorAll(selector);
  }

  /**
   * Helper function to generate new document elements
   * @param {str} tagName - The tag name of the element to create
   * @return {HTMLElement} element - DOM objects associated with given tag name
   */
  function gen(tagName) {
    return document.createElement(tagName);
  }

})();
