import '../globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import {Roboto} from "next/font/google"
import Navbar from '@/components/Navbar'
import LeftSidebar from '@/components/LeftSidebar'

const roboto = Roboto({ weight: '900', subsets: ['cyrillic'] })

export const metadata: Metadata = {
  title: 'Jesse Bett',
  description: 'Jesse portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Navbar/>
        <main className=' flex '>
          <LeftSidebar/>
       
       
        
        {children}
        </main>
        </body>
    </html>
  )
}
