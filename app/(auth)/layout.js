import "../globals.css"


export const metadata = {
  title: 'صفحه ورود به اوستاشو',

}

export default function RootLayout({ children }) {
 return (
    <html lang="fa" dir="rtl">
      <body className="w-screen h-screen flex justify-center items-center">
        
        {children}
        </body>
    </html>
  )
}
