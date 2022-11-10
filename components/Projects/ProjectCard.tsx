import Image from 'next/image';
import styled from 'styled-components';

const StyledCard = styled.div`
    border: dashed 1px #ffffffaa;
    display: flex;
    
    a {
        padding: 5px 0 5px 20px;
        flex: 1;
    }

    &:hover {
        background-color: rgba(255,255,255, 0.06);
    }
`;

type ProjectCardProps = {
    title: string,
    projectUrl: string,
    // previewImg: string
}

export default function ProjectCard({ title, projectUrl /*, previewImg*/ }: ProjectCardProps) {
    return (
        <StyledCard>
            <a href={projectUrl} target="_blank" rel="noreferrer">
                {/* <Image src={previewImg} alt={title} layout='intrinsic'/> */}
                <h3>
                    {title}
                </h3>
            </a>
        </StyledCard>
    )
}