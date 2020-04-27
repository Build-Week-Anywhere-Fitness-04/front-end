import styled from 'styled-components';

export const Styles = styled.div`
  h1 {
    text-align: center;
    color: blue;
  }
  p {
    color: red;
  }

  form {
    display: flex;
    flex-direction: column;
    width: 360px;
    margin: 100px auto;
    border: 1px solid red;
    padding: 10px;
    

    label {
      margin-top: 20px;
    }

    input, select {
      font-size: 1.2em;
    }
    .errors {
      color: red;
      font-size: .8em;
    }
    
  }

  button {
    background: green;
    padding: 10px;
    color: white;
    margin-top: 20px;
    border-radius: 5px;
    font-size: 1.2em;
  }
`