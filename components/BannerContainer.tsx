import Image from 'next/image';
import { PropsWithChildren, useEffect } from 'react';
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
    height: 70vh;
    background: black;
    padding: 50px 100px;
    margin: 1px;
    display: flex;
    flex-direction: column;
    row-gap: 20%;

    #banner-title {
        position: relative;
        font-weight: 300;
        font-size: 3rem;
        text-align: center;
        letter-spacing: 5px;
        width: fit-content;
        margin-inline: auto;
        min-height: 58px;

        background-image: linear-gradient(40deg, red, purple, #ff006e, #8338ec, #06d6a0, #ffbe0b);
        background-size: 200%;
        
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;

        animation-name: backgroundMove;
        animation-duration: 7s;
        animation-iteration-count: infinite;
        animation-direction: alternate;

        // border-right: solid 1px white;

        &::after {
            content: '';
            height: 100%;
            position: absolute;
            border-right: solid 1px white;

            @keyframes blinks {
                0% {border-right:solid 1px white}

                50% {border-right:solid 1px white}

                100% {border-right: 0}
            }
        }

        &.blink {
            &::after {
                animation-name: blinks;
                animation-duration: 1s;
                animation-iteration-count: infinite;
            }
        }
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

export default function BannerContainer() {
    function writeOnTitle(string: string) {
        return new Promise<void>((resolve, reject) => {
            const textoArray = Array.from(string);
            const bannerTitle = document.querySelector('#banner-title') as HTMLHeadingElement;

            textoArray.forEach((element, index) => {
                setTimeout(() => {
                    if (index + 1 === string.length) {
                        console.log('ok')
                        bannerTitle.textContent += element;
                        bannerTitle.classList.add('blink')
                        setTimeout(() => { resolve() }, 4000)
                    } else {
                        bannerTitle.textContent += element;
                    }
                }, 100 * index + 1)

            })
        })
    }

    function eraseTitle() {
        return new Promise<void>((resolve, reject) => {
            const bannerTitle = document.querySelector('#banner-title') as HTMLHeadingElement;
            let bannerTitleText = bannerTitle.textContent as string;

            bannerTitle.classList.remove('blink');

            for (let i = bannerTitleText.length; i >= 0; i--) {
                setTimeout(() => {
                    if (i === 0) {
                        setTimeout(() => {
                            bannerTitle.classList.add('blink');
                            resolve()
                        }, 90 * bannerTitleText.length)
                    }

                    bannerTitle.textContent = bannerTitleText.slice(0, -1)
                    bannerTitleText = bannerTitleText.slice(0, -1)
                }, 90 * i)
            }
        })
    }

    useEffect(() => {
        (async () => {
            await writeOnTitle('FRONT-END DEVELOPER').then(async () => await eraseTitle().then(async () => await writeOnTitle('J.P. BRUNO')))
        })()
    }, [])


    return (
        <StyledContainer>
            <StyledContentHolder>
                <h1 id='banner-title'></h1>
                <ul className='images'>
                    <li>
                        <button data-name='JavaScript'>
                            <Image src='/icons8-javascript-48.png' alt='JavaScript' width={48} height={48} layout={'intrinsic'} />
                        </button>
                    </li>

                    <li>
                        <button data-name='CSS3'>
                            <Image src='/icons8-css3-48.png' alt='CSS3' width={48} height={48} layout={'intrinsic'} />
                        </button>
                    </li>

                    <li>
                        <button data-name='HTML5'>
                            <Image src='/icons8-html-5-400.png' alt='CSS3' width={48} height={48} layout={'intrinsic'} />
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