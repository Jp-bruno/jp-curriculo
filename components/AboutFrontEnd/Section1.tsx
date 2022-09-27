import styled from 'styled-components';

const Section1Styles = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 4px;
    line-height: 1.9ch;
    scroll-margin-top: 27vh;

    p, blockquote, ul {
        padding-inline: 10px;
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

export default function Section1() {
    return (
        <Section1Styles>
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
        </Section1Styles>
    )
}