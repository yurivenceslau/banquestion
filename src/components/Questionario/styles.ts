import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  background-color: whitesmoke;
  width: 90%;
  margin-top: 2.2rem;
  margin-bottom: 2.2rem;
  height: 100%;
  /* background-color: violet; */
  border-radius: 0.5rem;
  box-shadow: 3px 3px 16px 6px #aaaaaa;

  @media screen and (max-width:675px){
    width: 100%; 
    
  }
 
   

  // Colors
/* $color-1: #2ecc71;
$color-2: #3498db;
$color-3: #f1c40f;
$color-4: #e74c3c; */

/* html, body {
  height: 100%;
  width: 100%;
  margin: 0;
}

body {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #222;
} */
/* 
.custom-radios {
  
  div {
    display: inline-block;
  }

  input[type="radio"] {
    display: none;

    + label {
      color: #333;
      font-family: Arial, sans-serif;
      font-size: 14px;

      span {
        display: inline-block;
        width: 22px;
        height: 22px;
        margin: -1px 4px 0 0;
        vertical-align: middle;
        cursor: pointer;
        border-radius: 50%;
        border: 1px solid #FFFFFF;
        box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.33);
        background-repeat: no-repeat;
        background-position: center;
        text-align: center;
        /* line-height: 20px; */
        /* background-color: #767676; */
    
        /* img {
          opacity: 0;
          width: 10px;
          height: 10px;
          transition: all .3s ease;
        }
      }
    }

    &#color-1 + label span {
      background-color: #767676;
    }

    &#color-2 + label span {
      background-color:  #3498db;
    }

    &#color-3 + label span {
      background-color: #e74c3c;
    }

   #color-4 + label span {
      background-color:#e74c3c ;
    }

    &:checked + label span img {
      opacity: 1;
    }
  }
} */ 
`;


