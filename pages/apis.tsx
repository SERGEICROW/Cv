import {Container} from "@chakra-ui/react";
import TwitterApp from "../components/twitterTrends";


const Apis = () => (

    <Container className="relative z-30 py-16 flex flex-col items-center justify-center
    border border-green-500 min-h-screen select-none">
        <TwitterApp/>
    </Container>

)

export default Apis