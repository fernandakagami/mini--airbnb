import { SelectProps } from "@radix-ui/react-select";
import { UseFormReturn } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useQueryParams } from "@/contexts/query-params.context";
import { statesOptions } from "@/shared/data/states-parser";

interface StatesSelectProps extends SelectProps {
	formMethods: UseFormReturn<any>;
}

export function StatesSelect({ formMethods }: StatesSelectProps) {
	const { setQueryParams, queryParams } = useQueryParams();

	const clearValue = (event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();
		setQueryParams({
			...queryParams,
			state: null,
		});
		formMethods.setValue("state", "");
	};

	return (
		<FormField
			control={formMethods.control}
			name="state"
			render={({ field }) => (
				<FormItem className="w-full">
					<FormLabel>Estado</FormLabel>
					<div className="flex flex-row gap-3">
						<Select value={field.value ?? ""} onValueChange={field.onChange}>
							<FormControl>
								<SelectTrigger>
									<SelectValue placeholder="Selecione o estado" />
								</SelectTrigger>
							</FormControl>
							<SelectContent>
								{statesOptions.map((state) => (
									<SelectItem key={state.value} value={state.value}>
										{state.label}
									</SelectItem>
								))}
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
