import { Box, Container, LinearProgress, List, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material"
import DraftsIcon from '@mui/icons-material/Drafts';
import { Link, redirect } from "react-router-dom";


export type Mailing = {
	mailingName: string;
	mailingProgress: number;
}

const printMailings = (mailingsInfo: Mailing[]) => {
	return (
		<List
			sx={{ width: '100%' }}
		>
			{
				mailingsInfo.map((mailing) => {
					return <Link to={"/mailing/:mailingId"} relative="path">
						<ListItemButton
							onClick={() => { return redirect("mailing/:mailingId") }}
							sx={{ minHeight: 80, backgroundColor: 'whitesmoke', marginBottom: 1 }}>

							<ListItemIcon>
								<DraftsIcon />
							</ListItemIcon>
							<ListItemText >{mailing.mailingName}</ListItemText>
							<Box component="div" sx={{ minWidth: 120 }}>
								<LinearProgress variant="determinate" value={mailing.mailingProgress} />
							</Box>
						</ListItemButton>
					</Link>

				})
			}

		</List>
	)
}

export const MailingList = (props: { mailings: Mailing[], title: string }) => {
	return (
		<Container maxWidth="md" >
			<Typography variant="h2" gutterBottom>
				{props.title}
			</Typography>
			{printMailings(props.mailings)}
		</Container>
	)
}