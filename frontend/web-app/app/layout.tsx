import { Metadata } from 'next'
import './globals.css'
import NavBar from './nav/NavBar'
import ToasterProvider from './providers/ToasterProvider'


export const metadata: Metadata = {
  title: 'Carsties',
  description: 'A car auction site',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ToasterProvider/>
        <NavBar/>
        <main className="container mx-auto px-5 pt-10">
          {children}
        </main>
      </body>
    </html>
  )
}
