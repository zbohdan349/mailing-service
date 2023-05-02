
import { Mailing, MailingElement, MailingStatus } from "../components/mailing";
import MainLayout from "../layouts/mainLayout"

import { Container, Typography } from "@mui/material";


const mailingInfo: Mailing[] = [
	{
		mailingName: 'Test Mailing 1',
		mailingStatus: MailingStatus.ACTIVE
	},
	{
		mailingName: 'Test Mailing 2',
		mailingStatus: MailingStatus.ACTIVE
	},
	{
		mailingName: 'Test Mailing 3',
		mailingStatus: MailingStatus.ACTIVE
	},
	{
		mailingName: 'Test Mailing 4',
		mailingStatus: MailingStatus.ACTIVE
	},
	{
		mailingName: 'Test Mailing 5',
		mailingStatus: MailingStatus.ACTIVE
	},
]

const printMailings = (mailingsInfo: Mailing[]) => {
	return mailingsInfo.map((mailing) => {
		return <MailingElement mailingName={mailing.mailingName} mailingStatus={MailingStatus.ACTIVE} />
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