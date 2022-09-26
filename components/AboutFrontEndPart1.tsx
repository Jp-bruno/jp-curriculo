import { ReactNode, useState } from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
    width: 100%;
    border: solid 1px red;
    position: relative;
    padding: 20px;

    .title-div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 20px;
        outline: solid 2px green;
    }

    .about-front-card-text-wrapper {
        transition: transform 0.4s ease;
        transform-origin: top;
        width: 100%;
        outline: solid 1px yellow;
        position: relative;

        &.open {

            .children-wrapper {
                transform: scaleY(1);
            }

        }

        &.closed {

            .children-wrapper {
                transform: scaleY(0);
            }

        }

        .children-wrapper {
            transition: transform 0.4s ease;
            transform-origin: top;
            position: absolute;
            padding: 20px;
            background: #222;
        }
    }
`;

type AboutFrontCardType = {
    cardTitle: string,
    children: ReactNode
}

export default function AboutFrontEndCard({ cardTitle, children }: AboutFrontCardType) {
    const [isOpen, setOpen] = useState(false);

    function toggle() {
        setOpen(!isOpen)
    }
    return (
        <StyledDiv className={` ${isOpen ? 'open' : 'closed'}`}>
            <div className='title-div'>
                <h3>{cardTitle}</h3>
                <button onClick={toggle}>X</button>
            </div>
            <div className={`about-front-card-text-wrapper ${isOpen ? 'open' : 'closed'}`}>
                <div className='children-wrapper'>
                    {children}
                </div>
            </div>
        </StyledDiv>
    )
}