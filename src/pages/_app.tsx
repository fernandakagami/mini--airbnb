import { Header } from '@/components/Header'
import { QueryParamsProvider } from '@/contexts/query-params.context'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Toaster } from 'sonner'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryParamsProvider>
      <div className='flex flex-col min-h-screen max-w-5xl mx-auto px-6 pt-6 pb-6'>
        <Header />
        <Component {...pageProps} />
        <Toaster />
      </div>
    </QueryParamsProvider>
  )    
}
