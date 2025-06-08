import z from "zod";
import { Button } from "../ui/button";
import { DialogFooter, DialogHeader, Dialog, DialogClose, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "../ui/dialog";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useQueryParams } from "@/contexts/query-params.context";
import { Filter, Search } from "lucide-react";
import { Separator } from "../ui/separator";
import { PropertyTypeSelect } from "@/shared/components/PropertyTypeSelect";
import { MaxGuestsSlider } from "@/shared/components/MaxGuestsSlider";
import { BedroomsSlider } from "@/shared/components/BedroomsSlider";
import { AmenitiesCheckbox } from "@/shared/components/AmenitiesCheckbox";
import { AvailableCheckbox } from "@/shared/components/AvailableCheckbox";
import { Form } from "../ui/form";

const SearchfilterModalSchema = z.object({ 
  propertyType: z.string().optional(),
  maxGuests: z.number().min(0).max(15).default(0).optional(),
  bedrooms: z.number().min(0).max(10).default(0).optional(),
  amenities: z.array(z.string()).optional(),
  isAvailable: z.boolean().optional(),
})

type SearchFilterInputs = z.infer<typeof SearchfilterModalSchema>

export function MoreFilterModal() {
  const { setQueryParams, clearAllQueryParams, queryParams } = useQueryParams();
  const [open, setOpen] = useState(false);  

  const formMethods = useForm<SearchFilterInputs>({
    resolver: zodResolver(SearchfilterModalSchema),
    defaultValues: {     
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

  function handleSearch(data: SearchFilterInputs) {
    setOpen(false);
    setQueryParams(data);
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className='sr-only md:not-sr-only !py-2 !w-24' variant="outline">
          <Filter size={20} /> 
          Filtros
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md max-h-screen overflow-y-auto" aria-describedby="Modal para reservar uma acomodação">
        <DialogHeader>
          <DialogTitle>Filtros de Busca</DialogTitle>
          <DialogDescription>
            Refine sua busca de acomodações com os filtros abaixo.
          </DialogDescription>
        </DialogHeader>
        <Form {...formMethods}>
          <form 
            onSubmit={handleSubmit((data) => handleSearch(data))} 
            className='w-full flex flex-col items-end justify-center gap-3'
          >
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
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="secondary" className="w-full" onClick={clearForm}>Limpar Filtro</Button>
          </DialogClose>   
          <DialogClose asChild>
            <Button variant="outline">Fechar</Button>
          </DialogClose>          
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}