import {Container, Heading} from "@chakra-ui/react";
import {useState, useEffect} from "react";
import axios from 'axios';

// const dataEndpoint = 'https://api.twitter.com/1.1/trends/place.json?id=1'
//
// export async function getServerSideProps() {
//     const res = await fetch(dataEndpoint);
//     const data = await res.json();
//     return {
//         props: {
//             data
//         }
//     }
// }

export default function Api() {

    const [trends, setTrends] = useState([])
    const [woeid, setWoeid] = useState('1')

    useEffect(() => getTrends(), [woeid])

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

    function handleLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                position => {
                    axios
                        .get('/api/near-me', {
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


    return (

        <Container className="relative z-30 py-16 border border-green-500 min-h-screen
        w- text-white flex flex-col justify-center items-center">
            <Heading className="text-4xl text-blue-500 ">Twitter Trends</Heading>
            <select className="bg-black text-green-500 text-2xl">
                <option value={'1'}>WorldWide</option>
                <option value={'23424975'}>UK</option>
                <option value={'23424900'}>Mexico</option>
                <option value={'23424775 '}>Canada</option>
                <option value={'23424977'}>US</option>
                <option value={'2459115'}>New York, US</option>
            </select>
            <button className={"text-xl"}>Mi ubicacion</button>

        </Container>


    )
}