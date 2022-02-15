import React from 'react'
import { useRouter } from 'next/router'

const Index = () => {
    const {id} = useRouter().query
    console.log(id)
  return (
    <div>Search Country</div>
  )
}



export default Index