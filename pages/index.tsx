import React from 'react'
import { NextPageContext } from 'next'
import { getSession } from 'next-auth/react'

import Step600Form from "./components/Step600Form"

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

  if (session) {
    return {
      redirect: {
        //destination: '/auth',
        destination: '/',
        permanent: false,
      }
    }
  }

  return {
    props: {}
  }
}


export default function Home() {
  return (
    <main
      className='flex min-h-screen flex-col items-center justify-between p-24 text-white'
    >
      main
      <br />
      <Step600Form />
    </main>
  )
}
