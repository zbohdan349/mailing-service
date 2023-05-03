
import { ActiveMailing, ActiveMailingElement } from "../components/activeMailing";
import MainLayout from "../layouts/mainLayout"

import { Container, Typography } from "@mui/material";


const mailingInfo: ActiveMailing[] = [
	{
		mailingName: 'Test Mailing 1',
	},
	{
		mailingName: 'Test Mailing 2',
	},
	{
		mailingName: 'Test Mailing 3',
	},
	{
		mailingName: 'Test Mailing 4',
	},
	{
		mailingName: 'Test Mailing 5',
	},
]

const printMailings = (mailingsInfo: ActiveMailing[]) => {
	return mailingsInfo.map((mailing) => {
		return <ActiveMailingElement mailingName={mailing.mailingName} />
	})
}

export const MainPage = () => {

	return (
		<MainLayout>
			<Container maxWidth="md" >
				<Typography variant="h2" gutterBottom>
					{"Active mailing"}
				</Typography>
				{printMailings(mailingInfo)}
			</Container>
		</MainLayout>
	)
}