import {Container} from "@chakra-ui/react";
import Section from "../components/section";

const Experience = () => (

    <Container className="relative z-30 py-16 flex flex-col items-center justify-center
    border border-green-500 min-h-screen text-yellow-400">
        <Section>
        <p className="flex flex-col items-center justify-center z-30 mt-3 text-2xl">
            Welcome to my website
        </p>

        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <a
                href="#"
                className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
            >
                <h3 className="text-2xl font-bold">Experience &rarr;</h3>
                <p className="mt-4 text-xl">
                    Find in-depth information about Next.js features and API.
                </p>
            </a>
        </div>
        </Section>
    </Container>
)

export default Experience