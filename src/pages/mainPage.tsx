
import { Empty, JSONCodec, connect } from "nats.ws";
import { ActiveMailing, ActiveMailingElement } from "../components/activeMailing";

import MainLayout from "../layouts/mainLayout"

import { Container, Typography } from "@mui/material";
import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "preact/hooks";
import { natsRequest } from "../hooks/useNatsRequest";

export const mainPageLoader = async () => {

	let r = await natsRequest<ActiveMailing[]>('hello')

	return { ...r }
}

const printMailings = (mailingsInfo: ActiveMailing[]) => {
	return mailingsInfo.map((mailing, i) => {
		return <ActiveMailingElement key={i} mailingName={mailing.mailingName} />
	})
}

export const MainPage = () => {
	const [mailings, setMailings] = useState<ActiveMailing[]>([])

	const result = useLoaderData() as {
		headers: string[] | undefined;
		data: ActiveMailing[];
	};

	useEffect(() => {
		setMailings(result.data)
	}, [result])
	return (
		<MainLayout>
			<Container maxWidth="md" >
				<Typography variant="h2" gutterBottom>
					{"Active mailing"}
				</Typography>
				{printMailings(mailings)}
			</Container>
		</MainLayout>
	)
}