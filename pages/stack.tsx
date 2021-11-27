import Section from "../components/section";
import {Container} from "@chakra-ui/react";

const Stack = () => (

    <Container className="relative z-30 p-5 text-2xl text-yellow-400">

            <Section>


            <div className="flex flex-col items-center justify-center min-h-screen py-2">

                    <h3 className="text-2xl font-bold">Stack &rarr;</h3>
                    <p className="mt-4 text-xl">
                        Find in-depth information about Next.js features and API.
                    </p>

            </div>
        </Section>

    </Container>
)

export default Stack