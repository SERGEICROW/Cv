import {Fragment} from 'react'
import {Disclosure, Menu, Transition} from '@headlessui/react'
import {AdjustmentsIcon, MenuIcon, XIcon} from '@heroicons/react/outline'

const navigation = [

    {name: 'Stack', href: '/stack', current: false},
    {name: 'Education', href: '/education', current: false},
    {name: 'Experience', href: 'experience', current: false},
    {name: 'Apis', href: 'apis', current: false},
    {name: 'Contact', href: '#', current: false}
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
    return (
        <Disclosure as="nav" className="backdrop-blur-sm z-40 fixed w-auto min-w-full max-w-none">
            {({open}) => (
                <>
                    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                        <div className="relative flex items-center justify-between h-16">

                            {/* Mobile menu button*/}
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
                                    <a href="/">
                                        <h3 className="text-green-400 text-2xl">Roy's CV</h3>
                                    </a>
                                </div>

                                {/*Nav Items*/}
                                <div className="hidden sm:block sm:ml-6">
                                    <div className="flex space-x-4">
                                        {navigation.map((item) => (
                                            <a
                                                key={item.name}
                                                href={item.href}
                                                className={classNames(item.current ?
                                                        'border border-green-400 text-green-400' : 'text-gray-300 hover:text-green-400',
                                                    'px-3 py-2 rounded-md text-xl font-medium'
                                                )}
                                                aria-current={item.current ? 'page' : true}
                                            >
                                                {item.name}
                                            </a>
                                        ))}
                                    </div>
                                </div>

                            </div>

                            <div
                                className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

                                {/* Settings Dropdown */}
                                <Menu as="div" className="ml-3 relative">

                                    <div>
                                        <Menu.Button type="button"
                                                     className="p-1 rounded-full text-gray-400 hover:text-yellow-400">
                                            <span className="sr-only">View notifications</span>
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
                                        <Menu.Items
                                            className="z-30 origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg
                                            py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                            <Menu.Item>
                                                {({active}) => (
                                                    <a href="#" className={classNames(active ? 'bg-gray-100' : '',
                                                        'block px-4 py-2 text-sm text-gray-700')}>
                                                        Settings
                                                    </a>
                                                )}
                                            </Menu.Item>
                                        </Menu.Items>
                                    </Transition>

                                </Menu>

                            </div>
                        </div>

                    </div>

                    {/* PhoneDropMenu */}
                    <Disclosure.Panel className="sm:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            {navigation.map((item) => (
                                <Disclosure.Button
                                    key={item.name}
                                    as="a"
                                    href={item.href}
                                    className={classNames(
                                        item.current ? 'border border-green-400 text-green-400' : 'text-gray-300 hover:text-green-400',
                                        'block px-3 py-2 rounded-md text-base font-medium'
                                    )}
                                    aria-current={item.current ? 'page' : undefined}
                                >
                                    {item.name}
                                </Disclosure.Button>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
}

