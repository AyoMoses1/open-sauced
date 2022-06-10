import Image from 'next/image'
import Link from 'next/link'
import { Input } from "@supabase/ui";
import { Typography } from '@supabase/ui'
import { test } from '../test'
import image from "../public/hacktoberfestimg.png"
import React from 'react';

export const PortalLayout = ({children}: {children: React.ReactNode}) => {
  const { Title } = Typography;

  const defaultTools = [
    {
      name: "default"
    },
    {
      name: "default"
    },
    {
      name: "default"
    }
    
  ]
  const toolList = defaultTools.concat(test);

  return (
    <div className="page-container flex min-h-screen flex-col items-center justify-center px-8 py-4">
      <div className='info-container min-w-full min-h-[100px] border'>
        <header className='header flex flex-row mb-2'>
          <div className='header-image mr-2 p-2 border min-w-[200px]'>
            <Image
              src={image}
              layout={'responsive'}
            />
          </div>
          <div className='header-info flex flex-col grow justify-center p-2 border'>
            <Title level={2} className='pb-1'>Hacktoberfest</Title>
            <Title level={4} className='pb-1'>Description with markdown support</Title> {/* Find out what this means */}
            <Input
              className='w-[100%]'
            />
          </div>
        </header>
        <nav className='tool-list-nav flex flex-row min-h-[50px] p-2 border'>
          {toolList.map((tool, index) => 
            <Link
              className='nav-tool-item'
              href=''
              key={index}
            >
              <h5 className='pr-2'>
                {tool.name}
              </h5>
            </Link>
          )}
        </nav>
      </div>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        {children}
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        <a
          className="flex items-center justify-center gap-2"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </a>
      </footer>
    </div>
  )
}

export default PortalLayout

/* 

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-6xl font-bold">
          Welcome to{' '}
          <a className="text-blue-600" href="https://nextjs.org">
            Next.js!
          </a>
        </h1>

        <p className="mt-3 text-2xl">
          Get started by editing{' '}
          <code className="rounded-md bg-gray-100 p-3 font-mono text-lg">
            pages/index.tsx
          </code>
        </p>

        <div className="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full">
          <a
            href="https://nextjs.org/docs"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Documentation &rarr;</h3>
            <p className="mt-4 text-xl">
              Find in-depth information about Next.js features and its API.
            </p>
          </a>

          <a
            href="https://nextjs.org/learn"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Learn &rarr;</h3>
            <p className="mt-4 text-xl">
              Learn about Next.js in an interactive course with quizzes!
            </p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Examples &rarr;</h3>
            <p className="mt-4 text-xl">
              Discover and deploy boilerplate example Next.js projects.
            </p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Deploy &rarr;</h3>
            <p className="mt-4 text-xl">
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        <a
          className="flex items-center justify-center gap-2"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </a>
      </footer>
    </div>
  )
}

export default Home

*/
