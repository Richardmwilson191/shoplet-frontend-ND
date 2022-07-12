import Head from 'next/head'
import Link from 'next/link'
import { Fragment } from 'react'
import { useRouter } from 'next/router'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import {
    BellIcon,
    CogIcon,
    HomeIcon,
    MenuIcon,
    ShoppingBagIcon,
    XIcon,
    LoginIcon,
} from '@heroicons/react/outline'
import { MdOutlineSell } from 'react-icons/md'

import { useAuth } from '@/hooks/auth'
import SearchBox from '@/components/SearchBox'
import { HiOutlineDocumentText } from 'react-icons/hi'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Navigation() {
    const router = useRouter()
    const { user, logout } = useAuth({ middleware: 'guest' })

    const menu = [
        {
            name: 'Home',
            href: '/',
            icon: HomeIcon,
        },
        {
            name: 'Buy',
            href: '/buy',
            icon: ShoppingBagIcon,
        },
        {
            name: 'Sell',
            href: '/sell',
            icon: MdOutlineSell,
        },
        {
            name: 'Services',
            href: '/services',
            icon: CogIcon,
        },
    ]

    return (
        <>
            <Head>
                <title>Laravel</title>
            </Head>
            <Disclosure as="nav" className="bg-white shadow">
                {({ open }) => (
                    <>
                        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
                            <div className="flex justify-between h-16">
                                <div className="flex px-2 lg:px-0">
                                    <div className="flex-shrink-0 flex items-center">
                                        <Link href="/">
                                            <span className='className="text-4xl"'>
                                                Shoplet
                                            </span>
                                        </Link>
                                    </div>
                                    <div className="hidden lg:ml-6 lg:flex lg:space-x-8">
                                        {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}

                                        {menu.map(item => (
                                            <div
                                                key={item.name}
                                                className="flex">
                                                <Link href={item.href}>
                                                    <a
                                                        className={`${
                                                            item.href ===
                                                            router.pathname
                                                                ? 'border-indigo-500'
                                                                : 'border-transparent'
                                                        } text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}>
                                                        <item.icon
                                                            className="mr-1 flex-shrink-0 h-6 w-6 text-gray-500"
                                                            aria-hidden="true"
                                                        />
                                                        {item.name}
                                                    </a>
                                                </Link>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <SearchBox />
                                <div className="flex items-center lg:hidden">
                                    {/* Mobile menu button */}
                                    <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                        <span className="sr-only">
                                            Open main menu
                                        </span>
                                        {open ? (
                                            <XIcon
                                                className="block h-6 w-6"
                                                aria-hidden="true"
                                            />
                                        ) : (
                                            <MenuIcon
                                                className="block h-6 w-6"
                                                aria-hidden="true"
                                            />
                                        )}
                                    </Disclosure.Button>
                                </div>
                                <div className="hidden lg:ml-4 lg:flex lg:items-center">
                                    {!user ? (
                                        <>
                                            <Link href="/login">
                                                <a className="text-sm text-gray-700 underline">
                                                    Login
                                                </a>
                                            </Link>

                                            <Link href="/register">
                                                <a className="ml-4 text-sm text-gray-700 underline">
                                                    Register
                                                </a>
                                            </Link>
                                        </>
                                    ) : (
                                        <>
                                            <button
                                                type="button"
                                                className="flex-shrink-0 bg-white p-1 text-gray-400 rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                                <span className="sr-only">
                                                    View notifications
                                                </span>
                                                <BellIcon
                                                    className="h-6 w-6"
                                                    aria-hidden="true"
                                                />
                                            </button>

                                            <Menu
                                                as="div"
                                                className="ml-4 relative flex-shrink-0">
                                                <div>
                                                    <Menu.Button className="bg-white rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                                        <span className="sr-only">
                                                            Open user menu
                                                        </span>
                                                        <span className="px-2 py-1">
                                                            {user.username}
                                                        </span>
                                                    </Menu.Button>
                                                </div>
                                                <Transition
                                                    as={Fragment}
                                                    enter="transition ease-out duration-100"
                                                    enterFrom="transform opacity-0 scale-95"
                                                    enterTo="transform opacity-100 scale-100"
                                                    leave="transition ease-in duration-75"
                                                    leaveFrom="transform opacity-100 scale-100"
                                                    leaveTo="transform opacity-0 scale-95">
                                                    <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
                                                        <Menu.Item>
                                                            {({ active }) => (
                                                                <a
                                                                    href="/dashboard"
                                                                    className={classNames(
                                                                        active
                                                                            ? 'bg-gray-100'
                                                                            : '',
                                                                        'block px-4 py-2 text-sm text-gray-700',
                                                                    )}>
                                                                    Dashboard
                                                                </a>
                                                            )}
                                                        </Menu.Item>
                                                        <Menu.Item>
                                                            {({ active }) => (
                                                                <a
                                                                    href="#"
                                                                    className={classNames(
                                                                        active
                                                                            ? 'bg-gray-100'
                                                                            : '',
                                                                        'block px-4 py-2 text-sm text-gray-700',
                                                                    )}>
                                                                    Your Profile
                                                                </a>
                                                            )}
                                                        </Menu.Item>
                                                        <Menu.Item>
                                                            {({ active }) => (
                                                                <a
                                                                    href="#"
                                                                    className={classNames(
                                                                        active
                                                                            ? 'bg-gray-100'
                                                                            : '',
                                                                        'block px-4 py-2 text-sm text-gray-700',
                                                                    )}>
                                                                    Settings
                                                                </a>
                                                            )}
                                                        </Menu.Item>
                                                        <Menu.Item>
                                                            {({ active }) => (
                                                                <button
                                                                    onClick={
                                                                        logout
                                                                    }
                                                                    className={classNames(
                                                                        active
                                                                            ? 'bg-gray-100'
                                                                            : '',
                                                                        'block w-full text-left px-4 py-2 text-sm text-gray-700',
                                                                    )}>
                                                                    Sign out
                                                                </button>
                                                            )}
                                                        </Menu.Item>
                                                    </Menu.Items>
                                                </Transition>
                                            </Menu>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>

                        <Disclosure.Panel className="lg:hidden">
                            <div className="pt-2 pb-3 space-y-1">
                                {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800" */}
                                {menu.map(item => (
                                    <div key={item.name} className="flex">
                                        <Link href={item.href}>
                                            <a
                                                className={`${
                                                    item.href ===
                                                    router.pathname
                                                        ? 'bg-indigo-200 text-indigo-600'
                                                        : 'border-transparent'
                                                } text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-2 pb-2 border-b-2 text-md font-medium w-full`}>
                                                <item.icon
                                                    className="mr-1 flex-shrink-0 h-6 w-6 text-gray-500"
                                                    aria-hidden="true"
                                                />
                                                {item.name}
                                            </a>
                                        </Link>
                                    </div>
                                ))}
                                {!user ? (
                                    <>
                                        <div className="flex">
                                            <Link href="/login">
                                                <a
                                                    className={`${
                                                        '/login' ===
                                                        router.pathname
                                                            ? 'bg-indigo-200 text-indigo-600'
                                                            : 'border-transparent'
                                                    } text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-2 pb-2 border-b-2 text-md font-medium w-full`}>
                                                    <LoginIcon
                                                        className="mr-1 flex-shrink-0 h-6 w-6 text-gray-500"
                                                        aria-hidden="true"
                                                    />
                                                    Login
                                                </a>
                                            </Link>
                                        </div>

                                        <div className="flex">
                                            <Link href="/register">
                                                <a
                                                    className={`${
                                                        '/register' ===
                                                        router.pathname
                                                            ? 'bg-indigo-200 text-indigo-600'
                                                            : 'border-transparent'
                                                    } text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-2 pb-2 border-b-2 text-md font-medium w-full`}>
                                                    <HiOutlineDocumentText
                                                        className="mr-1 flex-shrink-0 h-6 w-6 text-gray-500"
                                                        aria-hidden="true"
                                                    />
                                                    Register
                                                </a>
                                            </Link>
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <button
                                            onClick={logout}
                                            className="hover:bg-indigo-50 hover:border-indigo-500 hover:text-indigo-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">
                                            Sign out
                                        </button>
                                    </>
                                )}
                            </div>
                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure>
        </>
    )
}
