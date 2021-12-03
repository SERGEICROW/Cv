import {Container, Heading} from "@chakra-ui/react";
import Section from "../components/section";
import Test from "../components/test"


const Education = () => {

    return (

        <Container className="relative z-30 py-16 flex flex-col items-center justify-center
    border border-green-500 min-h-screen text-yellow-400">
            <Section>
                <Test/>
            </Section>
        </Container>
    )
}
export default Education