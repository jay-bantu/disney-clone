import styled from 'styled-components'

const Login=(props)=>{
    return (

        <Container>
            <Content>
                <CTA>
                    <CTALogoOne src='images/cta-logo-one.svg' alt =''/>
                    <SignUp> Get The Disney Bundle</SignUp>
                    <Description>
                        Get Premium Access to Raya and the Last Dragon for and additional fee with Disney+ subscription . As of 03/26/21. the price of Disney+ and The Disney Bundle will increase by $1.
                    </Description>
                    <CTALogoTwo src ='images/cta-logo-two.png'/>
                </CTA>
                <BgImage/>
            </Content>
        </Container>

        )
}


const Container =styled.section`
    overflow:hidden;
    display:flex;
    flex-direction: column;
    text-align: center;
    height: 100vh;

`;
const Content =styled.div`
    margin-bottom: 10vw;
    width: 100%;
    position: relative;
    min-height: 100vh;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding: 80px 40px;
`;

const BgImage = styled.div`
    height: 100% ;
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat    ;
    background-image: url("/images/login-background.jpg");
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: -1;
`;

const CTA = styled.div`
   margin-bottom :2vw ;
   max-width: 650px;
   flex-wrap: wrap;
   display: flex;
   flex-direction: column;
   justify-content: center;
   margin-top: 0;
   align-items: center;
   text-align: center;
   margin-left: auto;
   margin-right: auto;
   transition-timing-function: ease-out;
   transition: opacity .2s;
   width: 100%;
`;

const CTALogoOne = styled.img`
    margin-bottom: 12px;
    max-width: 600px;
    min-height: 1px;
    display: block;
    width: 100%;
`;

const SignUp = styled.a`
    font-weight: bold;
    color: #f9f9f9;
    background-color: #0063ef;
    width: 100%;
    margin-bottom: 12px;
    letter-spacing: 1.5;
    font-size: 22px;
    border-radius: 3px;
    padding: 16.5px 0;
    border: solid transparent;
    transition: all .2s;
    cursor: pointer;

    &:hover{
        background-color: #3388ff;
    }
`;


const Description = styled.p`
    color: hsla(0, 0%, 95.3%, 1);
    font-size: 11px;
    margin: 0 0 24px;
    line-height:1.5;
    letter-spacing: 1.5px;
`;

const CTALogoTwo = styled.img`
    max-width: 600px;
    margin-bottom: 20px;
    display: inline-block;
    vertical-align: bottom;
    width: 100%;
`;


export default Login;