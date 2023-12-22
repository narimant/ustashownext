

import '../globals.css'




export const metadata = {
  title: 'اوستاشو آموزش آنلاین',
  description: 'سایت اوستاشو آموزش آنلاین برنامه نویسی در راستای ورود به بازار کار ',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir='rtl'>
      <body className='bg-gray-100 w-screen h-screen flex justify-center items-center'>
    
        {children}
    
        </body>
    </html>
  )
}
