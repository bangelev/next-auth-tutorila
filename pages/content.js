import React from 'react'
import Head from 'next/head'
import Footer from '../components/layout/Footer'

function Content() {
  return (
    <div>
      <Head>
        <title> Blazo 's Page</title>{' '}
        <meta name="description" content="Samo za for NExt.js" />
      </Head>{' '}
      <h1 className="content"> Content </h1>{' '}
    </div>
  )
}

export default Content

Content.getLayout = function (page) {
  return (
    <>
      {' '}
      {page} <Footer />
    </>
  )
}
