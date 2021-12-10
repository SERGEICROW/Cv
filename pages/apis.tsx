import {Container} from "@chakra-ui/react";



export default function Api({data}) {
    const {results = []} = data;
    return (


        <Container className="relative z-30 py-16 border border-green-500 min-h-screen w- text-white flex flex-col justify-center items-center">

            <ul className="grid-cols-3">
                {results.map(result => {
                    const {id, name, image} = result;
                    return (
                        <li key={id}>
                            <img src={image} alt="hola"/>
                            <h3>{name}</h3>
                        </li>
                    )
                })}
            </ul>
        </Container>


    )
}