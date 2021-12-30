import {SectionLeft, SectionRight} from "../components/section";
import {ProjectArrow, ProjectsIcon} from "../components/logo";
import {WorkGridItems} from "../components/grids";

import Finde from '../public/images/projectImages/finde.png'
import App from '../public/images/projectImages/app.jpg'
import Ai from '../public/images/projectImages/AI.jpeg'
import {Container, Heading} from "@chakra-ui/react";

const Experience = () => (

    <Container className="relative z-30 py-16 flex flex-col items-center justify-center
    sm:border border-green-500 min-h-screen select-none">
        <div className="mb-10 max-w-2xl m-5">
            <SectionLeft><Heading className="flex items-center min-w-min min-h-min justify-start
                text-3xl text-green-400 select-none">
                <ProjectsIcon/>
                Projects
            </Heading></SectionLeft>

            <SectionRight><Container className="flex backdrop-blur">
                <div className="w-80 pl-4 mt-2 hidden sm:block">
                    <ProjectArrow/>
                </div>
                <div className="grid-cols-min sm:grid gap-4 grid-cols-2 mt-3">
                    <WorkGridItems id="finde" title="Finde" image={Finde}>
                        An e-commerce web application connected to an API from Google maps with geolocalization functions.
                    </WorkGridItems>
                    <WorkGridItems id="404" title="Snap Grid" image={App}>
                        An Android app to organize information, set custom forms and upload to private cloud.
                    </WorkGridItems>
                    <WorkGridItems id="404" title="AI Recon" image={Ai}>
                        Machine learning desktop demo to detect patterns on images and video using an Intel library, "OpenCV".
                    </WorkGridItems>
                </div>
            </Container></SectionRight>

        </div>
    </Container>


)

export default Experience