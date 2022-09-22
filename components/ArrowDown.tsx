import styled from 'styled-components';
import Link from 'next/link';

const StyledWrapper = styled.a`
    display: grid;
    place-items: center;
    margin-top: 6%;
    margin-bottom: 6%;

    img {
        @keyframes up-and-down {
            from {
                transform: translateY(0%);
            }

            to {
                transform: translateY(20%);

            }
        }
        
        cursor: pointer;

        &:hover {
            animation-name: up-and-down;
            animation-duration: .5s;
            animation-iteration-count: infinite;
            animation-direction: alternate;
        }
    }
`;

export default function ArrowDown() {
    return (
        <StyledWrapper>
            <Link href={'/#about-me'} className='a'>
               {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src='/ArrowDown.png' alt='ir para baixo' />
            </Link>
        </StyledWrapper>
    )
}