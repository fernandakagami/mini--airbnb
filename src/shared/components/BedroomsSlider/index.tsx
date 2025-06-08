import { FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Slider } from "@/components/ui/slider";
import React from "react";
import { UseFormReturn } from "react-hook-form";

interface BedroomsSliderProps {
  formMethods: UseFormReturn<any>; 
}

export function BedroomsSlider({ formMethods }: BedroomsSliderProps) {
  return (
    <FormField
      control={formMethods.control}
      name="bedrooms"
      render={({ field }) => (
        <FormItem className="w-full">
          <FormLabel>Quantidade de Quartos</FormLabel>
          <FormControl className="pt-4">
            <div className="w-full flex flex-row items-center gap-3">
              <Slider
                max={10}
                step={1}
                min={0}                
                onValueChange={(vals) => {
                  field.onChange(vals[0]);
                }}
                value={[field.value]}
              />
              <div className="font-medium">{field.value ?? 0}</div>
            </div>
          </FormControl>
        </FormItem>
      )}
    />
  )
}