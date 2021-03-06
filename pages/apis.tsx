import {Container} from "@chakra-ui/react";
import TwitterApp from "../components/twitterTrends";


const Apis = () => (

    <Container className="relative z-30 pt-24 pb-10 flex flex-col items-center justify-center
    sm:border border-green-500 min-h-screen select-none">
        <TwitterApp/>
    </Container>

)

export default Apis