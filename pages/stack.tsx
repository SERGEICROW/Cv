import Section from "../components/section";
import {Container, Heading} from "@chakra-ui/react";
import {LogoArrow} from "../components/logo";
import Timeline from "../components/timeline";

const Stack = () => (

    <Container className="relative z-30 py-16 flex flex-col items-center justify-center
    border border-green-500 min-h-screen text-yellow-400">
        <Section>


            <div className="flex flex-col items-center justify-center py-2">
                <a
                    href="#"
                    className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
                >
                    <h3 className="text-2xl font-bold">Apis &rarr;</h3>
                    <p className="mt-4 text-xl">
                        Find in-depth information about Next.js features and API.
                    </p>
                </a>
            </div>
        </Section>
    </Container>
)

export default Stack