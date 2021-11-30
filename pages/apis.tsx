import {Container} from "@chakra-ui/react";
import Section from "../components/section";

const Apis = () => (

    <Container className="relative z-30 p-5 text-2xl text-yellow-400">
        <Section>
        <p className="flex flex-col items-center justify-center z-30 mt-3 text-2xl">
            Welcome to my website
        </p>

        <div className="flex flex-col items-center justify-center min-h-screen py-2">
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

export default Apis