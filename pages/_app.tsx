// pages/_app.tsx
import "@smartive-education/design-system-component-library-yeahyeahyeahyeah/tailwind.css"
import type { AppProps } from "next/app"
import GlobalStyles from "../styles/GlobalStyles"

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<GlobalStyles />
			<Component {...pageProps} />
		</>
	)
}

export default MyApp
