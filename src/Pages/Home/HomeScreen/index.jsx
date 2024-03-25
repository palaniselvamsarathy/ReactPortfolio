import HeroSection from "../HeroSection";
import MySkills from "../MySkills";
import AboutMe from "../AboutMe";
import MyPortfolio from "../MyPortfolio";
import ContactMe from "../ContactMe";
import Footer from "../Footer";
import MyServices from "../MyServices";

export default function Home(){
    return (
        <>
            <HeroSection/>
            <AboutMe/>
            <MySkills/>
            <MyServices/>
            <MyPortfolio/>
            <ContactMe/>
            <Footer/>
        </>
    )
}
