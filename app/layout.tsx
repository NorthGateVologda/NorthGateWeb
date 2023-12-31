import './globals.css'
import 'leaflet/dist/leaflet.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import type {Metadata} from 'next'
import {Roboto} from 'next/font/google'

const font = Roboto({ subsets: ['latin'], weight: ["400"] })

export const metadata: Metadata = {
  title: 'North Gate',
  description: 'Врата севера, рекомендательный сервис размещения городских объектов',
  icons: './favicon.ico'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  )
}
