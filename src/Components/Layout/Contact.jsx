import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

// Define the Zod schema for form validation
const schema = z.object({
    firstName: z.string().nonempty("Name is required"),
    email: z.string().email("Invalid email address"),
    phoneNumber: z.string().nonempty("Phone Number is required"),
    address: z.string().nonempty("Address is required"),
    message: z.string().nonempty("Message is required"),
});

const Contact = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(schema),
    });

    const onSubmit = (data) => {
        console.log(data);
        alert("Message Submitted"); // Show a pop-up message
        // You can send the data to your server here
    };

    return (
        <div id='contact' className='max-w-[1400px] m-auto w-full p-4 py-16'>
            <h2 className='text-center text-gray-700 text-4xl'>Send a message</h2>
            <p className='text-center text-gray-700 py-3'>We are standing by!</p>
            <div className='grid md:grid-cols-2'>
                <img
                    className='w-full md:h-full object-cover p-2 max-h-[500px] h-[200px]'
                    src="https://images.pexels.com/photos/1049298/pexels-photo-1049298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                    alt="/" 
                />
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='flex flex-col'>
                        <input 
                            className='border p-2 m-2 rounded-md' 
                            type="text" 
                            placeholder='Your Name' 
                            {...register('firstName')} 
                        />
                        {errors.firstName && <span className="text-red-500">{errors.firstName.message}</span>}
                    
                        
                        <input 
                            className='border p-2 m-2 rounded-md' 
                            type="email" 
                            placeholder='Email' 
                            {...register('email')} 
                        />
                        {errors.email && <span className="text-red-500">{errors.email.message}</span>}
                        
                        <input 
                            className='border p-2 m-2 rounded-md' 
                            type="text" 
                            placeholder='Phone Number' 
                            {...register('phoneNumber')} 
                        />
                        {errors.phoneNumber && <span className="text-red-500">{errors.phoneNumber.message}</span>}
                        
                        <input 
                            className='border col-span-2 p-2 m-2 rounded-md' 
                            type="text" 
                            placeholder='Address' 
                            {...register('address')} 
                        />
                        {errors.address && <span className="text-red-500">{errors.address.message}</span>}
                        
                        <textarea 
                            className='border col-span-2 p-2 m-2 rounded-md' 
                            cols={38} 
                            rows={5} 
                            placeholder='Your message.' 
                            {...register('message')}
                        ></textarea>
                        {errors.message && <span className="text-red-500">{errors.message.message}</span>}
                        
                        <button className='col-span-2 m-2' type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;
