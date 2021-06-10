import styled from 'styled-components';
import Styled from 'styled-components'


const Header=(props)=>{
    return(
        <Nav>
            <Logo>
                <img src = 'images/logo.svg' alt= ' disney logo'/>
            </Logo>
            <NavMenu>
                 <a href='/home'>
                     <img src= 'images/home-icon.svg' alt='home icon'/>
                 <span>Home</span>
                 </a>
                 <HoverUnderline></HoverUnderline>
            </NavMenu>
            {/* <SignIn>Login</SignIn> */}
        </Nav>
    )

} 

const Nav = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 70px;
    background-color: #090b13;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 36px  ;
    letter-spacing: 16px;
    z-index: 3;
`;

const Logo = styled.a`
    padding: 0;
    width: 80px;
    margin-top: 4px;
    max-height: 70px;
    font-size: 0;
    display: inline-block;
    img{
        width: 100%;
        display: block;

    }
    
`;

const SignIn = styled.a`
    border: 1px solid #f9f9f9;
    border-radius: 3px;
    height: 50px;
    position: fixed;
    right: 0;
    align-items: center;
`;
const NavMenu = styled.div`
    align-items: center; 
    display: flex;
    flex-flow: row nowrap;
    height: 100%;
    justify-content: center;
    position: relative;
    margin-right: auto;
    margin-left: 25px;

    a{
        display: flex;
        align-items: center;
        padding: 0 12px;

        img{
            height: 20px;
            min-width: 20px;
            width: 20px;
            z-index: auto;
        }
    }

    span{
        cursor: pointer;
        color: rgb(249, 249, 249);
        font-size: 13px;
        letter-spacing: 1.42px;
        line-height: 1.08;
        padding: 2px 0;
        white-space: nowrap;
        position: relative ; 

        &:hover{
            

        }
    }

    /* @media only screen and (max-width:768px) {
        display: none;
} */
`;

const HoverUnderline = styled.span`
    height: 2px;
    background-color: #f9f9f9;
    
    width: 100%;
`;

export default Header;