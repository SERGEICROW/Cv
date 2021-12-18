import {Fragment, useState} from 'react'
import {Disclosure, Menu, Transition} from '@headlessui/react'
import {AdjustmentsIcon, MenuIcon, XIcon} from '@heroicons/react/outline'
import NextLink from 'next/link'
import {useRouter} from "next/router";
import {BiCloudDownload} from "react-icons/bi";
import {BsPhoneVibrate} from "react-icons/bs";
import Logo from "./logo";
import Section from "./section";
import {Container, Heading} from "@chakra-ui/react";
import {VscCloseAll} from "react-icons/vsc";
import Form from "./contactForm";


//NAV BAR NAVIGATION TITLES
const navigation = [
    {name: 'About', href: '/', current: true},
    {name: 'Stack', href: '/stack', current: false},
    {name: 'Experience', href: '/experience', current: false},
    {name: 'Api section', href: '/apis', current: false},
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

//NAVBAR TITLES LINKS TO PAGE
const LinkItem = ({href, children, ...props}) => {
    const path = useRouter().asPath
    const active = path === href
    return (
        <NextLink href={href} passHref>
            <div
                className={active ? "border border-green-400 text-green-400 px-2 py-2 rounded-md text-3xl font-medium cursor-pointer select-none" :
                    "text-gray-300 hover:text-green-400 px-2 py-2 rounded-md text-3xl font-medium cursor-pointer border border-transparent select-none"}
                {...props}
            >
                {children}
            </div>
        </NextLink>
    )
}

//INDEX PAGE LINK
const LinkLogo = ({href, children, ...props}) => {
    const path = useRouter().asPath
    const active = path === href
    return (
        <NextLink href={href} passHref>
            <div
                className={active ? "text-green-500 text-3xl animate-bounce h-6 cursor-pointer" : "text-white text-3xl cursor-pointer "}
                {...props}
            >
                {children}
            </div>
        </NextLink>
    )
}

//NAVBAR MAIN
const Navbar = props => {
    const {path} = props

    //OPEN MODAL
    const [open, setOpen] = useState(false);
    const openModal = () => {
        if (open === false) {
            setOpen(true);
        } else {
            setOpen(false)
        }
    }


    //MODAL
    const Modal = () => {

        const recruiterForm = {
            name: '',
            mail: '',
            comment: '',
        }

        return (
            <Container className=" fixed backdrop-blur z-50 flex justify-center items-center min-w-full h-screen text-white select-none">
                <Section>

                    <div className={"flex justify-end w-full"}>
                        <button
                            onClick={() => setOpen(false)}
                            className={"relative top-7 left-2 text-5xl rounded-full text-gray-500 hover:text-gray-300 bg-black p-1.5 "}>
                            <VscCloseAll/>
                        </button>
                    </div>

                    <div className={"bg-black mx-5 rounded-3xl border border-green-400 p-3"}>

                        <Form formId={"add-recruiter-form"} recruitForm={recruiterForm}/>

                    </div>

                </Section>
            </Container>
        )
    }

    return (
        <Container>

            {/*MODAL*/}
            {open && <Modal/>}

            {/*NAVBAR*/}
            <Disclosure as="nav" className="backdrop-blur-sm  z-40 fixed w-auto min-w-full max-w-none h-16">
                {({open}) => (
                    <>
                        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                            <div className="relative flex items-center justify-between h-16">

                                {/*Mobile menu button*/}
                                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">

                                    <Disclosure.Button
                                        className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white
                                    focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500">
                                        <span className="sr-only">Open main menu</span>
                                        {open ? (
                                            <XIcon className="block h-6 w-6 " aria-hidden="true"/>
                                        ) : (
                                            <MenuIcon className="block h-6 w-6" aria-hidden="true"/>
                                        )}
                                    </Disclosure.Button>
                                </div>

                                <div className="flex-1 flex items-center justify-center sm:items-stretch ">

                                    <div className="flex-shrink-0 flex items-center">
                                        <LinkLogo href="/" path={path}>
                                            <Logo/>
                                        </LinkLogo>
                                    </div>

                                    {/*Nav Items*/}
                                    <div className="hidden m-5 sm:block sm:ml-6">
                                        <div className="flex space-x-4">

                                            <LinkItem href="/stack" path={path}>
                                                Stack
                                            </LinkItem>
                                            <LinkItem href={"/experience"} path={path}>
                                                Experience
                                            </LinkItem>
                                            <LinkItem href={"/apis"} path={path}>
                                                Api's
                                            </LinkItem>

                                        </div>
                                    </div>

                                </div>

                                <div
                                    className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

                                    {/*Settings Dropdown*/}
                                    <Menu as="div" className="w-6 sm:w-0">

                                        <div>
                                            <Menu.Button type="button"
                                                         className="p-1 rounded-full text-gray-400 hover:text-green-400">
                                                <AdjustmentsIcon className="h-8 w-8" aria-hidden="true"/>
                                            </Menu.Button>
                                        </div>

                                        <Transition
                                            as={Fragment}
                                            enter="transition ease-out duration-100"
                                            enterFrom="transform opacity-0 scale-95"
                                            enterTo="transform opacity-100 scale-100"
                                            leave="transition ease-in duration-75"
                                            leaveFrom="transform opacity-100 scale-100"
                                            leaveTo="transform opacity-0 scale-95"
                                        >
                                            <Menu.Items className="z-30 flex flex-col p-3 origin-top-right absolute right-0 mt-2 rounded-md
                                            bg-black text-white text-2xl border border-green-400">

                                                <Menu.Item>
                                                    <Section>
                                                        <a href={"https://docs.google.com/document/d/1oMXSn-fhWWXASvOmfJfmsYK0lUSmvZf7R9KGoGLKPBE/edit?usp=sharing"}>
                                                            <button
                                                                className="flex items-center w-max text-base sm:text-3xl hover:text-yellow-400 hover:animate-pulse mb-3">
                                                                Download CV
                                                                <BiCloudDownload
                                                                    className={"hidden sm:block ml-3 text-4xl text-yellow-400"}/>
                                                            </button>
                                                        </a>
                                                    </Section>
                                                </Menu.Item>
                                                <Menu.Item>
                                                    <Section delay={.1}>
                                                        <button
                                                            onClick={openModal}
                                                            className="flex items-center w-max text-base sm:text-3xl hover:text-yellow-400 hover:animate-pulse">
                                                            Contact Roy
                                                            <BsPhoneVibrate
                                                                className={"hidden sm:block ml-8 text-4xl text-yellow-400"}/>
                                                        </button>
                                                    </Section>
                                                </Menu.Item>

                                            </Menu.Items>
                                        </Transition>
                                    </Menu>

                                </div>
                            </div>
                        </div>

                        {/*PhoneDropMenu*/}
                        <Disclosure.Panel className="sm:hidden">
                            <div className="px-2 pt-2 pb-3 space-y-1">
                                {navigation.map((item) => (
                                    <Disclosure.Button
                                        key={item.name}
                                        as="a"
                                        href={item.href}
                                    >
                                        <div className="bg-black">
                                            <LinkItem href={item.href} path={path}>
                                                {item.name}
                                            </LinkItem>
                                        </div>
                                    </Disclosure.Button>
                                ))}
                            </div>
                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure>
        </Container>

    )

}

export default Navbar

