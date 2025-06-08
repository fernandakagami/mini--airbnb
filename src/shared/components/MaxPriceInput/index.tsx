import { UseFormReturn } from "react-hook-form";

import { FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

interface MaxPriceInputProps {
	formMethods: UseFormReturn<any>;
}

export function MaxPriceInput({ formMethods }: MaxPriceInputProps) {
	return (
		<FormField
			control={formMethods.control}
			name="maxPrice"
			render={({ field }) => (
				<FormItem>
					<FormControl>
						<Input
							placeholder="Máximo"
							type="number"
							value={field.value === 0 ? "" : field.value}
							onChange={(e) => {
								const val = e.target.value;
								field.onChange(val === "" ? undefined : Number(val));
							}}
						/>
					</FormControl>
				</FormItem>
			)}
		/>
	);
}
