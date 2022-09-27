import styled from 'styled-components';
import AboutMe from './AboutMe';
import AboutFrontEnd from './AboutFrontEnd/AboutFrontEnd';
import Banner from './Banner';

const StyledMain = styled.main`
    display: flex;
    flex-direction: column;

`;

export const Section = styled.section.attrs((props: { hasPadding: boolean }) => ({
    hasPadding: props.hasPadding
}))`
    display: flex;
    flex-direction: column;
    scroll-margin-top: 15vh;
    margin-top: 100px;
    min-height: calc(100vh - 100px);
    padding: ${props => props.hasPadding ? '20px 100px' : '0'};
`

export default function IndexMain() {
    return (
        <StyledMain>
            <Banner />
            <AboutMe />
            <AboutFrontEnd />
        </StyledMain>
    )
}