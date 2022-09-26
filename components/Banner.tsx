import { Section } from "./IndexMain";
import BannerContainer from "./BannerContainer";;
import ArrowDown from "./ArrowDown";


export default function Banner() {
    return (
        <Section>
            <BannerContainer />
            <ArrowDown to={'/#about-me'} hasMargin />
        </Section>
    )
}