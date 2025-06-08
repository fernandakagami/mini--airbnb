import { Checkbox } from "@/components/ui/checkbox";
import { FormControl, FormField, FormItem } from "@/components/ui/form";
import { CheckboxProps } from "@radix-ui/react-checkbox";
import { UseFormReturn } from "react-hook-form";

interface AvailableCheckboxProps extends CheckboxProps {
  formMethods: UseFormReturn<any>; 
}

export function AvailableCheckbox({ formMethods }: AvailableCheckboxProps) {  
  return (
    <FormField
      control={formMethods.control}
      name="isAvailable"
      render={({ field }) => {
        return (
          <FormItem className="w-full">
            <FormControl>
              <div className="flex items-center gap-2">
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
                <label className="text-sm">Somente imóveis disponíveis</label>
              </div>              
            </FormControl>             
          </FormItem>   
        )
      }}
    />       
  );
}

