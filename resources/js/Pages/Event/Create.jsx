import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/inertia-react';

export default function Create(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Create Event</h2>}
        >
            <Head title="Dashboard" />
            <div className='flex flex-col'>

                <label htmlFor="eventName">Event Name</label>
                <input type="text" name="eventName" id="eventName" className='my-2 bg-white' placeholder='SunBurn Festival 2023' />
            </div>

            <span className='flex space-x-5 justify-center'>

                <div className='flex w-full flex-col'>

                    <label htmlFor="eventName">Event Venue</label>
                    <input type="text" name="eventVenue" id="eventVenue" className='my-2 bg-white' placeholder='Goa' />
                </div>
                <div className='flex w-full flex-col'>

                    <label htmlFor="eventName">Event Category</label>
                    <input type="text" name="eventCategory" id="eventCategory" className='my-2 bg-white' placeholder='Music Festival' />
                </div>



            </span>

            <div className='flex flex-col'>

                <label htmlFor="eventDescription">Event Description</label>
                {/* <input type="text" name="eventName" id="eventName" className='my-2 bg-white' /> */}
                <textarea name="eventDescription" id="eventDescription" placeholder='Sunburn is an annual music festival held in India. It is one of the largest music festivals in the country and attracts a large number of tourists and music fans. The festival features a variety of electronic dance music (EDM) acts and DJs, as well as other live performances. It is typically held in the Goa region of India and lasts for several days.' className='my-2 bg-white' cols="30" rows="5"></textarea>
            </div>
            <span className='flex space-x-5 justify-center'>

                <div className='flex w-full flex-col'>


                    <label htmlFor="eventDescription">Event Start Date</label>
                    <input type="date" name="eventStart" id="eventStart" className='my-2 bg-white' />


                </div>

                <div className='flex w-full  flex-col'>


                    <label htmlFor="eventDescription">Event End Date</label>
                    <input type="date" name="eventEnd" id="eventEnd" className='my-2 bg-white' />


                </div>
            </span>



        </AuthenticatedLayout>
    );
}
