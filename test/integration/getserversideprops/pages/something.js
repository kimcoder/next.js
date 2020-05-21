import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

export async function getServerSideProps({ params, query }) {
  return {
    props: {
      world: 'world',
      query: query || {},
      params: params || {},
      time: new Date().getTime(),
      random: Math.random(),
    },
  }
}

export default ({ world, time, params, random, query, appProps }) => {
  return (
    <>
      <p>hello: {world}</p>
      <span>time: {time}</span>
      <div id="random">{random}</div>
      <div id="params">{JSON.stringify(params)}</div>
      <div id="initial-query">{JSON.stringify(query)}</div>
      <div id="query">{JSON.stringify(useRouter().query)}</div>
      <div id="app-query">{JSON.stringify(appProps.query)}</div>
      <div id="app-url">{appProps.url}</div>
      <Link href="/">
        <a id="home">to home</a>
      </Link>
      <br />
      <Link href="/another">
        <a id="another">to another</a>
      </Link>
    </>
  )
}