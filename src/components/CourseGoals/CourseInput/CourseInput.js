import React, { useState } from "react";
// import styled from "styled-components";

import Button from "../../UI/Button/Button";
import styles from "./CourseInput.module.css";

// const FormControl = styled.div`
//   margin: 0.5rem 0;

//   & label {
//     font-weight: bold;
//     display: block;
//     margin-bottom: 0.5rem;
//     color: ${(props) => (props.invalid ? "red" : "black")};
//   }

//   & input {
//     display: block;
//     width: 100%;
//     border: 1px solid ${(props) => (props.invalid ? "red" : "#ccc")};
//     font: inherit;
//     line-height: 1.5rem;
//     padding: 0 0.25rem;
//   }

//   & input:focus {
//     outline: none;
//     background: #fad0ec;
//     border-color: #8b005d;
//   }

//   // now we don't need the invalid class because we used the props in the form control component to check the validity
//   // &.invalid input {
//   //   border-color: red;
//   //   background: red;
//   // }

//   // &.invalid label {
//   //   color: red;
//   // }
// `;

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };

  // return (
  //   <form onSubmit={formSubmitHandler}>
  //     {/* <div className={`form-control ${!isValid ? "invalid" : ""}`}> */}

  //     {/* That is one way to do it */}
  //     {/* <FormControl className={!isValid && "invalid"}> */}

  //     {/* That is another way to do it
  //         so when you add
  //     */}
  //     <FormControl invalid={!isValid}>
  //       {/* This is some way to add some css dynamically which is not very recommended because inline css has the top priority */}
  //       {/* <label style={{ color: !isValid ? "red" : "black" }}>Course Goal</label> */}
  //       <label>Course Goal</label>
  //       <input type="text" onChange={goalInputChangeHandler} />
  //     </FormControl>
  //     <Button type="submit">Add Goal</Button>
  //   </form>
  // );

  return (
    <form onSubmit={formSubmitHandler}>
      {/* <div className={`form-control ${!isValid ? "invalid" : ""}`}> */}

      {/* That is one way to do it */}
      {/* <FormControl className={!isValid && "invalid"}> */}

      {/* That is another way to do it
          so when you add 
      */}
      {/* this is the syntax to write a class name that has a dash in the middle
          and that is how you make conditions
      */}
      <div
        className={`${styles["form-control"]} ${!isValid && styles.invalid}`}
      >
        {/* This is some way to add some css dynamically which is not very recommended because inline css has the top priority */}
        {/* <label style={{ color: !isValid ? "red" : "black" }}>Course Goal</label> */}
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
