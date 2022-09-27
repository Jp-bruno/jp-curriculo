import styled from 'styled-components';
import { Section } from '../IndexMain';
import Section1 from './Section1';
import Section2 from './Section2';

const StyledContainer = styled.div`
    background-color: #222;
    letter-spacing: 2px;
    color: #ffffffdd;
    text-align: justify;
    padding: 30px 40px 30px;
    border: dashed 1px #ffffffaa;
    margin-bottom: 100px;

    h3 {
        border-bottom: solid 1px #ffffffaa;
        // border-image: linear-gradient(40deg, #ff006e, #8338ec) 100;
        padding: 10px 0 10px 10px;
        background: #ffffff10;
    }
`;

export default function AboutFrontEnd() {
    return (
        <Section hasPadding id='about-frontend'>
            <h1>Sobre Front-end</h1>

            <StyledContainer>
                <Section1 />
            </StyledContainer>

            <StyledContainer>
                <Section2 />
            </StyledContainer>
        </Section>
    )
}