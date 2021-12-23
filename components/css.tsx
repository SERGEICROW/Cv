import styled from "@emotion/styled";

//Timeline bars styling for position inside timeline
const Bar0 = styled("hr")`
  width: 20%;
  margin-left: 75%;
  height: 15px;`
const Bar1 = styled("hr")`
  width: 29%;
  margin-left: 30%;
  height: 15px;`
const Bar2 = styled("hr")`
  width: 7%;
  margin-left: 29%;
  height: 15px;`
const Bar3 = styled("hr")`
  width: 21%;
  margin-left: 59%;
  height: 15px;`
const Bar4 = styled("hr")`
  width: 30%;
  margin-left: 5%;
  height: 15px;`
const Bar5 = styled("hr")`
  width: 15%;
  margin-left: 45%;
  height: 15px;
`

//Timeline Bar colors
export const JetBrains = ({...props}) => {
    return <Bar0 className="rounded-full border-0 cursor-pointer my-0.5
                bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 hover:animate-pulse
                transition duration-500 ease-in-out transform hover:scale-110 hover:hue-rotate-180"
                 {...props}/>
}
export const Broker = ({...props}) => {
    return <Bar1 className="rounded-full border-0 cursor-pointer my-0.5
                    bg-gradient-to-r from-blue-900 to-blue-600 transition duration-500 ease-in-out
                    transform hover:scale-110 hover:animate-pulse hover:hue-rotate-180" {...props}/>
}
export const Bootcamp = ({...props}) => {
    return <Bar2 className="rounded-full border-0 cursor-pointer my-0.5
                    bg-gradient-to-r from-yellow-300 to-green-400 transition duration-500 ease-in-out
                    transform hover:hue-rotate-180 hover:scale-110 hover:animate-pulse" {...props}/>
}
export const Pambolitos = ({...props}) => {
    return <Bar3 className="rounded-full border-0 cursor-pointer my-0.5
                bg-gradient-to-r from-yellow-500 to-yellow-500 transition duration-500 ease-in-out
                transform hover:hue-rotate-180 hover:scale-110 hover:animate-pulse" {...props}/>
}
export const Finances = ({...props}) => {
    return <Bar4 className="rounded-full border-0 cursor-pointer my-0.5
                    bg-gradient-to-r from-black via-green-700 to-green-700 transition duration-500
                    ease-in-out transform hover:hue-rotate-180 hover:scale-110 hover:animate-pulse" {...props}/>
}
export const Engineer = ({...props}) => {
    return <Bar5 className="rounded-full border-0 cursor-pointer my-0.5
                    bg-gradient-to-r from-red-800 via-red-600 to-red-900 transition duration-500
                    ease-in-out transform hover:hue-rotate-180 hover:scale-110 hover:animate-pulse"{...props}/>
}