import styled from "styled-components";

export const Component = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .task {
    width: 80%;
    height: 3rem;
    border-radius: .5rem;
    font-size: 1.5rem;
    background-color: transparent;
    color: #fff;
    margin: 1rem 0rem 0.8rem 0rem;

    &:focus {
      outline: solid 3px #fff;
    }
  }

  button {
    width: 18%;
    height: 3rem;
    margin-top: 3px;
    color: #fff;
    background-color: #007ea7;
    border-radius: .5rem;
    border: none;
    cursor: pointer;
    transition: background-color 0.5s ease;
    &:hover {
      background-color: #00a8e8;
      transition: background-color 0.5s ease;
    }
  }
`;
