import ProjectsCardsContainer from "./ProjectsCardsContainer";
import styled from 'styled-components';

const SectionWrapper = styled.section`
    padding: 120px 100px;

`

export default function Projects() {
    return (
        <SectionWrapper id='projects'>
            <h1>Meus projetos</h1>
            <ProjectsCardsContainer />
        </SectionWrapper>
    )
}