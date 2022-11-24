// import { StyleTitle, StyledSubTitle } from "styled-components";
import { StyledTitle, StyledSubTitle, Avatar, StyledButton,ButtonGroup,TextLink } from "../Components/Styled";
import {Link} from 'react-router-dom';

//Logo
import Logo from "./../assets/logo.png";

const Home = () => {
    return (
        <div>
           <div style={{
            position: "absolute",
            top: 0,
            left: 0,
            backgroundColor: "transparent",
            width: "100%",
            // padding: "15px",
            display: "flex",
            justifyContent: "flex-start",
           }}>
            <Avatar image={Logo} />
           </div>
           <StyledTitle size={65}>
                Welcome to Hi-Tech
           </StyledTitle>
           <StyledSubTitle size={27}>
                Feel free to explore our page
           </StyledSubTitle>
           <ButtonGroup>
                <StyledButton>
                    <Link to="login">Login</Link>
               </StyledButton>
                <StyledButton>
                    <Link to="signup">Sign up</Link>
                    </StyledButton>
           </ButtonGroup>
        </div>
    )
}

export default Home;