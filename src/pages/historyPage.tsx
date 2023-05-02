import { Container, Typography } from "@mui/material"
import { Mailing, MailingStatus, MailingElement } from "../components/mailing"
import MainLayout from "../layouts/mainLayout"

const mailingInfo: Mailing[] = [
	{
		mailingName: 'Test Mailing 1',
		mailingStatus: MailingStatus.FINISHED
	},
	{
		mailingName: 'Test Mailing 2',
		mailingStatus: MailingStatus.FINISHED
	},
	{
		mailingName: 'Test Mailing 3',
		mailingStatus: MailingStatus.FINISHED
	},
	{
		mailingName: 'Test Mailing 4',
		mailingStatus: MailingStatus.FINISHED
	},
	{
		mailingName: 'Test Mailing 5',
		mailingStatus: MailingStatus.FINISHED
	},
]

const printMailings = (mailingsInfo: Mailing[]) => {
	return mailingsInfo.map((mailing) => {
		return <MailingElement mailingName={mailing.mailingName} mailingStatus={mailing.mailingStatus} />
	})
}

export const HistoryPage = () => {

	return (
		<MainLayout>
			<Container maxWidth="md" >
				<Typography variant="h2" gutterBottom>
					{"History"}
				</Typography>
				{printMailings(mailingInfo)}
			</Container>
		</MainLayout>
	)
}