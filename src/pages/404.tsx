import Head from "next/head";

export default function NotFound() {
	return (
		<>
			<Head>
				<title>404</title>
			</Head>
			<div className="wrapper">
				<h1>Not Found!</h1>
			</div>
		</>
	);
}
