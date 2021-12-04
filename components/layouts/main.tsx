import Head from 'next/head'
import Navbar from "../navbar"
import BackgroundVideo from "../backgroundVideo";
import Footer from "../footer";
import {background} from "@chakra-ui/react";


// import Footer from '../footer'


const Main = ({children, router}) => {
    return (
        <div>
            <Head>
                <title>Rodrigo's - Homepage</title>
                <link rel="icon" href="/cv.jpg"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <meta name="description" content="Rodrigo's homepage"/>
                <meta name="author" content="Rodrigo Yanez"/>
                <meta property="og:site_name" content="Rodrigo Yanez's Homepage"/>
                <meta property="og:type" content="website"/>
                <meta property="og:image" content="/card.png"/>
            </Head>
            <BackgroundVideo/>
            <Navbar/>
            {children}
            <Footer/>
        </div>
    )
}

export default Main