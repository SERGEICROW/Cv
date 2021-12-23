import {useState, useEffect} from "react";
import {LogoArrow} from "./logo";
import Section, {SectionLeft, SectionRight} from "./section";
import axios from 'axios';

import {Container, Heading} from "@chakra-ui/react";
import {BsPatchExclamation, BsTwitter} from "react-icons/bs";
import {FiMapPin} from "react-icons/fi";


export default function TwitterApp() {

    const [trends, setTrends] = useState([])
    const [woeid, setWoeid] = useState('1')


    useEffect(() => getTrends(), [woeid])
    //Get trends function conected to Next js API route directory
    function getTrends() {
        axios.get('/api/trends', {
            params: {
                woeid,
            },
        }).then(response => {
            console.log(response.data)
            setTrends(response.data[0].trends)
        }).catch(error => console.log(error.message))
    }
    //Geolocation function
    function handleLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                position => {
                    axios
                        .get('/api/geolocation', {
                            params: {
                                lat: position.coords.latitude,
                                long: position.coords.longitude,
                            },
                        })
                        .then(response => {
                            console.log(response.data[0].woeid)
                            setWoeid(response.data[0].woeid)
                        })
                        .catch(error => console.log(error.message))
                },
                error => {
                    console.log(error.message)
                }
            )
        } else {
            alert(`Geolocation not supported`)
        }
    }

    function listTrends() {
        return (
            <ul className={"m-5 flex flex-wrap justify-center justify-items-center content-center"}>
                {trends.map((trend, index) => {
                    return (
                        <li key={index}>
                            <div className={"text-sm bg-black border border-blue-400 px-3 py-1 rounded-full text-white font-bold flex items-center w-max m-1 cursor-pointer"}>
                                <a href={trend.url} target={"_blank"}>{trend.name}</a>
                                {trend.tweet_volume && (
                                    <span
                                        className={"hidden sm:block text-xs bg-green-500 sm:bg-green-500 text-black ml-3 px-2 py-0 rounded-full animate-pulse"}>
                                        {trend.tweet_volume}
                                    </span>
                                )}
                            </div>
                        </li>
                    )
                })}
            </ul>
        )
    }


    return (

        <Container className={"max-w-2xl m-10 h-screen sm:mt-20"}>
            <div>

                <SectionLeft><Heading className="sm:text-4xl text-2xl text-white flex items-center backdrop-blur w-max mx-5">
                    <BsTwitter className={"text-green-500 text-5xl mr-3 animate-pulse"}/>
                    Twitter Trends API
                    <div className={"hidden sm:block bg-green-500 text-black text-base ml-3 px-2 py-0 rounded-full"}>1.0.0
                    </div>
                </Heading></SectionLeft>

                <SectionRight>
                    <div className={"ml-2 sm:ml-3.5 flex items-center"}>
                        <div className={"mx-5 text-white sm:text-xl text-center backdrop-blur"}><LogoArrow/>Click on "WorldWide" to display the default country trending list
                        or click on the location icon to see trends near you! Each trend is a link to twitter respective content.
                        </div>
                    </div>
                </SectionRight>

                <Section delay={1}>
                    <div className={"flex justify-center m-5"}>
                        <select className="bg-black text-green-500 text-xl rounded-r-lg text-center border border-green-400 cursor-pointer"
                                onChange={e => setWoeid(e.target.value)}>
                            <option value={'1'}>WorldWide</option>
                            <option value={'23424975'}>UK</option>
                            <option value={'23424900'}>Mexico</option>
                            <option value={'23424775'}>Canada</option>
                            <option value={'23424977'}>US</option>
                            <option value={'2459115'}>New York, US</option>
                        </select>
                        <FiMapPin className={"ml-3 text-3xl text-white hover:text-yellow-400 cursor-pointer"} onClick={handleLocation}/>
                    </div>
                </Section>
            </div>

            <Section delay={1.5}>{listTrends()}

                <div className={"m-5"}>
                    <BsPatchExclamation className={"hidden sm:block text-yellow-400 text-2xl relative top-3 right-4"}/>
                    <p className={"text-gray-400 text-base text-center pb-6"}>Next version includes all Country's ID's stored in
                        a "Redis" DataBase Ready to be accessed by an instant search engine powered by "Algolia".
                    </p>
                </div>

            </Section>
        </Container>


    )
}