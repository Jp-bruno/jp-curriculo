import styled from 'styled-components';
import { Section } from './IndexMain';

const StyledWrapper = styled.div`

`;

export default function AboutFrontEnd() {
    return (
        <Section hasPadding>
            <StyledWrapper>
                <h1>Sobre Front-end</h1>
            </StyledWrapper>
        </Section>
    )
}