import React from "react";
import styled from 'styled-components'
import training from "../media/154.jpg";
import castle from "../media/castle.jpg";
import my from "../media/my.jpg";
import table from "../media/the_Round_Table.jpg"


const Title = styled.h1`
font-size: 1.9em;
text-align: center;
color: rgb(96, 35, 146);
margin-bottom: 50px;

`;

const Photo = styled.div`

display: flex;
flex-wrap: wrap;
justify-content: center;
`;



const PhotoPage = () => {
    return(
        <div>
    <Title>InstaCastle</Title> 
    <Photo>
    <div> <img style= {{width:'450px', height:'370px',  margin: '13px 0px 0px 18px' }} src={training} alt="king"/>
    <p style= {{ paddingLeft: '139px',  fontSize: '20px', fontWeight: '700', color: 'red'  }}> Уххх... Хороша робота!</p></div>
    <div> <img style= {{width:'450px', height:'370px', margin: '13px 0px 0px 18px'  }} src={castle} alt="king"/>
    <p style= {{ paddingLeft: '139px', fontSize: '20px', fontWeight: '700', color: 'green'  }}> Мій дім, моя фортеця!</p></div>
    <div className="photoFirst" > <img  style= {{width:'450px', height:'370px', margin: '13px 0px 0px 18px'  }} src={my} alt="king"/>
    <p style= {{ paddingLeft: '139px', fontSize: '20px', fontWeight: '700', color: 'blue'  }}> Моє перше селфі тут</p></div>
    <div className="photoFirst" > <img style= {{width:'450px', height:'370px', margin: '13px 0px 0px 18px'  }} src={table} alt="king"/>
    <p style= {{ paddingLeft: '169px', fontSize: '20px', fontWeight: '700', color: 'orange' }}> Старі друз....</p></div>
    </Photo>
    </div>
    )
};

export default PhotoPage;