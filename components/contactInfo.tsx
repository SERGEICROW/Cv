import {Container, Heading} from "@chakra-ui/react";
import {BsMailbox2, BsPhoneFill} from "react-icons/bs";
import {MdCopyAll} from "react-icons/md";

const Contact = () => {
    return (
        <Container className="max-w-2xl sm:m-5 select-none">

            <div className={"flex items-center space-x-2 sm:space-x-4 my-4"}>
                <BsMailbox2 className={"text-green-500 text-3xl sm:text-5xl"}/>
                <p className={"font-mono text-base sm:text-3xl text-green-500"}>rodyancar@gmail.com</p>
                <div className={"p-2 border border-green-800 rounded-full cursor-pointer"}>
                    <MdCopyAll className={"text-gray-500 hover:text-gray-300 text-2xl sm:text-4xl"}/>
                </div>
            </div>

            <div className={"flex items-center justify-between space-x-2 sm:space-x-4 my-4"}>
                <BsPhoneFill className={"text-green-500 text-3xl sm:text-5xl"}/>
                <p className={"font-mono text-base sm:text-3xl text-green-500"}>56 1591 4221</p>
                <div className={"p-2 border border-green-800 rounded-full cursor-pointer"}>
                    <MdCopyAll className={"text-gray-500 hover:text-gray-300 text-2xl sm:text-4xl"}/>
                </div>
            </div>

        </Container>
    )
}

export default Contact