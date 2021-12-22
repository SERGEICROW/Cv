import Image from 'next/image'

import styled from '@emotion/styled'

//Tag to handle transition
const LogoBox = styled.span`
  img {
    transition: 200ms ease;
  }

  &:hover img {
    transform: rotate(20deg);
  }
`

//Tag to handle arrow logos
const ArrowBox = styled.span`

`

//Main logo next to "About Me" in navbar
const Logo = () => {
    const doomguy = `/doomguy.gif`

    return (
        <LogoBox className="flex p-2 select-none">
            <Image src={doomguy} width={35} height={1} alt="logo"/>
            <h5 className="text-2xl sm:text-3xl hover:text-green-500 animate-pulse">
                About me...
            </h5>
        </LogoBox>
    )
}
export default Logo

//A 404 logo
export const SuperLogo = () => {
    const err = `/404_1.gif`
    return (
        <div className="sm:relative ml-96 hover:animate-spin">
            <img src={err} alt="error not found"/>
        </div>
    )
}

//A second 404 logo
export const SuperLogo3 = () => {
    const err = `/404_3.gif`
    return (
        <div className="sm:pr-60">
            <img src={err} alt="error not found"/>
        </div>
    )
}


//Main arrow logo used along website
export const LogoArrow = () => {
    const arrow = '/arrow.svg'
    return (
        <ArrowBox>
            <Image src={arrow} width={20} height={20} alt='arrow'/>
        </ArrowBox>
    )
}

//Arrow logo used in stack
export const StackArrow = () => {
    const arrow = '/arrow.svg'
    return (
        <ArrowBox className="mr-3">
            <Image src={arrow} width={25} height={25} alt='arrow'/>
        </ArrowBox>
    )
}

//Arrow used in portofio projects tag
export const ProjectArrow = () => {
    const arrow = '/arrow.svg'
    return (
        <ArrowBox className="mr-3">
            <Image src={arrow} width={40} height={40} alt='arrow'/>
        </ArrowBox>
    )
}

//ICONS IMPORTED AS STATIC IMAGES
export const PythonIcon = () => (<Image src={'/icons/python.png'} width={35} height={35} className="animate-pulse"/>)
export const JsIcon = () => (<Image src={'/icons/js.png'} width={35} height={35} className="animate-pulse"/>)
export const TypescriptIcon = () => (<Image src={'/icons/typescript.png'} width={35} height={35} className="animate-pulse"/>)
export const KotlinIcon = () => (<Image src={'/icons/Kotlin.png'} width={35} height={35} className="animate-pulse"/>)
export const JavaIcon = () => (<Image src={'/icons/java.png'} width={40} height={40} className="animate-pulse"/>)
export const ReactIcon = () => (<Image src={'/icons/react.png'} width={40} height={35} className="animate-pulse"/>)
export const TailwindIcon = () => (<Image src={'/icons/tailwind.png'} width={40} height={25} className="animate-pulse"/>)
export const HtmlIcon = () => (<Image src={'/icons/html.png'} width={35} height={35} className="animate-pulse"/>)
export const CssIcon = () => (<Image src={'/icons/css.png'} width={35} height={35} className="animate-pulse"/>)
export const ChakraIcon = () => (<Image src={'/icons/chakra.png'} width={35} height={35} className="animate-pulse"/>)
export const NextIcon = () => (<Image src={'/icons/next.png'} width={40} height={40} className="animate-pulse"/>)
export const DjangoIcon = () => (<Image src={'/icons/django.png'} width={45} height={45} className="animate-pulse"/>)
export const NodeIcon = () => (<Image src={'/icons/node.png'} width={45} height={45} className="animate-pulse"/>)
export const RestIcon = () => (<Image src={'/icons/rest.png'} width={45} height={45} className="animate-pulse"/>)
export const GraphIcon = () => (<Image src={'/icons/graph.png'} width={45} height={45} className="animate-pulse"/>)
export const DockerIcon = () => (<Image src={'/icons/docker.png'} width={45} height={35} className="animate-pulse"/>)
export const MysqlIcon = () => (<Image src={'/icons/mysql.png'} width={40} height={40} className="animate-pulse"/>)
export const SqliteIcon = () => (<Image src={'/icons/sqlite.png'} width={40} height={40} className="animate-pulse"/>)
export const MongoIcon = () => (<Image src={'/icons/mongo.png'} width={45} height={45} className="animate-pulse"/>)
export const RedisIcon = () => (<Image src={'/icons/redis.png'} width={50} height={30} className="animate-pulse"/>)
export const GitIcon = () => (<Image src={'/icons/git.png'} width={40} height={40} className="animate-pulse"/>)
export const DebianIcon = () => (<Image src={'/icons/debian.png'} width={40} height={40} className="animate-pulse"/>)
export const WindowsIcon = () => (<Image src={'/icons/windows.png'} width={40} height={40} className="animate-pulse"/>)
export const IntellIcon = () => (<Image src={'/icons/intellij.png'} width={40} height={40} className="animate-pulse"/>)
export const PyIcon = () => (<Image src={'/icons/pycharm.png'} width={40} height={40} className="animate-pulse"/>)
export const VsIcon = () => (<Image src={'/icons/vs.png'} width={35} height={35} className="animate-pulse"/>)
export const WebsIcon = () => (<Image src={'/icons/webstorm.png'} width={40} height={40} className="animate-pulse"/>)
export const JsonIcon = () => (<Image src={'/icons/json.png'} width={35} height={35} className="animate-pulse"/>)
export const XmlIcon = () => (<Image src={'/icons/xml.png'} width={40} height={40} className="animate-pulse"/>)

//ICONS IMPORTED AS SVG
export const BackArrow = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7"/>
    </svg>
)

export const IdeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9 mr-5" fill="none" viewBox="0 0 24 24"
         stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
    </svg>
)
export const FwIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9 mr-5" fill="none" viewBox="0 0 24 24"
         stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"/>
    </svg>
)
export const DbIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9 mr-5" fill="none" viewBox="0 0 24 24"
         stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"/>
    </svg>
)
export const VscIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#32c892"
         strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-9 w-9 mr-5">
        <circle cx="18" cy="18" r="3"/>
        <circle cx="6" cy="6" r="3"/>
        <path d="M6 21V9a9 9 0 0 0 9 9"/>
    </svg>
)
export const LanguagesIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9 mr-5" fill="none" viewBox="0 0 24 24"
         stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
    </svg>
)
export const OsIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9 mr-5" fill="none" viewBox="0 0 24 24"
         stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
    </svg>
)
export const BackIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"/>
    </svg>
)
export const FrontIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/>
    </svg>
)

export const ProjectsIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-12 mr-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
    </svg>
)
