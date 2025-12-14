import React from 'react'
import type { Metadata } from 'next'
import './globals.css'
import { Toaster } from "@/components/ui/sonner"
import { Prompt } from 'next/font/google'

interface RootLayoutProps {
	children: React.ReactNode
}

export const metadata: Metadata = {
	title: {
		default: `Workshop`,
    	template: `Workshop | %s`
  	},
  	description: "เว็บไซต์ Workshop"
}

const prompt_font = Prompt({
  	subsets: ['thai', 'latin'],
  	weight: '400',
	variable: '--font-prompt',
  	display: 'swap'
})

const RootLayout = ({children}: RootLayoutProps) => {
  	return (
		<html lang='th' className={prompt_font.className}>
			<body>
				{children}
				<Toaster></Toaster>
			</body>
		</html>
  	)
}

export default RootLayout
