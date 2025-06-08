import { SelectProps } from "@radix-ui/react-select";
import { UseFormReturn } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useQueryParams } from "@/contexts/query-params.context";

interface PropertyTypeSelectProps extends SelectProps {
	formMethods: UseFormReturn<any>;
}

export function PropertyTypeSelect({ formMethods }: PropertyTypeSelectProps) {
	const { setQueryParams, queryParams } = useQueryParams();

	const clearValue = (event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();
		setQueryParams({
			...queryParams,
			propertyType: null,
		});
		formMethods.setValue("propertyType", "");
	};

	return (
		<FormField
			control={formMethods.control}
			name="propertyType"
			render={({ field }) => (
				<FormItem className="w-full">
					<FormLabel>Tipo de imóvel</FormLabel>
					<div className="flex flex-row gap-3">
						<Select value={field.value ?? ""} onValueChange={field.onChange}>
							<FormControl>
								<SelectTrigger>
									<SelectValue placeholder="Selecione o imóvel" />
								</SelectTrigger>
							</FormControl>
							<SelectContent>
								<SelectItem value="Apartamento">Apartamento</SelectItem>
								<SelectItem value="Casa">Casa</SelectItem>
								<SelectItem value="Chalé">Chalé</SelectItem>
								<SelectItem value="Cabana">Cabana</SelectItem>
								<SelectItem value="Flat">Flat</SelectItem>
							</SelectContent>
						</Select>
						<Button variant="destructive" size="icon" className="!size-8" onClick={clearValue}>
							X
						</Button>
					</div>
				</FormItem>
			)}
		/>
	);
}
