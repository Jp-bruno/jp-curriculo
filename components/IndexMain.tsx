import styled from 'styled-components';
import ArrowDown from './ArrowDown';
import BannerContainer from './BannerContainer';
import AboutMe from './AboutMe';
import AboutFrontEnd from './AboutFrontEnd';

const StyledMain = styled.main`
    display: flex;
    flex-direction: column;
`;

// const Section = styled.section`
//     margin-top: 100px;
//     height: calc(100vh - 100px);
//     padding
// `

export const Section = styled.section.attrs((props: any) => ({
    hasPadding: props.hasPadding
}))`
    margin-top: 100px;
    min-height: calc(100vh - 100px);
    padding: ${props => props.hasPadding ? '100px' : '0'};
`

export default function IndexMain() {
    return (
        <StyledMain>
            <Section>
                <BannerContainer />
                <ArrowDown />
            </Section>

            <AboutMe />

            <AboutFrontEnd />

        </StyledMain>
    )
}