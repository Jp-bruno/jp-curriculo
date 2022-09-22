import Image from 'next/image';
import { PropsWithChildren } from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
    width: calc(100% - 10px);
    margin-inline: auto;
    padding: 1px;

    background-image: linear-gradient(40deg, #ff006e, #8338ec);
    
    // background-image: linear-gradient(40deg, red, purple, #ff006e, #8338ec, #06d6a0, #ffbe0b);
    // background-size: 1500%;

    // animation-name: backgroundMove;
    // animation-duration: 7s;
    // animation-iteration-count: infinite;
    // animation-direction: alternate;
`;

const StyledContentHolder = styled.div`
    background: black;
    padding: 50px 100px;
    margin: 1px;

    h1 {
        font-weight: 300;
        font-size: 3rem;
        text-align: center;
        letter-spacing: 5px;
        border-bottom: solid 1px white;
        width: fit-content;
        margin-inline: auto;
        padding-bottom: 30px;

        background-image: linear-gradient(40deg, red, purple, #ff006e, #8338ec, #06d6a0, #ffbe0b);
        background-size: 200%;
        
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;

        animation-name: backgroundMove;
        animation-duration: 7s;
        animation-iteration-count: infinite;
        animation-direction: alternate;
    }

    .images {
        display: flex;
        aling-items: center;
        justify-content: space-between;
        list-style-type: none;
        padding: 0;
        margin-top: 80px;

        li {
            button {
                background: 0;
                cursor: pointer;
                position: relative;
                border: 0;
                
                &::after {
                    position: absolute;
                    content: attr(data-name);
                    width: max-content;
                    padding-inline: 20px;
                    padding-top: 5px;
                    padding-bottom: 5px;
                    height: 20px;
                    bottom: -60%;
                    transform: translateX(50%) scale(0);
                    right: 50%;
                    background: black;
                    border: solid 1px white;
                    display: flex;
                    align-items: center;
                    border-radius: 3px;
                    transition: transform 0.2s ease;
                    font-size: 100%;
                }
                
                &:hover {
                    &::after {
                        transform: translateX(50%) scale(1);
                    }
                }
            }
        }
    }
`;

export default function BannerContainer({ children }: PropsWithChildren) {
    return (
        <StyledContainer>
            <StyledContentHolder>
                <h1>FRONT-END DEVELOPER</h1>
                <ul className='images'>
                    <li>
                        <button data-name='JavaScript'>
                            <Image src='/icons8-javascript-48.png' alt='JavaScript' width={48} height={48} layout={'intrinsic'} />
                        </button>
                    </li>

                    <li>
                        <button data-name='ReactJS'>
                            <Image src='/icons8-react-48.png' alt='ReactJS' width={48} height={48} layout={'intrinsic'} />
                        </button>
                    </li>

                    <li>
                        <button data-name='NextJS'>
                            <Image src='/icons8-next.js-48.png' alt='Material-UI' width={48} height={48} layout={'intrinsic'} />
                        </button>
                    </li>

                    <li>
                        <button data-name='NodeJS'>
                            <Image src='/icons8-node-js-48.png' alt='NodeJS' width={48} height={48} layout={'intrinsic'} />
                        </button>
                    </li>

                    <li>
                        <button data-name='CSS3'>
                            <Image src='/icons8-css3-48.png' alt='CSS3' width={48} height={48} layout={'intrinsic'} />
                        </button>
                    </li>

                    <li>
                        <button data-name='Sass'>
                            <Image src='/icons8-sass-48.png' alt='Sass' width={48} height={48} layout={'intrinsic'} />
                        </button>
                    </li>

                    <li>
                        <button data-name='Material-UI'>
                            <Image src='/icons8-material-ui-48.png' alt='Material-UI' width={48} height={48} layout={'intrinsic'} />
                        </button>
                    </li>
                </ul>
            </StyledContentHolder>
        </StyledContainer>
    )
}