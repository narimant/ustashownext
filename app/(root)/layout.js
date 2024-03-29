
import Header from '@/components/header'
import '../globals.css'
import Footer from '@/components/footer'
import Tostify from '@/components/tostify'
import Provider from '@/components/darkMode/Provider'
import ContextProvider from '@/context/contextProvider'

export const metadata = {
  title: 'اوستاشو آموزش آنلاین',
  description: 'سایت اوستاشو آموزش آنلاین برنامه نویسی در راستای ورود به بازار کار ',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir='rtl'>
      <body className='bg-gray-100 dark:bg-slate-800'>
        <Provider>
        <ContextProvider>
       <Header />
        {children}
      <Footer />
      </ContextProvider>
      </Provider>
      <Tostify />
        </body>
    </html>
  )
}
