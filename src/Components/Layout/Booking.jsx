import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

// Zod schema for validation
const formSchema = z.object({
    destination: z.string().nonempty('Please select a destination'),
    checkIn: z.string().nonempty('Please select a check-in date'),
    checkOut: z.string().nonempty('Please select a check-out date'),
});

const Booking = () => {
    const [message, setMessage] = useState('');

    // Initialize the form using react-hook-form with Zod validation
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(formSchema),
    });

    // Function to handle form submission
    const onSubmit = (data) => {
        // Display message after form submission
        setMessage('Sorry ! Right now no available flight :(');
        console.log('Form Data:', data);
    };

    return (
        <div id='deals' className='max-w-[1400px] m-auto w-full p-4'>
            <h2 className='text-center text-4xl text-gray-700 py-8'></h2>
            <form
                className='lg:flex lg:justify-between w-full items-center relative'
                onSubmit={handleSubmit(onSubmit)}
            >
                {/* Left side (2/3 width) */}
                <div className='lg:flex lg:w-2/3'>
                    <div className='flex flex-col my-2 py-2 lg:w-full'>
                        <label htmlFor="destination">Destination:</label>
                        <select
                            className='w-full border rounded-md p-3'
                            id="destination"
                            {...register('destination')}
                        >
                            <option value="">Select Your Destination</option>
                            <option value="coxsbazar">Cox's Bazar</option>
                            <option value="thailand">Thailand</option>
                            <option value="singapore">Singapore</option>
                            <option value="malaysia">Malaysia</option>
                        </select>
                        {errors.destination && (
                            <span className="text-red-500">{errors.destination.message}</span>
                        )}
                    </div>

                    <div className='flex w-full'>
                        <div className='flex flex-col my-2 p-2 lg:w-full'>
                            <label htmlFor="checkin">Check-In:</label>
                            <input
                                className='border rounded-md p-2 w-full'
                                type="date"
                                id="checkin"
                                {...register('checkIn')}
                            />
                            {errors.checkIn && (
                                <span className="text-red-500">{errors.checkIn.message}</span>
                            )}
                        </div>

                        <div className='flex flex-col my-2 p-2 lg:w-full'>
                            <label htmlFor="checkout">Check-Out:</label>
                            <input
                                className='border rounded-md p-2 w-full'
                                type="date"
                                id="checkout"
                                {...register('checkOut')}
                            />
                            {errors.checkOut && (
                                <span className="text-red-500">{errors.checkOut.message}</span>
                            )}
                        </div>
                    </div>
                </div>

                {/* Right side (1/3 width) */}
                <div className='flex flex-col my-2 p-2 lg:w-1/3'>
                    <label htmlFor="search">Search</label>
                    <button
                        className='border rounded-md p-2 w-full bg-blue-500 text-white'
                        id="search"
                        type="submit"
                    >
                        Rates & Availabilities
                    </button>
                </div>
            </form>

            {/* Display the message after form submission */}
            {message && <div className="mt-4 text-gray-700 flex justify-center items-center h-16">
                <span className="text-center">{message}</span>
            </div>}
        </div>
    );
};

export default Booking;
