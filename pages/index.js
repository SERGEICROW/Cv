import Section from "../components/section";
import Bio from "../components/bio";



import {Container} from "@chakra-ui/react";



const Home = () => (

    <Container className="relative z-30 py-16 flex flex-col items-center justify-center
    border border-green-500 min-h-screen">
        <Section>
            <Bio/>
        </Section>
    </Container>
)

export default Home