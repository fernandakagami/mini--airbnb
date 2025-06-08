import React from "react";
import { UseFormReturn } from "react-hook-form";

import { FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Slider } from "@/components/ui/slider";

interface MaxGuestsSliderProps {
	formMethods: UseFormReturn<any>;
}

export function MaxGuestsSlider({ formMethods }: MaxGuestsSliderProps) {
	return (
		<FormField
			control={formMethods.control}
			name="maxGuests"
			render={({ field }) => (
				<FormItem className="w-full">
					<FormLabel>Capacidade de Hóspedes</FormLabel>
					<FormControl className="pt-4">
						<div className="flex w-full flex-row items-center gap-3">
							<Slider
								max={15}
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
	);
}
