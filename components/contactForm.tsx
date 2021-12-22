import {useState} from "react";
import Section, {SectionRight} from "./section";
import Contact from "./contactInfo";

import {Container, Heading} from "@chakra-ui/react";
import {FaAsterisk, FaBuilding, FaRegEye} from "react-icons/fa";
import {RiMailStarFill} from "react-icons/ri";



const Form = ({formId, recruitForm}) => {
    const contentType = 'application/json'
    //Handle errors hook
    const [errors, setErrors] = useState({})
    //Messages hook
    const [message, setMessage] = useState(false)
    //Displays form and info hooks
    const [formDisplay, setFormDisplay] = useState(true)
    const [infoDisplay, setInfoDisplay] = useState(false)

    //Creates form with values
    const [form, setForm] = useState({
        name: recruitForm.name,
        mail: recruitForm.mail,
        comment: recruitForm.comment,
    })
    //Adds new entry to MongoDb database
    const postData = async (form) => {
        try {
            const res = await fetch('api/dataIndex', {
                method: 'POST',
                headers: {
                    Accept: contentType,
                    'Content-Type': contentType,
                },
                body: JSON.stringify(form),
            })
            console.log('done')
            if (!res.ok) {
                // @ts-ignore
                throw new Error(res.status)
            }
        } catch (error) {
            console.log('Failed to send data')
        }
    }

    const handleChange = (e) => {
        const target = e.target
        const value = target.value
        const name = target.name

        setForm({
            ...form,
            [name]: value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const errs = formValidate()
        if (Object.keys(errs).length === 0) {
            postData(form)
            setFormDisplay(false)
            setInfoDisplay(true)
        } else {
            setMessage(true)
        }
    }

    //Makes sure info is valid
    const formValidate = () => {
        let err = {}
        if (!form.name) { // @ts-ignore
            err.name = 'Name is required'
        }
        if (!form.mail) { // @ts-ignore
            err.mail = 'Recruiter mail is required'
        }
        return err
    }

    return (
        <>
            {formDisplay && <Container>
              <form
                id={formId}
                action={""}
                className={"flex flex-col text-black gap-4 m-5 items-center justify-center"}>
                <Heading className={"text-green-300 text-justify w-fit sm:w-72 sm:text-xl"}>
                  Hi! please help me keep track of the companies interested on my profile for my Database!
                </Heading>
                <div className={"flex items-center"}>
                  <FaBuilding className={"text-green-500 text-4xl animate-pulse"}/>
                  <FaAsterisk className={"relative left-2 bottom-4 text-green-500 text-xl animate-spin-slow"}/>
                  <input
                    className={"mt-1 p-1 bg-black text-white border shadow-sm border-green-300 placeholder-gray-400 focus:outline-none " +
                    "focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-xl"}
                    type={"text"}
                    maxLength={20}
                    name={"name"}
                    value={form.name}
                    placeholder={"Company name..."}
                    onChange={handleChange}
                    required
                  /></div>
                <div className={"flex items-center"}>
                  <RiMailStarFill className={"text-green-500 text-4xl animate-pulse"}/>
                  <FaAsterisk className={"relative left-2 bottom-4 text-green-500 text-xl animate-spin-slow"}/>
                  <input
                    className={"mt-1 p-1 bg-black text-white border shadow-sm border-green-300 placeholder-gray-400 focus:outline-none " +
                    "focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-xl"}
                    type={"email"}
                    maxLength={40}
                    name={"mail"}
                    value={form.mail}
                    placeholder={"Recruiter email..."}
                    onChange={handleChange}
                    required
                  /></div>
                <textarea
                  className={"mt-1 p-1 bg-black text-white border shadow-sm border-green-300 placeholder-gray-400 focus:outline-none " +
                  "focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-xl resize-none"}
                  name={"comment"}
                  maxLength={150}
                  value={form.comment}
                  placeholder={"Comments?"}
                  onChange={handleChange}
                />


                <button
                  type={"submit"}
                  value={"submit"}
                  className={"p-2 rounded-xl flex items-center justify-center text-3xl text-white w-full hover:text-yellow-400 border border-green-400"}
                  onClick={handleSubmit}
                >
                  View Info
                  <FaRegEye className={"text-4xl ml-3"}/>
                </button>

              </form>

                {message && <SectionRight><Container className={"flex items-center justify-center space-x-4 w-full animate-pulse mb-2"}>
                    <FaAsterisk className={"text-green-500 text-xl animate-spin-slow animate-pulse"}/>
                    <p className={"text-green-500 text-2xl"}>Required Fields</p>
                </Container></SectionRight>}

              <div className={"text-red-600"}>
                  {Object.keys(errors).map((err, index) => (
                      <li key={index}>{err}</li>
                  ))}
              </div>

            </Container>}

            {infoDisplay && <Section><Contact/></Section>}
        </>

    )
}

export default Form