import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,  
  SheetDescription,  
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { zodResolver } from "@hookform/resolvers/zod"
import { Search } from "lucide-react"
import { useForm } from "react-hook-form"
import z from "zod"
import {
  Form,  
  FormLabel,  
} from "@/components/ui/form"
import { PropertyTypeSelect } from "@/shared/components/PropertyTypeSelect"
import { AmenitiesCheckbox } from "@/shared/components/AmenitiesCheckbox"
import { AvailableCheckbox } from "@/shared/components/AvailableCheckbox"
import { StatesSelect } from "@/shared/components/StatesSelect"
import { useQueryParams } from "@/contexts/query-params.context"
import { useState } from "react"
import { CityInput } from "@/shared/components/CityInput"
import { MinPriceInput } from "@/shared/components/MinPriceInput"
import { MaxPriceInput } from "@/shared/components/MaxPriceInput"
import { MaxGuestsSlider } from "@/shared/components/MaxGuestsSlider"
import { BedroomsSlider } from "@/shared/components/BedroomsSlider"
import { Separator } from "../ui/separator"

const SearchSheetSchema = z.object({
  city: z.string().optional(),
  state: z.string().optional(),
  minPrice: z.number().min(0).max(1000).optional(), 
  maxPrice: z.number().min(0).max(1000).optional(),
  propertyType: z.string().optional(),
  maxGuests: z.number().min(0).max(15).default(0).optional(),
  bedrooms: z.number().min(0).max(10).default(0).optional(),
  amenities: z.array(z.string()).optional(),
  isAvailable: z.boolean().optional(),
})

type SearchFormInputs = z.infer<typeof SearchSheetSchema>

export function SearchSheetMobile() {
  const { setQueryParams, clearAllQueryParams, queryParams } = useQueryParams();
  const [open, setOpen] = useState(false);  

  const formMethods = useForm<SearchFormInputs>({
    resolver: zodResolver(SearchSheetSchema),
    defaultValues: {
      city: queryParams.city ?? undefined,
      state: queryParams.state ?? undefined,
      minPrice: queryParams.minPrice ?? undefined,
      maxPrice: queryParams.maxPrice ?? undefined,
      propertyType: queryParams.propertyType ?? undefined,
      maxGuests: queryParams.maxGuests ?? 0,
      bedrooms: queryParams.bedrooms ?? 0,
      amenities: queryParams.amenities ?? [],
      isAvailable: queryParams.isAvailable ?? false,
    },
  })  

  const {
    reset,
    handleSubmit,    
    formState: { isSubmitting },
  } = formMethods;

  const clearForm = () => {    
    reset();
    clearAllQueryParams();
  }

  function handleSearch(data: SearchFormInputs) {
    setOpen(false);
    setQueryParams(data);
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>        
        <Button className='w-full py-6 md:sr-only not-sr-only'>
          <Search size={20} /> 
          Inicie sua busca
        </Button>        
      </SheetTrigger>      
      <SheetContent 
        className="max-h-screen overflow-y-auto"        
      >
        <SheetHeader>
          <SheetTitle>Filtros de Busca</SheetTitle>
          <SheetDescription>
            Refine sua busca de acomodações com os filtros abaixo.
          </SheetDescription>
        </SheetHeader>
        <div className="px-3">
          <Form {...formMethods}>
            <form 
              onSubmit={handleSubmit((data) => handleSearch(data))} 
              className='w-full flex flex-col items-end justify-center gap-3'
            >
              <CityInput formMethods={formMethods} />

              <StatesSelect formMethods={formMethods} />

              <Separator />

              <div className="space-y-2 w-full">
                <FormLabel>Faixa de Preço</FormLabel>

                <MinPriceInput formMethods={formMethods} />

                <MaxPriceInput formMethods={formMethods} />
              </div>

              <Separator />

              <PropertyTypeSelect formMethods={formMethods} />                 

              <MaxGuestsSlider formMethods={formMethods} />

              <BedroomsSlider formMethods={formMethods} />

              <AmenitiesCheckbox formMethods={formMethods} />

              <Separator />

              <AvailableCheckbox formMethods={formMethods} />              

              <Button type="submit" disabled={isSubmitting} className="w-full">
                Buscar
                <Search size={20} />
              </Button>
            </form>
          </Form>       
        </div>
        <SheetFooter className="mt-3">
          <SheetClose asChild>
            <Button variant="outline" className="mx-3" onClick={clearForm}>Limpar Filtro</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}