import {Container} from "@chakra-ui/react";
import {BsMailbox2, BsPhoneFill} from "react-icons/bs";
import {MdCopyAll} from "react-icons/md";
import {SectionRight} from "./section";

const Contact = () => {


    return (
        <Container className="max-w-2xl sm:m-5 select-none">

            <SectionRight>
                <div className={"flex items-center space-x-2 sm:space-x-4 my-4"}>
                    <BsMailbox2 className={"text-green-500 text-3xl sm:text-5xl"}/>
                    <p className={"text-base sm:text-3xl text-green-500 bg-clip-text text-transparent " +
                    "bg-gradient-to-r from-yellow-500 via-yellow-300 to-yellow-500 animate-pulse"}>
                        rodyancar@gmail.com
                    </p>
                    <div className={"p-2 border border-green-800 rounded-full cursor-pointer"}>
                        <MdCopyAll
                            className={"text-gray-500 hover:text-gray-300 text-2xl sm:text-4xl"}
                            onClick={() => navigator.clipboard.writeText("rodyancar@gmail.com")}
                        />
                    </div>
                </div>
            </SectionRight>

            <SectionRight delay={0.5}>
                <div className={"flex items-center justify-between space-x-2 sm:space-x-4 my-4"}>
                    <BsPhoneFill className={"text-green-500 text-3xl sm:text-5xl"}/>
                    <p className={"font-mono text-xl sm:text-4xl text-green-500 bg-clip-text text-transparent " +
                    "bg-gradient-to-r from-yellow-500 via-yellow-300 to-yellow-500 animate-pulse"}>
                        56-1591-4221
                    </p>
                    <div className={"p-2 border border-green-800 rounded-full cursor-pointer"}>
                        <MdCopyAll
                            className={"text-gray-500 hover:text-gray-300 text-2xl sm:text-4xl"}
                            onClick={() => navigator.clipboard.writeText("5615914221")}
                        />
                    </div>
                </div>
            </SectionRight>

        </Container>
    )
}

export default Contact