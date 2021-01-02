import Head from 'next/head'
import React from 'react'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="bg-black h-screen">
      <Head>
        <title>Strongly Typed</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex items-center flex-col">
        <div className="h-20 w-20"></div>
        <h1 className="text-9xl text-center bg-clip-text text-transparent animate-gradient bg-gradient bg-gradient-to-r from-blue-100 via-blue-400 to-blue-900">
          {'<T>'}
        </h1>
        <div className="text-white flex flex-auto justify-between w-56">
                <Link href="https://twitter.com/TypedStrongly">
                <a target="_blank">Twitter</a>
                </Link>
                <Link href="https://github.com/stronglytypedguy">
                <a target="_blank">Github</a>
                </Link>
                <Link href="https://www.twitch.tv/stronglytypedguy">
                <a target="_blank">Twitch</a>
                </Link>
        </div>
      </main>

      <footer>
      </footer>
    </div>
  )
}
