import MainLayout from "../layouts/mainLayout"
import { Mailing, MailingList } from "../components/mailingsList";

export const HistoryPage = () => {
	const mailingInfo: Mailing[] = [
		{
			mailingName: 'Test Mailing 1',
			mailingProgress: 0
		},
		{
			mailingName: 'Test Mailing 2',
			mailingProgress: 50
		},
		{
			mailingName: 'Test Mailing 3',
			mailingProgress: 78
		},
		{
			mailingName: 'Test Mailing 4',
			mailingProgress: 86
		},
		{
			mailingName: 'Test Mailing 5',
			mailingProgress: 100
		},
	]
	return (
		<MainLayout>
			<MailingList mailings={mailingInfo} title={"History"} />
		</MainLayout>
	)
}