import { InboxIcon, SparklesIcon } from '@heroicons/react/outline'
import AppLayout from '@/components/Layouts/AppLayout'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import ProductCard from '@/components/ProductCard'

const metrics = [
    {
        id: 1,
        stat: '8K+',
        emphasis: 'Users',
        rest: 'use laoreet amet lacus nibh integer quis.',
    },
    {
        id: 2,
        stat: '25K+',
        emphasis: 'Items sold',
        rest: 'lacus nibh integer quis.',
    },
    {
        id: 3,
        stat: '900',
        emphasis: 'Services available',
        rest: 'laoreet amet lacus nibh integer quis.',
    },
    {
        id: 4,
        stat: '2M+',
        emphasis: 'Monthly visits',
        rest: 'lacus nibh integer quis.',
    },
]
const footerNavigation = {
    solutions: [
        { name: 'Marketing', href: '#' },
        { name: 'Analytics', href: '#' },
        { name: 'Commerce', href: '#' },
        { name: 'Insights', href: '#' },
    ],
    support: [
        { name: 'Pricing', href: '#' },
        { name: 'Documentation', href: '#' },
        { name: 'Guides', href: '#' },
        { name: 'API Status', href: '#' },
    ],
    company: [
        { name: 'About', href: '#' },
        { name: 'Blog', href: '#' },
        { name: 'Jobs', href: '#' },
        { name: 'Press', href: '#' },
        { name: 'Partners', href: '#' },
    ],
    legal: [
        { name: 'Claim', href: '#' },
        { name: 'Privacy', href: '#' },
        { name: 'Terms', href: '#' },
    ],
    social: [
        {
            name: 'Facebook',
            href: '#',
            icon: <FaFacebook />,
        },
        {
            name: 'Instagram',
            href: '#',
            icon: <FaInstagram />,
        },
        {
            name: 'Twitter',
            href: '#',
            icon: <FaTwitter />,
        },
    ],
}

const product = [
    {
        id: 27,
        product_category_id: 14,
        prod_nm: 'iphone 13 Pro',
        desc:
            'Velit aspernatur est doloremque voluptatum tenetur numquam est labore et.',
        price: '150,000.00',
        img_path: 'iPhone.jpg',
        condition: 'New',
        user: {
            username: 'makenna.king',
        },
    },
]
const service = [
    {
        id: 27,
        product_category_id: 14,
        prod_nm: 'Virtual assistant',
        desc:
            'Velit aspernatur est doloremque voluptatum tenetur numquam est labore et.',
        price: '1000.00/hour',
        img_path: 'coffeecup.jpg',
        condition: 'Coming soon',
        user: {
            username: 'makenna.king',
        },
    },
]

