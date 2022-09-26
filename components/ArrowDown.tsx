import styled from 'styled-components';
import Link from 'next/link';

const StyledWrapper = styled.a.attrs((props: { hasMargin: boolean }) => ({
    hasMargin: props.hasMargin
}))`
    display: grid;
    place-items: center;
    margin-top: ${props => props.hasMargin ? '6%' : '3%'};
    margin-bottom: ${props => props.hasMargin ? '6%' : '2%'};

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

type ArrowDownType = {
    to: string,
    hasMargin?: boolean
}

export default function ArrowDown({ to, hasMargin }: ArrowDownType) {
    return (
        <StyledWrapper hasMargin={hasMargin}>
            <Link href={to} className='a'>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src='/ArrowDown.png' alt='ir para baixo' />
            </Link>
        </StyledWrapper>
    )
}