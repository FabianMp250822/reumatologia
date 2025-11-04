import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://reumatologia.vercel.app'),
  title: {
    default: 'Reumatología Clínica de la Costa | Especialistas en Enfermedades Reumáticas',
    template: '%s | Reumatología Clínica de la Costa'
  },
  description: 'Líderes en Reumatología del Caribe Colombiano. Tratamiento especializado de artritis reumatoide, lupus, fibromialgia, gota, espondilitis y enfermedades autoinmunes. Equipo médico experto: Dr. Jorge Pérez, Dr. Antonio Iglesias, Dr. Jesús Godoy.',
  keywords: [
    'reumatología',
    'reumatólogo',
    'clínica reumatológica',
    'artritis reumatoide',
    'lupus eritematoso',
    'fibromialgia',
    'gota',
    'espondilitis',
    'enfermedades autoinmunes',
    'enfermedades reumáticas',
    'Dr. Jorge Pérez',
    'Dr. Antonio Iglesias',
    'Dr. Jesús Godoy',
    'Clínica de la Costa',
    'Barranquilla',
    'Caribe colombiano',
    'osteoartritis',
    'artritis',
    'dolor articular',
    'inflamación articular',
    'enfermedades del aparato locomotor',
    'medicina interna',
    'reumatología Colombia'
  ],
  authors: [
    { name: 'Dr. Jorge Pérez', url: 'https://reumatologia.vercel.app' },
    { name: 'Dr. Antonio Iglesias', url: 'https://reumatologia.vercel.app' },
    { name: 'Dr. Jesús Godoy', url: 'https://reumatologia.vercel.app' }
  ],
  creator: 'Clínica de la Costa',
  publisher: 'Clínica de la Costa',
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  icons: {
    icon: [
      { url: '/logo.png', sizes: 'any' },
      { url: '/logo.png', sizes: '32x32', type: 'image/png' },
      { url: '/logo.png', sizes: '16x16', type: 'image/png' },
    ],
    shortcut: '/logo.png',
    apple: [
      { url: '/logo.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  openGraph: {
    type: 'website',
    locale: 'es_CO',
    url: 'https://reumatologia.vercel.app',
    title: 'Reumatología Clínica de la Costa | Especialistas en Enfermedades Reumáticas',
    description: 'Líderes en Reumatología del Caribe Colombiano. Tratamiento especializado de artritis reumatoide, lupus, fibromialgia y enfermedades autoinmunes.',
    siteName: 'Reumatología Clínica de la Costa',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Reumatología Clínica de la Costa - Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Reumatología Clínica de la Costa | Especialistas en Enfermedades Reumáticas',
    description: 'Líderes en Reumatología del Caribe Colombiano. Tratamiento especializado de artritis reumatoide, lupus, fibromialgia y enfermedades autoinmunes.',
    images: ['/logo.png'],
    creator: '@clinicadelacosta',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://reumatologia.vercel.app',
  },
  category: 'healthcare',
  classification: 'Medical Services',
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
