import {Container, Heading} from "@chakra-ui/react";
import {LogoArrow} from "./logo";

const Bio = () => {
    return (
        <Container className="max-w-2xl m-5">
            <div className="flex flex-wrap justify-evenly items-center border border-yellow-50">
                <div>
                    <Heading className="min-w-min min-h-min flex justify-center
                    items-center  text-3xl  border border-yellow-300 text-white ">
                        Rodrigo I. Yanez Carvajal
                    </Heading>
                    <p className="pl-5 text-green-500 text-xl border border-yellow-300 ">
                        <LogoArrow/>
                        Full Stack developer
                    </p>
                </div>
                <div className="border border-yellow-300">
                    <img
                        className="w-36 rounded-full border border-primary border-8 border-opacity-30"
                        src="/images/profile_pic.png"
                        alt="Profile image"
                    />
                </div>
            </div>

            <div className="flex flex-col flex-wrap border border-red-700 mt-10">
                <div>
                    <Heading className="text-white text-2xl border border-yellow-300">
                        Short bio
                    </Heading>
                </div>
                        <p className="pl-10 text-white  border border-yellow-300 ">
                            <LogoArrow/>
                            Born in 1993 in Mexico City, studied finances, had my own bussisness and now
                                dedicated
                                Born in 1993 in Mexico City, studied finances, had my own bussisness and now
                                dedicatedBorn in 1993 in Mexico City, studied finances, had my own bussisness and now
                                dedicated
                        </p>
            </div>





        </Container>
    )
}

export default Bio