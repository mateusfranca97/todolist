import styled from "styled-components";

type Props = {
  done: boolean;
};

export const Container = styled.div(
  ({ done }: Props) =>
    `
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 1rem;
    margin-bottom: .5rem;
    background-color: #FFF;
    height: 3rem;
    border-radius: .5rem;
    font-family: 'Poppins', sans-serif;
    font-size: .5rem;
    color: #00171F;
    background: white;

    .input{
      display: flex;
      align-items: center;
    }
    
    .check{
        height: 25px;
        width: 25px;
    }

    label{
        padding-left: .5rem;
        font-size: 1.2rem;
        text-decoration: ${done ? "line-through" : "initial"};
    }

    input[type="checkbox"] {
        appearance: none;
        background-color: ${done ? "#2DE674" : "initial"};
        margin: 0;
        width: 1.8em;
        height: 1.8em;
        border: 0.1em solid ${done ? "#2DE674" : "black" };
        border-radius: 50%;
    }

    

    .options{
      display: flex;
      justify-content: space-between;
      width: 23%;
      margin-right: 15px;

      .eraser, .pencilsimpleline{
        cursor: pointer;
        width: 3em;
        height: 3em;
      }
    }
`
);
