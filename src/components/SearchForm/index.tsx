import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Search, X } from "lucide-react";

import { Form, FormLabel } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { CityInput } from "@/shared/components/CityInput";
import { useQueryParams } from "@/contexts/query-params.context";
import { StatesSelect } from "@/shared/components/StatesSelect";
import { MinPriceInput } from "@/shared/components/MinPriceInput";
import { MaxPriceInput } from "@/shared/components/MaxPriceInput";

const searchFormSchema = z.object({
	city: z.string().optional(),
	state: z.string().optional(),
	minPrice: z.number().min(0).max(1000).optional(),
	maxPrice: z.number().min(0).max(1000).optional(),
});

type SearchFormInputs = z.infer<typeof searchFormSchema>;

export function SearchForm() {
	const { setQueryParams, queryParams, clearAllQueryParams } = useQueryParams();

	const formMethods = useForm<SearchFormInputs>({
		resolver: zodResolver(searchFormSchema),
		defaultValues: {
			city: queryParams.city ?? undefined,
			state: queryParams.state ?? undefined,
			minPrice: queryParams.minPrice ?? undefined,
			maxPrice: queryParams.maxPrice ?? undefined,
		},
	});

	const {
		handleSubmit,
		reset,
		formState: { isSubmitting },
	} = formMethods;

	const clearForm = () => {
		reset();
		clearAllQueryParams();
	};

	function handleSearch(data: SearchFormInputs) {
		setQueryParams(data);
	}

	return (
		<div className="sr-only my-6 flex flex-row items-end rounded-full border-2 border-cyan-900 px-2 !pb-6 !pt-4 md:not-sr-only">
			<Form {...formMethods}>
				<form
					onSubmit={handleSubmit((data) => {
						handleSearch(data);
					})}
					className="flex w-full flex-row items-end justify-center gap-3 ps-8"
				>
					<CityInput formMethods={formMethods} />

					<StatesSelect formMethods={formMethods} />

					<div className="w-full space-y-2">
						<FormLabel>Faixa de Preço</FormLabel>

						<div className="flex flex-row items-center gap-2">
							<MinPriceInput formMethods={formMethods} />

							<MaxPriceInput formMethods={formMethods} />
						</div>
					</div>

					<Button type="submit" disabled={isSubmitting} className="rounded-full">
						<Search size={20} />
					</Button>
				</form>
			</Form>
			<Button
				type="submit"
				disabled={isSubmitting}
				className="me-8 ms-3 rounded-full"
				variant="destructive"
				onClick={clearForm}
			>
				<X size={20} />
			</Button>
		</div>
	);
}
