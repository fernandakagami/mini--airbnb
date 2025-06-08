import Image from "next/image";
import { useRouter } from "next/navigation";

import logoImg from "../../../public/logo.jpg";
import { SearchForm } from "../SearchForm";
import { SearchSheetMobile } from "../SearchSheetMobile";
import { MoreFilterModal } from "../MoreFilterModal";

export function Header() {
	const router = useRouter();

	return (
		<header className="mb-3 md:flex md:flex-col md:items-center md:gap-3">
			<div className="sr-only !w-full text-start md:not-sr-only">
				<Image
					src={logoImg}
					alt="Logo Mini-Airbnb"
					width={50}
					height={50}
					onClick={() => router.push("/")}
					className="h-auto w-auto cursor-pointer"
					aria-description="Logo Mini-Airbnb"
				/>
			</div>
			<SearchForm />

			<SearchSheetMobile />
			<MoreFilterModal />
		</header>
	);
}
