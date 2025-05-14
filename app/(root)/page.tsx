import Header from '@/components/Header'
import VideoCard from '@/components/VideoCard'
import React from 'react'

const Page = () => {
  return (
    <main className='wrapper page'>
      <Header 
        title='All Videos'
        subHeader='Public Library'
      />
      <h1>welcome</h1>

      <VideoCard 
        id='1'
        title="SnapChat Message - 30 June 2025"
        thumbnail="/assets/samples/thumbnail (1).png"
        createdAt="2025-06-30T12:00:00Z"
        userImg="/assets/images/jason.png"
        username="JOhn Smith"
        views={15}
        visibility="public"
        duration={156}
      />

    </main>
  )
}

export default Page