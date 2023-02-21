import React from "react";
import styled from 'styled-components'


const Main = styled.div`
margin-top: 30px;
display: flex;
height: 300px;
flex-direction: column;
align-items: center
  `;
  

const Contact = styled.div`
  width: 30%;
  margin-top: 20px;
  display: flex;
  justify-content: space-around;
  font-size: 22px;
  font-weight: 600;
  border: thick double #32a1ce;
`;



const ContactsPage = () => {
  const contacts = [
    {
      firstName: "Мудрець",
      lastName: "Мерлін",
      phone: "+380956319521",
    
    },
    {
      firstName: "Пендрагон",
      lastName: "Утер",
      phone: "+380931460123",
    
    },
    {
      firstName: "Фея",
      lastName: "Морґана ",
      phone: "+380504691254",
    },
    {
      firstName: "Поважний ",
      lastName: "Дракон",
      phone: "+380739432123",
    },
    {
      firstName: "Мій Київстар",
      phone: "+380676319521",
      
    },
  ];
  return (
    <Main>
      {contacts.map((element, i) => {
        return (
          <Contact key={i}>
            <div>
              <p>{element.firstName}</p>
              <p>{element.lastName}</p>
            </div>
            <p>{element.phone}</p>
          </Contact>
        );
      })}
    </Main>
  );
};
    
    export default ContactsPage;