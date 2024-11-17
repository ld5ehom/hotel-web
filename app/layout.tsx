import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { HouseLayout } from './providers'

const inter = Inter({ subsets: ['latin'] })

/**
 * Page Description (페이지 설명)
 */
export const metadata: Metadata = {
    title: 'UCLA Housing', // 상단 타이틀
    description: 'UCLA Campus House Website',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <HouseLayout>{children}</HouseLayout>
            </body>
        </html>
    )
}
