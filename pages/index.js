import Section from "../components/section";
import {Container, Box, Heading} from "@chakra-ui/react";


const Home = () => (

    <Container className="relative z-30 py-16 flex flex-col items-center justify-center">
        <Section>
            <div className="min-w-min min-h-min p-2 text-5xlxl border border-yellow-300 text-yellow-400 ">
                Rodrigo I. Yanez Carvajal
            </div>
        </Section>
    </Container>
)

export default Home