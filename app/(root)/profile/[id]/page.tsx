import Header from '@/components/Header';
import React from 'react'


const Page = async ({ params }: ParamsWithSearch) => {
    // Now you can access the id parameter
    const { id } = await params;
    
    return (
        <div className='wrapper page'>
            <Header subHeader='zakariabouzangad@gmail.com' title="Zakaria | JS Mastery" userImg='/assets/images/dummy.jpg'></Header>
            
            <h1 className='text-2xl font-karla'>
            
            Profile page for user: {id}
            </h1>
            </div>
    )
}

export default Page