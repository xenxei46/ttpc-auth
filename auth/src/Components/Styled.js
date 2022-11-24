import styled from 'styled-components'

import background from '../assets/user.jpg';

import { Link } from 'react-router-dom';

export const colors = {
    primary: "#fffff",
    theme: "#BE185D",
    light1: "#F3F4F6",
    light2: "#E5E7EB",
    dark1: "#1F2937",
    dark2: "#4B5563",
    dark3: "#9CA3AF",
    red: "#DC2626"
}



//styled components

export const StyledContainer = styled.div`
    margin: 0;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(0deg, rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${background});
    background-size: cover;
    background-attachement: fixed;
`;

//Home
export const StyledTitle = styled.h2`
font-size: ${(props) => props.size}px;
text-align: center;
color: ${(props) => props.color ? props.color : colors.primary 
 }
 padding: 5px;
 margin-bottom: 20px;
`

export const StyledSubTitle = styled.p `
    font-size: ${(props) => props.size}px;
    text-align: center;
    color: ${(props) => props.color ? props.color : colors.primary 
    }
    padding: 5px;
    margin-bottom: 20px;
`;

export const Avatar = styled.div`
width: 85px;
height: 85px;
border-radius: 50px;
background-image: url(${props => props.image});
background-size: cover;
background-position: center;
margin: auto;    
`

export const StyledButton = styled.button`
    padding: 10px;
    width: 150px;
    background-color: transparent;
    font-size: 16px;
    border: 3px solid ${colors.theme};
    color: #fffff;
    border-radius: 25px;
    text-decoration: none;
    text-align-center;
    display: flex;
    justify-content: center;
    
    &:hover {
        background-color: ${colors.theme};
        color: ${colors.primary}
        cursor: pointer;
        transistion: ease-in-out 0.3s;
        color: ${colors.light1};
    }`
export const ButtonGroup = styled.div `
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    margin-top: 25px;
  `   
//Input
export const StyledTextInput = styled.input `
    width: 200px;
    padding: 5px;
    padding-left: 50px;
    font-size: 13px;
    letter-spacing: 1px;
    background-color: ${colors.light1};
    color: ${colors.dark1};
    border: 0;
    display: block;
    margin: 15px auto 10px auto;
    transisition: ease-in-out 0.3s;

    &:focus {
        background-color: ${colors.dark1}; 
        color: ${colors.light1};
        border: 1px solid ${colors.theme};;
    }
;
`
export const StyledLabel = styled.p`
text-align: left;
font-size: 10px;
font-weight: bold;
margin-top: 40px;
color: ${colors.theme}
`;

export const StyledFormArea = styled.div`
 background-color: ${props => props.bg || colors.light2};
 text-align: center;
 padding: 20px 55px;
`;

// export const StyledFormButton = styled.buttton`
// padding: 10px;
//     width: 150px;
//     background-color: transparent;
//     font-size: 16px;
//     border: 2px solid ${colors.theme};
//     border-radius: 25px;
//     color: ${colors.theme}
//     transistion: ease-in-out 0.3s;     
//     &:hover {
//         background-color: ${colors.theme};
//         color: ${colors.primary}
//         cursor: pointer;
//         color: #000000;
//     }
// `

//icons 
export const StyledIcon = styled.p`
color: ${colors.dark1};
position: absolute;
margin: -2px 3%;
font-size: 15px;
top: 35px;
${(props) => props.right && `right: 15px;`};
${(props) => props.left && `left: 15px;`}

&hover{
 color: ${colors.light1}

}
`;

export const ExtraText = styled.p`
font-size: 10px;
padding: 2px;
margin-top: 10px;
color: black;
`;

export const TextLink = styled(Link)`
    color: palevioletred;
    transition: ease-in-out 0.3s;
    text-decoration: none;
    cursor: pointer;
`








// //styled components
// export const StyledContainer = styled.div`
//     margin: 0;
//     min-height: 100vh;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     background: linear-gradient(0deg, rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${background});
//     background-size: cover;
//     background-attachement: fixed;
// `;

