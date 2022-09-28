/* eslint-disable react/jsx-no-target-blank */
import styled from 'styled-components';

const Section3Styles = styled.div`   
    p a {
            position: relative;
            color: #ff4f10;
            padding-bottom: 10px;
            

            &::after {
                content: '';
                position: absolute;
                width: 0%;
                height: 1px;
                background-color: white;
                bottom: 0;
                left: 0;
                transition: width 0.3s ease;
            }

            &:hover {
                &::after {
                    width: 100%;
                }
            }
    }
`;


export default function Section3() {
    return (
        <Section3Styles>
            <p>
                Agora que já nos conhecemos melhor, dê uma olhada nos <a href='https://github.com/Jp-bruno?tab=repositories' target='_blank'>meus projetos</a>.
            </p>
        </Section3Styles>
    )
}