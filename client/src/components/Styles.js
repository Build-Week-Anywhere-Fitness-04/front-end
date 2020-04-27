import styled from 'styled-components';

export const Styles = styled.div`
  h1 {
    text-align: center;
    color: grey;
  }
  p {
    color: red;
  }

  form {
    display: flex;
    flex-direction: column;
    width: 360px;
    margin: 100px auto;
    border: 1px solid grey;
    padding: 10px;
    border-radius: 5px;
    

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

export const NavStyles = styled.div`
  .container {
    width: 80%;
    margin: 0 auto;
    
  }
  
  header {
    background: #55d6aa;
    height: 50px;
  }

  header::after {
    content: '';
    display: table;
    clear: both;
  }

  h1 {
    float: left;
    padding-top: 3px;
  }

  nav {
    float: right;
  }

  nav a {
    margin: 0;
    padding: 0;
    display: inline-block;
    margin-left: 35px;
    padding-top: 13px;
    color: #444444;
    text-decoration: none;
    text-transform: uppercase;
    font-size: 18px;
    font-weight: 400;

    position: relative;
  }

  nav a:hover {
    color: #000000;
  }

  nav a::before {
    content: '';
    display: block;
    height: 5px;
    width: 100%;
    background-color: #444444;
    position: absolute;
    top: 0;
    width: 0%;
    transition: all ease-in-out 250ms;
  }

  nav a:hover::before {
    width: 100%;
  }

`