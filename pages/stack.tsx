import Section from "../components/section";
import {Container} from "@chakra-ui/react";
import TechStack from "../components/technology";

const Stack = () => (

    <Container className="relative z-30 py-16 flex flex-col items-center justify-center
    border border-green-500 min-h-screen">

        <Section>
            <div className="px-5 max-w-screen-xl">
                <TechStack/>
            </div>
        </Section>
    </Container>
)
export default Stack
