import Image from 'next/image';
import styled from 'styled-components';
import { Section } from './IndexMain';

const StyledWrapper = styled.div`
    h1 {
        font-weight: 500;
        font-size: 1.5rem;
    }
`;

const ContentWrapper = styled.div`
    display: flex;
    column-gap: 20px;

    .me_card {
        flex-basis: 100%;
        padding: 20px;
        column-gap: 60px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        border-radius: 6px;
        background: #222;

        .profile_pic {
            border-radius: 7px;
        }

        ul {
            width: fit-content;
            display: flex;
            flex-direction: column;
            row-gap: 15px;
            padding: 10px 0;
        }
    }

    .more-about-me {
        flex-basis: 300%;
        border-radius: 7px;
        background: #222;
        padding: 20px 30px;
    }
`

export default function AboutMe() {
    return (
        <Section hasPadding id='about-me'>
            <StyledWrapper>
                <h1>Sobre mim</h1>

                <ContentWrapper>
                    <div className='me_card'>
                        

                        <ul>
                            <li>
                                Nome: João Pedro
                            </li>

                            <li>
                                Idade: 24 anos
                            </li>

                            <li>
                                Cidade: Rio de Janeiro - RJ
                            </li>
                        </ul>
                    </div>

                    <div className='more-about-me'>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus labore cumque repudiandae alias dolorum nihil unde,
                            perspiciatis culpa in. Nesciunt aperiam sunt est perferendis cum expedita, eos distinctio voluptate fuga.
                        </p>

                    </div>
                </ContentWrapper>

            </StyledWrapper>

        </Section>
    )
}