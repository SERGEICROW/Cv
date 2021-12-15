import {Container} from "@chakra-ui/react";
import TechStack from "../components/technology";
import Section from "../components/section";


const Stack = () => (
    <Container className="relative z-30 py-16 flex flex-col items-center justify-center
    sm:border border-green-500 min-h-screen">
        <div className="px-5 backdrop-blur rounded-lg">
            <Section>
                <TechStack/>
            </Section>
        </div>
    </Container>
)
export default Stack
