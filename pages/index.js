import Head from 'next/head'
import BackgroundVideo from "../components/backgroundVideo";
import MainComponent from "../components/mainComponent";

export default function Home() {
    return (
        <div className="bg-white">

            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            {/*<video autoPlay loop muted className="fixed z-10 w-auto min-w-full min-h-full max-w-none">*/}
            {/*    <source src="/videos/background-video.mp4" type="video/mp4"/>*/}
            {/*    Your browser does not support the video tag.*/}
            {/*</video>*/}
            <BackgroundVideo/>
            <MainComponent />



        </div>
    )
}
