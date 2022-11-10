import styled from "styled-components";
import { PropsWithChildren } from "react";
import ProjectCard from "./ProjectCard";

const StyledContainer = styled.div`
    dashed 1px #ffffffaa;
    

    h1 {
       font-size: 24px; 
    }
`;

export default function ProjectsCardsContainer({ children }: PropsWithChildren) {
    const cardsData = [
        {
            title: "E-commerce Website",
            projectUrl: "https://jp-bruno.github.io/ecommerce-website/"
        },
        {
            title: "Space Tourism",
            projectUrl: "https://jp-bruno.github.io/Space-Tourism/"
        },
        {
            title: "Easy Bank",
            projectUrl: "https://easy-bank-fawn.vercel.app/"
        },
        {
            title: "Task List",
            projectUrl: "https://jp-bruno.github.io/TaskList/"
        },
        {
            title: "Job List",
            projectUrl: "https://jp-bruno.github.io/JobList/"
        },

    ]

    return (
        <StyledContainer >
            {
                cardsData.map(({ title, projectUrl }) => <ProjectCard title={title} projectUrl={projectUrl} key={Math.random() * 1000} />)
            }
        </StyledContainer>
    )
}