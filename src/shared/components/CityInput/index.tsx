import { FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import React from "react";
import { UseFormReturn } from "react-hook-form";

interface CityInputProps {
  formMethods: UseFormReturn<any>; 
}

export function CityInput({ formMethods }: CityInputProps) {
  return (
    <FormField
      control={formMethods.control}
      name="city"
      render={({ field }) => (
        <FormItem className="w-full">
          <FormLabel>Cidade</FormLabel>
          <FormControl>
            <Input 
              placeholder="Digite a cidade"
              value={field.value}
              onChange={field.onChange}
            />
          </FormControl>          
        </FormItem>
      )}
    />
  )
}