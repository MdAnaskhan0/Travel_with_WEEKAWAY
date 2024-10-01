import React from 'react'

const Gallery = () => {
    return (
        <div id='gallery' className='max-w-[1400px] m-auto w-full px-4 py-16'>
            <h2 className='text-center text-gray-700 text-4xl p-4'>Gallery</h2>
            <div className='grid sm:grid-cols-5 gap-4'>
                <div className='sm:col-span-3 col-span-2 row-span-2'>
                    <img className='w-full h-ful
                    object-cover border-4 border-gray-300 rounded-md' src="https://images.pexels.com/photos/1024967/pexels-photo-1024967.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="/" />
                </div>
                <div>
                    <img className='w-full h-ful
                    object-cover border-4 border-gray-300 rounded-md' src="https://images.pexels.com/photos/4597275/pexels-photo-4597275.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="/" />
                </div>
                <div>
                    <img className='w-full h-ful
                    object-cover border-4 border-gray-300 rounded-md' src="https://images.pexels.com/photos/2373201/pexels-photo-2373201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="/" />
                </div>
                <div>
                    <img className='w-full h-ful
                    object-cover border-4 border-gray-300 rounded-md' src="https://images.pexels.com/photos/1179156/pexels-photo-1179156.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="/" />
                </div>
                <div>
                    <img className='w-full h-ful
                    object-cover border-4 border-gray-300 rounded-md' src="https://images.pexels.com/photos/7294673/pexels-photo-7294673.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="/" />
                </div>
            </div>
        </div>
    )
}

export default Gallery