// //Home
// export const StyledTitle = styled.h2`
// font-size: ${(props) => props.size}px;
// text-align: center;
// color: ${(props) => props.color ? props.color : colors.primary 
//  }
//  padding: 5px;
//  margin-bottom: 20px;
// `
// export const StyledSubTitle = styled.p `
//     font-size: ${(props) => props.size}px;
//     text-align: center;
//     color: ${(props) => props.color ? props.color : colors.primary 
//     }
//     padding: 5px;
//     margin-bottom: 20px;
// `;
// export const Avatar = styled.div`
// width: 85px;
// height: 85px;
// border-radius: 50px;
// background-image: url(${props => props.image});
// background-size: cover;
// background-position: center;
// margin: auto;    
// `
// export const StyledButton = styled.button`
//     padding: 10px;
//     width: 150px;
//     background-color: transparent;
//     font-size: 16px;
//     border: 3px solid ${colors.theme};
//     color: #fffff;
//     border-radius: 25px;
//     text-decoration: none;
//     text-align-center;
//     display: flex;
//     justify-content: center;
    
//     &:hover {
//         background-color: ${colors.theme};
//         color: ${colors.primary}
//         cursor: pointer;
//         transistion: ease-in-out 0.3s;
//         color: ${colors.light1};
//     }`
// export const ButtonGroup = styled.div `
//     display: flex;
//     justify-content: space-around;
//     flex-direction: row;
//     // margin-top: 30px;
//   `   
// //Input
// export const StyledTextInput = styled.input `
//     width: 100px;
//     padding: 10px;
//     padding-left: 60px;
//     font-size: 10px;
//     letter-spacing: 1px;
//     background-color: ${colors.light1};
//     color: ${colors.dark1};
//     border: 0;
//     display: block;
//     margin: 40px auto -30px auto;
//     transisition: ease-in-out 0.3s;

//     &:focus {
//         background-color: ${colors.dark1}; 
//         color: ${colors.light1};
//         border: 1px solid ${colors.theme};;
//     }
// ;
// `
// export const StyledLabel = styled.p`
// text-align: left;
// font-size: 10px;
// font-weight: bold;
// margin: 60px auto -30px auto;
// color: ${colors.theme}
// `;

// export const StyledFormArea = styled.div`
//  background-color: ${props => props.bg || colors.light2};
//  text-align: center;
//  padding: 20px 50px;
// `;

// // export const StyledFormButton = styled.buttton`
// // padding: 10px;
// //     width: 150px;
// //     background-color: transparent;
// //     font-size: 16px;
// //     border: 2px solid ${colors.theme};
// //     border-radius: 25px;
// //     color: ${colors.theme}
// //     transistion: ease-in-out 0.3s;     
// //     &:hover {
// //         background-color: ${colors.theme};
// //         color: ${colors.primary}
// //         cursor: pointer;
// //         color: #000000;
// //     }
// // `

// //icons 
// export const StyledIcon = styled.p`
// color: ${colors.dark1};
// position: absolute;
// margin: -5px 3%;
// font-size: 15px;
// top: 35px;
// ${(props) => props.right && `right: 15px;`};
// ${(props) => props.left && `left: 15px;`}

// &hover{
//  color: ${colors.light1}
// }
// `;

// export const ExtraText = styled.p`
// font-size: 10px;
// padding: 2px;
// margin-top: 10px;
// padding: 2px;
// color: ${(props) => (props.color? props.color : colors.dark2)}
// `;
// export const TextLink = styled(Link)`
//     color: palevioletred;
//     transition: ease-in-out 0.3s;
//     text-decoration: none;
//     cursor: pointer;
//     font-size: 12px;
// `
// // export const ErrorMsg = styled.div`

// //     font-size: 11px;
// //     color: #FF0000;
// //     margin-top: -5px;
// //     margin-bottom: 10px;
// //     text-align: left;

// // `




