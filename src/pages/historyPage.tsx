import { Container, Typography } from "@mui/material"
import MainLayout from "../layouts/mainLayout"
import { FinishedMailing, FinishedMailingElement } from "../components/finishedMailing"

const mailingInfo: FinishedMailing[] = [
	{
		mailingName: 'Test Mailing 1',
		startDate: '29.09.2000',
		endData: '30.09.2000'
	},
	{
		mailingName: 'Test Mailing 2',
		startDate: '29.09.2000',
		endData: '30.09.2000'
	},
	{
		mailingName: 'Test Mailing 3',
		startDate: '29.09.2000',
		endData: '30.09.2000'
	},
	{
		mailingName: 'Test Mailing 4',
		startDate: '29.09.2000',
		endData: '30.09.2000'
	},
	{
		mailingName: 'Test Mailing 5',
		startDate: '29.09.2000',
		endData: '30.09.2000'
	},
]

const printMailings = (mailingsInfo: FinishedMailing[]) => {
	return mailingsInfo.map((mailing) => {
		return <FinishedMailingElement  {...mailing} />
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