import Section from "../components/section";
import Bio from "../components/bio";

import {Container} from "@chakra-ui/react";



const Home = () => (

    <Container className="relative pt-16 z-30 flex flex-col items-center justify-center
    sm:border border-green-500 min-h-screen">
        <Section>
            <Bio/>
        </Section>
    </Container>
)


export default Home