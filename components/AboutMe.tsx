import Image from 'next/image';
import styled from 'styled-components';
import ArrowDown from './ArrowDown';
import { Section } from './IndexMain';

const ContentWrapper = styled.div`
    display: flex;
    column-gap: 20px;

    p:first-letter {
        margin-left: 2rem;
    }

    .me_card {
        flex-basis: 100%;
        padding: 20px;
        column-gap: 60px;
        display: flex;
        flex-direction: column;
        border: dashed 1px #ffffff90;
        background: #222;

        .profile_pic {
            display: flex;
            border-radius: 8px;
            overflow: hidden;
            justify-content: center;
        }

        ul {
            display: flex;
            flex-direction: column;
            row-gap: 15px;
            padding: 10px 0;
            text-align: center;
        }
    }

    .more-about-me {
        flex-basis: 300%;
        background: #222;
        border: dashed 1px #ffffff90;
        padding: 20px 30px;
        letter-spacing: .1rem;
        line-height: 2.7ch;
        
        p {
            text-align: justify;
            font-size: 18px;
            color: rgba(255,255,255,0.8);
        }

        ul {
            list-style-type: circle;
            padding: 0 20px;

            li {
                margin-top: 20px;
            }
        }
    }
`

export default function AboutMe() {
    return (
        <Section hasPadding id='about-me'>

            <h1>Sobre mim</h1>

            <ContentWrapper>
                <div className='me_card'>
                    <div className='profile_pic'>
                        <Image src='/perfil2.jpeg' alt='perfil' height={1025} width={554} layout='intrinsic' />
                    </div>

                    <ul>
                        <li>
                            João Pedro
                        </li>

                        <li>
                            24 anos
                        </li>

                        <li>
                            Rio de Janeiro - RJ
                        </li>
                    </ul>
                </div>

                <div className='more-about-me'>
                    <h3>Ola, me chamo João 😁</h3>

                    <p>
                        Tenho 24 anos de idade e sou desenvolvedor Front-end. Foram muitas fases, muitos trabalhos diferentes e experiências de vida
                        que me transformaram em quem sou hoje.
                    </p>

                    <p>
                        Nasci e cresci na zona norte do Rio de Janeiro. Durante esse processo de amadurecimento tive muitos desafios e espectativas quanto
                        ao meu futuro. Desde os meus 14 anos eu já queria muito um trabalho, queria ter a sensação de ter algo meu, conquistado com o meu esforço,
                        mas meus pais não me apoiaram em arrumar um trabalho tão cedo e me orientaram a focar nos estudos e, como solução para as duas partes, me colocaram
                        em um colégio com cursos técnicos em várias áreas de profissão. A minha área de escolha na época foi Química porque sempre fui curioso, queria saber
                        como as coisas são feitas, por que se comportam do jeito que se comportam e etc, eu adorava questionamentos e reflexões filosóficas sobre o universo e química
                        era exatamente o que eu procurava porque não se mantinha apenas no mundo das ideias, as aulas práticas em laboratório eram difíceis mas incríveis, observar 
                        o comportamento e as características de uma amostra e como se aplicavam na vida real me deixava extremamente empolgado.
                    </p>

                    <p>
                        Quando finalmente terminei o ensino médio fui em busca de um estágio. Depois de meses atrás do estágio e duas tentativas de 
                        cursar química na faculdade acabei deixando a ideia de lado para seguir com algo um pouco menos ousado (por que fazer um curso com
                        Cálculo no currículo é ousadia, na minha opinião).
                    </p>

                    <p>
                        A partir daí tive vários trabalhos em busca de algo que pudesse ser a profissão ideal para mim. Só para listar alguns:
                    </p>

                    <ul>
                        <li>
                            DJ/Técnico de som - Eu era responsável por tocar música quando nenhum artista estivesse se apresentando, e quando tivesse
                            eu tinha que montar o palco, microfonar os instrumentos, ligar tudo na mesa de som e fazer a mixagem, além de receber
                            os músicos e prestar assistência à eles. Foi um trabalho divertido.
                        </li>

                        <li>
                            Estoquista - Nesse trabalho eu fui jovem aprendiz de um restaurante, não tinha muita coisa de interessante e muitas vezes não tinha
                            nenhum trabalho a ser feito, acabei saindo pois não me interessou, não queria seguir a carreira.
                        </li>

                        <li>
                            Transcritor - Até mesmo hoje em dia pego alguns trabalhos de transcrição, geralmente são áudios de tamanhos variados. Já transcrevi 
                            áudios de diversos tipos: entrevistas, diálogos, eventos, discursos e aulas. Também já legendei vídeos com o áudio em Inglês para legendas em
                            Português para a Khan Academy.
                        </li>

                        <li>
                            Passeador de cães - Trabalhar com cães é incrível, são animais fantásticos, e eu sempre gostei muito de animais em geral, então isso já era um extra.
                            Minha experiência como passeador de cães foi ótima, conheci muitas pessoas, virei treinador de passeadores e depois adestrador.
                        </li>

                        <li>
                            Adestrador de cães - Basicamente a evolução do trabalho anterior. O passeio é parte do adestramento, então acho que é natural que todo passeador se torne
                            adestrador mais cedo ou mais tarde. Como adestrador eu treinei muitas pessoas (para serem passeadores) e acabei criando uma rede de contatos para fornecer
                            o serviço de passeio com cães, todos treinados por mim.
                        </li>
                    </ul>

                </div>
            </ContentWrapper>
            <ArrowDown to='#about-frontend' hasMargin />
        </Section>
    )
}