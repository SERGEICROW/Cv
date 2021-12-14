import {Container} from "@chakra-ui/react";
import Section from "./section";
import {MdCloseFullscreen, MdOutlineOpenInFull} from "react-icons/md";
import {useState} from "react";

const Modal = () => {
    const [closeButton, setCloseButton] = useState(false);
    const no = closeButton === false
    const si = closeButton === true

    return (
        <Container
            className={"absolute backdrop-blur z-40 text-yellow-400 flex flex-col justify-center items-center border border-red-700 min-w-full min-h-screen"}>
            <Section>
                <div className={" bg-black rounded-3xl border border-green-400"}>
                    <div className={"border border-green-400 w-full text-right h-0"}
                         onMouseEnter={() => setCloseButton(true)}
                         onMouseLeave={() => setCloseButton(false)}>
                        <button
                            className={si ? "border border-green-400 relative text-4xl bottom-10 left-9 bg-black rounded-md" : "hidden"}>
                                <MdCloseFullscreen/>
                        </button>
                        <button
                            className={no ? "border border-green-400 relative text-4xl bottom-10 left-9 bg-black rounded-md" : "hidden"}>
                            <MdOutlineOpenInFull/>
                        </button>
                    </div>
                    <h4 className={"m-6"}>TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST</h4>
                </div>
            </Section>
        </Container>
    )
}

export default Modal