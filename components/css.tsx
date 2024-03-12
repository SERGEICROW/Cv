import styled from "@emotion/styled";

//Timeline bars styling for position inside timeline
//Jetbrains
const Bar0 = styled("hr")`
  width: 20%;
  margin-left: 14%;
  height: 15px;`
//Bootcamp
const Bar2 = styled("hr")`
  width: 14%;
  margin-left: 23%;
  height: 15px;`
//Engineer
const Bar5 = styled("hr")`
  width: 75%;
  margin-left: 15%;
  height: 15px;`
//Softtek
const Bar6 = styled("hr")`
  width: 50%;
  margin-left: 3%;
  height: 15px;`

//Timeline Bar colors
export const JetBrains = ({...props}) => {
    return <Bar0 className="rounded-full border-0 cursor-pointer my-0.5
                bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 hover:animate-pulse
                transition duration-500 ease-in-out transform hover:scale-110 hover:hue-rotate-180"
                 {...props}/>
}
export const Bootcamp = ({...props}) => {
    return <Bar2 className="rounded-full border-0 cursor-pointer my-0.5
                    bg-gradient-to-r from-yellow-300 to-green-400 transition duration-500 ease-in-out
                    transform hover:hue-rotate-180 hover:scale-110 hover:animate-pulse" {...props}/>
}
export const Engineer = ({...props}) => {
    return <Bar5 className="rounded-full border-0 cursor-pointer my-0.5
                    bg-gradient-to-r from-red-800 via-red-600 to-red-900 transition duration-500
                    ease-in-out transform hover:hue-rotate-180 hover:scale-110 hover:animate-pulse"{...props}/>
}
export const Softtek = ({...props}) => {
    return <Bar6 className="rounded-full border-0 cursor-pointer my-0.5
                    bg-gradient-to-r from-green-500 via-green-300 to-blue-800 transition duration-500
                    ease-in-out transform hover:hue-rotate-180 hover:scale-110 hover:animate-pulse"{...props}/>
}