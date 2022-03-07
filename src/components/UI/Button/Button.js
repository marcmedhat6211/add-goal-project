// import styled from "styled-components";

// // import "./Button.css";
// /**
//  * button is a method on the styled object
//  * and you can just add the style between the 2 backticks
//  * this will be executed as a method behind the scenes
//  * this will return a new button component
//  * this adds special class names that can't be duplicated to each component
//  */
// const Button = styled.button`
//   width: 100%;
//   font: inherit;
//   padding: 0.5rem 1.5rem;
//   border: 1px solid #8b005d;
//   color: white;
//   background: #8b005d;
//   box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
//   cursor: pointer;

//   &:focus {
//     outline: none;
//   }

//   &:hover,
//   &:active {
//     background: #ac0e77;
//     border-color: #ac0e77;
//     box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
//   }

//   // adding media queries
//   @media (min-width: 768px) {
//     width: auto;
//   }
// `;

// ANOTHER WAY OF SCOPING STYLES IS BY USING 'Css Modules'
/**
 * three steps to use css modules
 * 1) import styles from "./Button.css"; //styles can be anyname you choose
 * 2) styles is now an object that contains all the classes names in your css file, so you access your css class name by styles.button
 * 3) rename the css file to fileName.module.css
 * 4) change the import after you change the fileName
 */
import react from "react";
import styles from "./Button.module.css";

const Button = (props) => {
  return (
    <button type={props.type} className={styles.button} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
