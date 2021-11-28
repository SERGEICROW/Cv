import {Container, Heading} from "@chakra-ui/react";
import Paragraph from "./containers";
import {LogoArrow} from "./logo";

const Bio = () => {
    return (
        <Container className="max-w-2xl m-5">
            <div className="flex flex-wrap justify-evenly items-center border border-yellow-50">
                <div>
                    <Heading
                        className="min-w-min min-h-min flex justify-center items-center  text-3xl  border border-yellow-300 text-yellow-400 ">
                        Rodrigo I. Yanez Carvajal
                    </Heading>
                    <Paragraph className="text-yellow-400 border border-yellow-300">
                        <LogoArrow/>
                        Full Stack developer
                    </Paragraph>
                </div>
                <div className="border border-yellow-300">
                    <img
                        className="w-44 rounded-full border border-primary border-8 border-opacity-30"
                        src="/images/profile_pic.png"
                        alt="Profile image"
                    />
                </div>
            </div>
            <div className="flex flex-wrap justify-evenly items-center border border-yellow-50">
                <div>
                    <Paragraph className="text-yellow-400 border border-yellow-300">
                        Short bio
                    </Paragraph>
                </div>
                <div className="border border-yellow-300">
                    <Paragraph className="text-yellow-400 border border-yellow-300">
                        <LogoArrow/>
                        Born in 1993 in Mexico City, studied finances, had my own bussisness and now
                        dedicated
                        Born in 1993 in Mexico City, studied finances, had my own bussisness and now
                        dedicatedBorn in 1993 in Mexico City, studied finances, had my own bussisness and now
                        dedicated
                    </Paragraph>
                </div>
            </div>




        </Container>
    )
}

export default Bio