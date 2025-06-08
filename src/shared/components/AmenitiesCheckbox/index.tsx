import { Checkbox } from "@/components/ui/checkbox";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { allAmenities } from "@/shared/data/amenities-parser";
import { CheckboxProps, CheckedState } from "@radix-ui/react-checkbox";
import { UseFormReturn } from "react-hook-form";

interface AmenitiesCheckboxProps extends CheckboxProps {
  formMethods: UseFormReturn<any>;  
}

export function AmenitiesCheckbox({ formMethods }: AmenitiesCheckboxProps) {    
  return (
    <FormField
      control={formMethods.control}
      name="amenities"
      render={() => (
        <FormItem className="w-full">
          <div className="mb-4">
            <FormLabel className="text-base">Comodidades</FormLabel>
          </div>              
          <FormField
            control={formMethods.control}
            name="amenities"
            render={({ field }) => (
              <div className="flex flex-col gap-2">
                {allAmenities.map((item) => {
                  const checked = field.value?.includes(item.label) ?? false;
                  return (
                    <div key={item.label} className="flex items-center gap-2">
                      <Checkbox
                        checked={checked}
                        onCheckedChange={(checked) => {
                          const currentValues = Array.isArray(field.value) ? field.value : [];
                          if (checked) {
                            field.onChange([...currentValues, item.label]);
                          } else {
                            field.onChange(currentValues.filter(v => v !== item.label));
                          }
                        }}
                      />
                      <label className="text-sm">{item.label}</label>
                    </div>
                  );
                })}
              </div>
            )}
          />
      </FormItem>)}
   />     
  );
}
