import React from 'react'
import Carousel from 'react-elastic-carousel'
import { useState } from 'react'

function Home() {
  const [items, setstate] = useState([
    {id: 1, title: 'item #1', img:"https://images.unsplash.com/photo-1536882240095-0379873feb4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"},
    {id: 2, title: 'item #2', img:"https://images.unsplash.com/photo-1590990771866-c172665b47ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"},
    {id: 3, title: 'item #3', img:"https://images.unsplash.com/photo-1504204267155-aaad8e81290d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"},
    {id: 4, title: 'item #4', img:"https://images.unsplash.com/photo-1551970634-747846a548cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"}
  ])
  return (
<Carousel isRTL={false} enableAutoPlay autoPlaySpeed={15000}>
{items.map(item => <div key={item.id}>
<img src={item.img} alt="" width="100%" height="100%"/>

</div>)}
</Carousel>
  )
}

export default Home