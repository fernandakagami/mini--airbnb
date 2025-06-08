import { UseFormReturn } from "react-hook-form";

import { FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

interface MinPriceInputProps {
	formMethods: UseFormReturn<any>;
}

export function MinPriceInput({ formMethods }: MinPriceInputProps) {
	return (
		<FormField
			control={formMethods.control}
			name="minPrice"
			render={({ field }) => (
				<FormItem>
					<FormControl>
						<Input
							placeholder="Mínimo"
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
