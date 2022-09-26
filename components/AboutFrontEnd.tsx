import Image from 'next/image';
import styled from 'styled-components';
import { Section } from './IndexMain';

const ContentWrapper = styled.div`
    display: flex;
    text-align: justify;
    background: #222;
    letter-spacing: 2px;
    flex-direction: column;
    padding: 30px 40px 60px;
    border-radius: 4px;
    line-height: 1.9ch;
    margin-bottom: 100px;
    scroll-margin-top: 27vh;


    h3 {
        padding-bottom: 10px;
        border-bottom: solid 1px white;
    }

    p, blockquote, ul {
        padding-inline: 20px;
    }

    ul {
        list-style-type: circle;
        margin-left: 20px;
    }

    hr {
        width: 100%;
        margin: 50px 0;
        height: 1px;
        border: 0;
        background-color: #fff;
    }

    blockquote {
        font-size: 90%;
    }

`;

export default function AboutFrontEnd() {
    return (
        <Section hasPadding id='about-frontend'>
            <h1>Sobre Front-end</h1>

            <ContentWrapper>
                <h3>O que um front-end faz?</h3>
                <p>
                    De forma resumida, o trabalho de um desenvolvedor front-end é dar vida à paginas web. Geralmente esse desenvolvedor fará isso
                    através de um design produzido por uma equipe de UX/UI, responsáveis pelo <i>feeling</i> da página.
                </p>

                <p>
                    Eu gosto de comparar o processo de construção de páginas web com o de construção de prédios. Quando tenho que explicar o que um front-end faz
                    eu geralmente digo:
                </p>

                <blockquote>
                    <i>
                        Imagine que um site é um prédio prestes a ser construído. O arquiteto aqui é representado pela a equipe de UX/UI, responsáveis pelo prospecto visual do projeto,
                        dando uma ideia de como a estrutura deve parecer e se comportar visualmente. Em seguida temos o engenheiro, representado aqui pelo engenheiro de software, ele irá ponderar
                        se o projeto é viável e como será executado, ou qual seria a melhor maneira de executá-lo com os recursos disponíveis. E então chegamos ao pedreiro, representando
                        pelo desenvolvedor front-end, o pedreiro é o profissional que irá colocar tijolo sobre tijolo, erguendo a estrutura do que em breve será o prédio (ou no nosso caso, o site).
                    </i>
                </blockquote>

                <p>
                    O front-end é o profissional que irá escrever o código que representa a estrutura não só visual como também semântica da página web, dando vida ao design
                    feito pela equipe de UX/UI tornando-o interativo e funcional.
                </p>

            </ContentWrapper>

            <ContentWrapper>
                <h3>Quais tecnologias um front-end usa?</h3>

                <p>
                    As tecnologias disponíveis hoje são incontáveis, desde as mais simples até as mais complexas, sendo um desafio constante dominá-las pois a todo momento
                    atualizações e ferramentas melhores são desenvolvidas.
                    Entretando, sabe-se que para todo desenvolvedor front-end existem três principais tecnologias a serem dominadas:
                </p>

                <ul>
                    <li>
                        JavaScript
                    </li>

                    <li>
                        CSS
                    </li>

                    <li>
                        HTML
                    </li>
                </ul>

                <p>Essas três tecnologias são a base de qualquer página web, cada uma com a sua função dentro da página.</p>

            </ContentWrapper>

            <ContentWrapper id='javascript'>
                <h3>JavaScript</h3>
                <Image src='/js-big-icon.png' layout='fixed' width={400/2} height={400/2} alt='JavaScript' />
            </ContentWrapper>

            <ContentWrapper id='css'>
                <h3>CSS3</h3>
                <Image src='/icons8-css3-400.png' layout='fixed' width={400/2} height={400/2} alt='CSS3' />
            </ContentWrapper>

            <ContentWrapper id='html'>
                <h3>HTML5</h3>
                <Image src='/icons8-html-5-400.png' layout='fixed' width={400/2} height={400/2} alt='HTML5' />
            </ContentWrapper>
        </Section>
    )
}