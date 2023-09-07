import "./globals.css"
import { JetBrains_Mono } from "next/font/google"

const jetBrainsMono = JetBrains_Mono({ subsets: ["latin"] })

export const metadata = {
  title: "Harsh Dawar",
  description: "my portfolio app",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={jetBrainsMono.className + " bg-background-color text-blue"}
      >
        {children}
      </body>
    </html>
  )
}
