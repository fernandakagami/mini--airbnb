import { Header } from "@/components/Header";
import { Toaster } from "@/components/ui/sonner";
import { QueryParamsProvider } from "@/contexts/query-params.context";

import "@/styles/globals.css";
// eslint-disable-next-line import/order
import { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<QueryParamsProvider>
			<div className="mx-auto flex min-h-screen max-w-5xl flex-col px-6 pb-6 pt-6">
				<Header />
				<Component {...pageProps} />
				<Toaster />
			</div>
		</QueryParamsProvider>
	);
}
