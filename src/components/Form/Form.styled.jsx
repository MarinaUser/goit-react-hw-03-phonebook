import styled from 'styled-components';


export const FormContact = styled.form`
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 300px;
  border: 2px solid gray;
  border-radius: 10px;
  margin: 0 auto;
  box-shadow: 0px 5px 10px 0px rgba(29, 29, 29, 0.5);

`;

export const FormLabel = styled.label ` 

  display: block;
  text-align: center;
  font-weight: 800;
  
 `;

export const FormInput = styled.input ` 

  display: block;
  margin-top: 20px;
  margin-bottom: 20px;
  height: 30px;
  width: 200px;

 `;

export const AddBtn = styled.button ` 

  padding: 8px;
  width: 150px;
  height: 35px;
  border: none;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  background-color: lightsalmon;
  color: black;
  font-size: 16px;
  box-shadow: 0px 5px 10px 0px rgba(29, 29, 29, 0.5);
  cursor: pointer;

 `;


