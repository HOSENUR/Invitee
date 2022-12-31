import { Link, Head } from '@inertiajs/inertia-react';
import Invitee from '../../invitee.svg'
import PlaceHolderLogo from '../../PlaceHolderLogo.svg'
import PlaceHolderLogo2 from '../../PlaceHolderLogo2.svg'
import PlaceHolderLogo3 from '../../PlaceHolderLogo3.svg'


export default function Welcome(props) {
    return (
        <>
            <Head title="Welcome" />
            <section className="min-h-screen flex items-center">
                <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
                    <h1 className="mb-4 text-4xl flex flex-col md:flex-row items-center  justify-center font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Welcome to <img src={Invitee} className="w-72 mx-2" alt="" /> </h1>
                    <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Say goodbye to chaos and hello to streamlined event planning, Effortless event organization and communication, all in one app.

                    </p>
                    <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">


                        <Link href="/event/create" className="inline-flex bg-black justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                            Create and Event 🎉

                        </Link>
                        <Link href='/event/join' className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-black rounded-lg bg-primary-100  focus:ring-4 focus:ring-primary-300">
                            Join an Event
                        </Link>

                    </div>
                    <div className="px-4 mx-auto text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-36">
                        <span className="font-semibold text-gray-400 uppercase">Used By</span>
                        <div className="flex flex-wrap justify-center items-center mt-8 text-gray-500 sm:justify-between">
                            <img src={PlaceHolderLogo} alt="" />
                            <img src={PlaceHolderLogo2} alt="" />
                            <img src={PlaceHolderLogo3} alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
