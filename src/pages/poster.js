import React from "react";
import styled from 'styled-components';
import Arthur from '../media/profil_arthur.jpg';
import Hall from '../media/hall.jpg';
import Com from '../media/Com.svg';
import Down from '../media/Down.svg';
import Like from '../media/Like.svg';
import Repeat from '../media/Repeat.svg';

const Main = styled.h2`
max-width: 840px;
height: 715px;
margin: 20px auto;
background: rgb(114, 86, 202);
color: #fff;
padding: 10px 10px 10px 70px;
`;
const Post = styled.h2`

margin-top: -10px;
`
const PostHead = styled.div`
display: flex;
align-items: center;
padding-top: 10px;`;

const PhotoMain = styled.div`
width: 60px;
margin: 0 10px 0 -60px;
`;
const PostHeadName = styled.div`
font-size: 20px;
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 122.88 116.87'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%2310a64a;fill-rule:evenodd;%7D.cls-2%7Bfill:%23fff;%7D%3C/style%3E%3C/defs%3E%3Ctitle%3Everified-symbol%3C/title%3E%3Cpolygon class='cls-1' points='61.37 8.24 80.43 0 90.88 17.79 111.15 22.32 109.15 42.85 122.88 58.43 109.2 73.87 111.15 94.55 91 99 80.43 116.87 61.51 108.62 42.45 116.87 32 99.08 11.73 94.55 13.73 74.01 0 58.43 13.68 42.99 11.73 22.32 31.88 17.87 42.45 0 61.37 8.24 61.37 8.24'/%3E%3Cpath class='cls-2' d='M37.92,65c-6.07-6.53,3.25-16.26,10-10.1,2.38,2.17,5.84,5.34,8.24,7.49L74.66,39.66C81.1,33,91.27,42.78,84.91,49.48L61.67,77.2a7.13,7.13,0,0,1-9.9.44C47.83,73.89,42.05,68.5,37.92,65Z'/%3E%3C/svg%3E") right center no-repeat;
  background-size: 25px auto;
  padding-right: 30px;
  margin-right: 10px;`;

const PostHeadNick = styled.div`
  color: #3c3b3b;
  font-size: 15px;
  padding-right: 10px;`;

const PostHeadDate = styled.div`
color: #3c3b3b;
font-size: 15px;`;

const PostMainPhoto = styled.div`
margin-top: -10px;`;

const PostMainText = styled.div`
font-size: 18px;
padding-top: 10px;`;

const Icons = styled.div`
margin-top: 10px;
display: flex;
justify-content: space-evenly;`;

const PublicationsPage = () =>{
let publications = [
  {
    name: "Arthur",
    nickname: "@king",
    profile: "https://citaty.info/character/artur-pendragon",
    content: "Новий ремонт... Классс",
    image:
      "https://1.bp.blogspot.com/-rAbcY7ACfT4/X8PbJANE2CI/AAAAAAAAXF8/kB6_Aq8gPEQZNMeTKFpFZoMbelwsHPv0wCLcBGAsYHQ/s1024/%25D0%25BB%25D0%25B8%25D1%2586%25D0%25B0%25D1%2580%25D1%2581%25D1%258C%25D0%25BA%25D0%25B8%25D0%25B9%2B%25D0%25B7%25D0%25B0%25D0%25BB.jpg",
    date: "February 9",
    
  }
]
return (
  <Main>
    {publications.map((element, i)=> { 
      return (
  <Post key={i} >
    <PostHead>
      <PhotoMain>
        <img  style={{ display: 'block', width: '100%', height: '60px', borderRadius:'40%' }} src={Arthur} alt=""  />
      </PhotoMain>
      <PostHeadName>{element.name}</PostHeadName>
      <PostHeadNick>{element.nickname}</PostHeadNick>
      <PostHeadDate >{element.date}</PostHeadDate>
    </PostHead>
    <PostMainPhoto >
      <PostMainText>{element.content}</PostMainText>
      <div><img  style={{display: 'block', maxWidth: '1090px', height: '580px', borderRadius:'0', paddingTop: '10px'}} src={Hall} alt="" /></div>
    </PostMainPhoto>
    <Icons>
      <div> <img src={Com} alt="" /> </div>
      <div> <img src={Repeat} alt=""/> </div>
      <div> <img src={Like} alt=""/> </div>
      <div> <img src={Down} alt=""/> </div>
    </Icons>
  </Post>
      );
  })}
  </Main>
);
};

  export default PublicationsPage;
    
 