export default function Index() {
    return (
        <AppLayout>
            <div className="bg-white">
                <main>
                    {/* Hero section */}
                    <div className="relative">
                        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" />
                        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                            <div className="relative shadow-xl sm:rounded-2xl sm:overflow-hidden">
                                <div className="absolute inset-0">
                                    <img
                                        className="h-full w-full object-cover"
                                        src="https://images.unsplash.com/photo-1616588181775-138dc8ba4197?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                                        alt="People working on laptops"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-r from-green-800 to-indigo-700 mix-blend-multiply" />
                                </div>
                                <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                                    <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                                        <span className="block text-white">
                                            Want to shop from anywhere?
                                        </span>
                                        <span className="block text-indigo-200">
                                            We've got you covered
                                        </span>
                                    </h1>
                                    <p className="mt-6 max-w-lg mx-auto text-center text-xl text-indigo-200 sm:max-w-3xl">
                                        Anim aute id magna aliqua ad ad non
                                        deserunt sunt. Qui irure qui lorem
                                        cupidatat commodo. Elit sunt amet fugiat
                                        veniam occaecat fugiat aliqua.
                                    </p>
                                    <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
                                        <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
                                            <a
                                                href="/buy"
                                                className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-indigo-700 bg-white hover:bg-indigo-50 sm:px-8">
                                                Start shopping
                                            </a>
                                            <a
                                                href="/service"
                                                className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-500 bg-opacity-60 hover:bg-opacity-70 sm:px-8">
                                                Book a service
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Alternating Feature Sections */}
                    <div className="relative pt-16 pb-32 overflow-hidden">
                        <div
                            aria-hidden="true"
                            className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-gray-100"
                        />
                        <div className="relative">
                            <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
                                <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
                                    <div>
                                        <div>
                                            <span className="h-12 w-12 rounded-md flex items-center justify-center bg-gradient-to-r from-purple-600 to-indigo-600">
                                                <InboxIcon
                                                    className="h-6 w-6 text-white"
                                                    aria-hidden="true"
                                                />
                                            </span>
                                        </div>
                                        <div className="mt-6">
                                            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                                                Sell or buy anything
                                            </h2>
                                            <p className="mt-4 text-lg text-gray-500">
                                                Semper curabitur ullamcorper
                                                posuere nunc sed. Ornare iaculis
                                                bibendum malesuada faucibus
                                                lacinia porttitor. Pulvinar
                                                laoreet sagittis viverra duis.
                                                In venenatis sem arcu pretium
                                                pharetra at. Lectus viverra dui
                                                tellus ornare pharetra.
                                            </p>
                                            <div className="mt-6">
                                                <a
                                                    href="#"
                                                    className="inline-flex bg-gradient-to-r from-green-400 to-green-600 bg-origin-border px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white hover:from-green-600 hover:to-green-700">
                                                    Start shopping
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-12 sm:mt-16 lg:mt-0">
                                    <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full pt-12">
                                        {product.map(item => (
                                            <ProductCard
                                                key={item.prod_nm}
                                                product={item}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-24">
                            <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
                                <div className="px-4 max-w-xl mx-auto sm:px-6 lg:pb-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
                                    <div>
                                        <div>
                                            <span className="h-12 w-12 rounded-md flex items-center justify-center bg-gradient-to-r from-purple-600 to-indigo-600">
                                                <SparklesIcon
                                                    className="h-6 w-6 text-white"
                                                    aria-hidden="true"
                                                />
                                            </span>
                                        </div>
                                        <div className="mt-6">
                                            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                                                Easily find services
                                            </h2>
                                            <p className="mt-4 text-lg text-gray-500">
                                                Semper curabitur ullamcorper
                                                posuere nunc sed. Ornare iaculis
                                                bibendum malesuada faucibus
                                                lacinia porttitor. Pulvinar
                                                laoreet sagittis viverra duis.
                                                In venenatis sem arcu pretium
                                                pharetra at. Lectus viverra dui
                                                tellus ornare pharetra.
                                            </p>
                                            <div className="mt-6">
                                                <a
                                                    href="#"
                                                    className="inline-flex bg-gradient-to-r from-green-400 to-green-600 bg-origin-border px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white hover:from-green-600 hover:to-green-700">
                                                    Post a service
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-8 border-t border-gray-200 pt-6">
                                        <blockquote>
                                            <div>
                                                <p className="text-base text-gray-500">
                                                    &ldquo;Cras velit quis eros
                                                    eget rhoncus lacus ultrices
                                                    sed diam. Sit orci risus
                                                    aenean curabitur donec
                                                    aliquet. Mi venenatis in
                                                    euismod ut.&rdquo;
                                                </p>
                                            </div>
                                            <footer className="mt-3">
                                                <div className="flex items-center space-x-3">
                                                    <div className="flex-shrink-0">
                                                        <img
                                                            className="h-6 w-6 rounded-full"
                                                            src="https://images.unsplash.com/photo-1509783236416-c9ad59bae472?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
                                                            alt=""
                                                        />
                                                    </div>
                                                    <div className="text-base font-medium text-gray-700">
                                                        Marcia Hill, Digital
                                                        Marketing Manager
                                                    </div>
                                                </div>
                                            </footer>
                                        </blockquote>
                                    </div>
                                </div>
                                <div className="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
                                    <div className="pr-4 -ml-48 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
                                        {service.map(item => (
                                            <ProductCard
                                                key={item.id}
                                                product={item}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Gradient stats Section */}
                    <div className="bg-gradient-to-r from-green-800 to-indigo-700">
                        <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 sm:pt-20 sm:pb-24 lg:max-w-7xl lg:pt-24 lg:px-8">
                            <h2 className="text-3xl font-extrabold text-white tracking-tight">
                                Providing convenience to users around the world
                            </h2>
                            <p className="mt-4 max-w-3xl text-lg text-purple-200">
                                Ac tincidunt sapien vehicula erat auctor
                                pellentesque rhoncus. Et magna sit morbi
                                lobortis. Blandit aliquam sit nisl euismod
                                mattis in.
                            </p>

                            <div className="mt-12 grid grid-cols-1 gap-y-12 gap-x-6 sm:grid-cols-2">
                                {metrics.map(item => (
                                    <p key={item.id}>
                                        <span className="block text-2xl font-bold text-white">
                                            {item.stat}
                                        </span>
                                        <span className="mt-1 block text-base text-gray-300">
                                            <span className="font-medium text-white">
                                                {item.emphasis}
                                            </span>{' '}
                                            {item.rest}
                                        </span>
                                    </p>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* CTA Section */}
                    <div className="bg-white">
                        <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 lg:flex lg:items-center lg:justify-between">
                            <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                                <span className="block">
                                    Ready to get started?
                                </span>
                                <span className="block bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                                    Start shopping or create an account.
                                </span>
                            </h2>
                            <div className="mt-6 space-y-4 sm:space-y-0 sm:flex sm:space-x-5">
                                <a
                                    href="#"
                                    className="flex items-center justify-center bg-gradient-to-r from-purple-600 to-indigo-600 bg-origin-border px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white hover:from-purple-700 hover:to-indigo-700">
                                    Start shopping
                                </a>
                                <a
                                    href="#"
                                    className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-indigo-800 bg-indigo-50 hover:bg-indigo-100">
                                    Login
                                </a>
                            </div>
                        </div>
                    </div>
                </main>

                <footer className="bg-gray-50" aria-labelledby="footer-heading">
                    <h2 id="footer-heading" className="sr-only">
                        Footer
                    </h2>
                    <div className="max-w-7xl mx-auto pt-16 pb-8 px-4 sm:px-6 lg:pt-24 lg:px-8">
                        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
                            <div className="grid grid-cols-2 gap-8 xl:col-span-2">
                                <div className="md:grid md:grid-cols-2 md:gap-8">
                                    <div>
                                        <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                                            Solutions
                                        </h3>
                                        <ul
                                            role="list"
                                            className="mt-4 space-y-4">
                                            {footerNavigation.solutions.map(
                                                item => (
                                                    <li key={item.name}>
                                                        <a
                                                            href={item.href}
                                                            className="text-base text-gray-500 hover:text-gray-900">
                                                            {item.name}
                                                        </a>
                                                    </li>
                                                ),
                                            )}
                                        </ul>
                                    </div>
                                    <div className="mt-12 md:mt-0">
                                        <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                                            Support
                                        </h3>
                                        <ul
                                            role="list"
                                            className="mt-4 space-y-4">
                                            {footerNavigation.support.map(
                                                item => (
                                                    <li key={item.name}>
                                                        <a
                                                            href={item.href}
                                                            className="text-base text-gray-500 hover:text-gray-900">
                                                            {item.name}
                                                        </a>
                                                    </li>
                                                ),
                                            )}
                                        </ul>
                                    </div>
                                </div>
                                <div className="md:grid md:grid-cols-2 md:gap-8">
                                    <div>
                                        <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                                            Company
                                        </h3>
                                        <ul
                                            role="list"
                                            className="mt-4 space-y-4">
                                            {footerNavigation.company.map(
                                                item => (
                                                    <li key={item.name}>
                                                        <a
                                                            href={item.href}
                                                            className="text-base text-gray-500 hover:text-gray-900">
                                                            {item.name}
                                                        </a>
                                                    </li>
                                                ),
                                            )}
                                        </ul>
                                    </div>
                                    <div className="mt-12 md:mt-0">
                                        <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                                            Legal
                                        </h3>
                                        <ul
                                            role="list"
                                            className="mt-4 space-y-4">
                                            {footerNavigation.legal.map(
                                                item => (
                                                    <li key={item.name}>
                                                        <a
                                                            href={item.href}
                                                            className="text-base text-gray-500 hover:text-gray-900">
                                                            {item.name}
                                                        </a>
                                                    </li>
                                                ),
                                            )}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-12 xl:mt-0">
                                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                                    Subscribe to our newsletter
                                </h3>
                                <p className="mt-4 text-base text-gray-500">
                                    The latest news, articles, and resources,
                                    sent to your inbox weekly.
                                </p>
                                <form className="mt-4 sm:flex sm:max-w-md">
                                    <label
                                        htmlFor="email-address"
                                        className="sr-only">
                                        Email address
                                    </label>
                                    <input
                                        type="email"
                                        name="email-address"
                                        id="email-address"
                                        autoComplete="email"
                                        required
                                        className="appearance-none min-w-0 w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-4 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:placeholder-gray-400"
                                        placeholder="Enter your email"
                                    />
                                    <div className="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                                        <button
                                            type="submit"
                                            className="w-full flex items-center justify-center bg-gradient-to-r from-purple-600 to-indigo-600 bg-origin-border px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white hover:from-purple-700 hover:to-indigo-700">
                                            Subscribe
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="mt-12 border-t border-gray-200 pt-8 md:flex md:items-center md:justify-between lg:mt-16">
                            <div className="flex space-x-6 md:order-2">
                                {footerNavigation.social.map(item => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className="text-gray-400 hover:text-gray-500">
                                        <span className="sr-only">
                                            {item.name}
                                        </span>
                                        {item.icon}
                                    </a>
                                ))}
                            </div>
                            <p className="mt-8 text-base text-gray-400 md:mt-0 md:order-1">
                                &copy; 2020 Workflow, Inc. All rights reserved.
                            </p>
                        </div>
                    </div>
                </footer>
            </div>
        </AppLayout>
    )
}
