
export default function Apis() {
    return <h6 className="text-red-700 p-20">IN DEVELOPMENT</h6>
}















// import {Container} from "@chakra-ui/react";
//
// const defaultEndpoint = 'https://rickandmortyapi.com/api/character/';
//
// export async function getServerSideProps() {
//     const res = await fetch(defaultEndpoint);
//     const data = await res.json();
//     return {
//         props: {
//             data
//         }
//     }
// }
//
// export default function Api({data}) {
//     const {results = []} = data;
//     return (
//
//
//         <Container className="relative z-30 py-16 border border-green-500 min-h-screen w- text-white flex flex-col justify-center items-center">
//
//             <ul className="grid-cols-3">
//                 {results.map(result => {
//                     const {id, name, image} = result;
//                     return (
//                         <li key={id}>
//                             <img src={image} alt="hola"/>
//                             <h3>{name}</h3>
//                         </li>
//                     )
//                 })}
//             </ul>
//         </Container>
//
//
//     )
// }