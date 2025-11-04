import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Clínica Reumatológica - Especialistas en Reumatología',
  description: 'Clínica especializada en reumatología. Tratamiento de artritis, lupus, fibromialgia y otras enfermedades reumáticas. Atención profesional y personalizada.',
  keywords: 'reumatología, artritis, lupus, fibromialgia, clínica reumatológica, especialista en reumatología, enfermedades reumáticas, tratamiento artritis',
  authors: [{ name: 'Clínica Reumatológica' }],
  openGraph: {
    title: 'Clínica Reumatológica - Especialistas en Reumatología',
    description: 'Clínica especializada en reumatología. Tratamiento de artritis, lupus, fibromialgia y otras enfermedades reumáticas.',
    type: 'website',
    locale: 'es_ES',
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
