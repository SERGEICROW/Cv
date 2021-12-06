import {useState} from "react";
import {Container} from "@chakra-ui/react";

export default function Test() {

    const [active, setActive] = useState<number>(-1);

    const toggleHandler = (id: number) => () =>
        setActive((active) => (active === id ? -1 : id));

    const Content1 = () => {
        return (
            <p>Content 1</p>
        )
    }
    const Content2 = () => {
        return (
            <p>Content 2</p>
        )
    }
    const Content3 = () => {
        return (
            <p>Content 3</p>
        )
    }

    return (
        <div>
            <div onClick={toggleHandler(1)}>
                Click to show content 1{active === 1 && <Content1/>}
            </div>
            <div onClick={toggleHandler(2)}>
                Click to show content 2{active === 2 && <Content2/>}
            </div>
            <div onClick={toggleHandler(3)}>
                Click to show content 3{active === 3 && <Content2/>}
            </div>
        </div>
    );
}