import { Button } from "@/components/ui/button"
import {
  Form,  
  FormLabel,  
} from "@/components/ui/form"
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Search, X } from "lucide-react"
import { CityInput } from "@/shared/components/CityInput"
import { useQueryParams } from "@/contexts/query-params.context"
import { StatesSelect } from "@/shared/components/StatesSelect"
import { MinPriceInput } from "@/shared/components/MinPriceInput"
import { MaxPriceInput } from "@/shared/components/MaxPriceInput"

const searchFormSchema = z.object({
  city: z.string().optional(),
  state: z.string().optional(),
  minPrice: z.number().min(0).max(1000).optional(), 
  maxPrice: z.number().min(0).max(1000).optional(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

export function SearchForm() {
  const { setQueryParams, queryParams, clearAllQueryParams } = useQueryParams();
  
  const formMethods = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
    defaultValues: {
      city: queryParams.city ?? undefined,
      state: queryParams.state ?? undefined,
      minPrice: queryParams.minPrice ?? undefined,
      maxPrice: queryParams.maxPrice ?? undefined,      
    },
  })
  
  const {    
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = formMethods;

   const clearForm = () => {    
    reset();
    clearAllQueryParams();
  }

  function handleSearch(data: SearchFormInputs) {    
    setQueryParams(data);
  }

  return (
    <div className="border-2 border-cyan-900 rounded-full !pt-4 !pb-6 px-2 my-6 sr-only md:not-sr-only flex flex-row items-end">
      <Form {...formMethods}>
        <form 
          onSubmit={handleSubmit((data) => {
            console.log("submit chamado", data);
            handleSearch(data);
          })} 
          className='w-full flex flex-row items-end justify-center gap-3 ps-8'
        >
          <CityInput formMethods={formMethods} />

          <StatesSelect formMethods={formMethods} />
          
          <div className="space-y-2 w-full">
            <FormLabel>Faixa de Preço</FormLabel>

            <div className="flex flex-row items-center gap-2">
              <MinPriceInput formMethods={formMethods} />

              <MaxPriceInput formMethods={formMethods} />
            </div>
          </div>

          <Button type="submit" disabled={isSubmitting} className="rounded-full">            
            <Search size={20} />
          </Button>         
        </form>
      </Form>
      <Button 
        type="submit"
        disabled={isSubmitting}
        className="rounded-full ms-3 me-8"
        variant="destructive"
        onClick={clearForm}
      >
        <X size={20} />
      </Button>
    </div>
     
  )
}