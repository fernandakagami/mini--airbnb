import logoImg from '../../../public/logo.jpg'
import Image from 'next/image'
import { Button } from '../ui/button'
import { Search } from 'lucide-react'
import { SearchForm } from '../SearchForm'
import { useRouter } from 'next/navigation'
import { SearchSheetMobile } from '../SearchSheetMobile'
import { MoreFilterModal } from '../MoreFilterModal'

export function Header() {  
  const router = useRouter();
  
  return (
    <header className='mb-3 md:flex md:flex-col md:gap-3 md:items-center'>
      <div className="sr-only md:not-sr-only text-start !w-full">
        <Image 
          src={logoImg}
          alt="Logo Mini-Airbnb"
          width={50}
          height={50}
          onClick={() => router.push('/')}
          className='cursor-pointer w-auto h-auto'
          aria-description="Logo Mini-Airbnb"          
        />
      </div>
      <SearchForm />

      <SearchSheetMobile />
      <MoreFilterModal />
    </header>
  ) 
}