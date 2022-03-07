import styled from "styled-components";

// import "./Button.css";
/**
 * button is a method on the styled object
 * and you can just add the style between the 2 backticks
 * this will be executed as a method behind the scenes
 * this will return a new button component
 * this adds special class names that can't be duplicated to each component
 */
const Button = styled.button`
  width: 100%;
  font: inherit;
  padding: 0.5rem 1.5rem;
  border: 1px solid #8b005d;
  color: white;
  background: #8b005d;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
  cursor: pointer;

  &:focus {
    outline: none;
  }

  &:hover,
  &:active {
    background: #ac0e77;
    border-color: #ac0e77;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
  }

  // adding media queries
  @media (min-width: 768px) {
    width: auto;
  }
`;

// const Button = (props) => {
//   return (
//     <button type={props.type} className="button" onClick={props.onClick}>
//       {props.children}
//     </button>
//   );
// };

export default Button;
