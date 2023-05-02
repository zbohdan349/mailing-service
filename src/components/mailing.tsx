import { ListItemButton, ListItemIcon, ListItemText, Box, Chip } from "@mui/material"
import { Link } from "react-router-dom"
import DraftsIcon from '@mui/icons-material/Drafts';
import MailIcon from '@mui/icons-material/Mail';

export enum MailingStatus {
	ACTIVE = 'Active',
	FINISHED = 'Finished'
}

export type Mailing = {
	mailingName: string;
	mailingStatus: MailingStatus;
}

export const MailingElement = (props: Mailing) => {
	return (
		<Link to={"/mailing/:mailingId"} relative="path">
			<ListItemButton
				sx={{ minHeight: 80, backgroundColor: 'whitesmoke', marginBottom: 1 }}>
				<ListItemIcon>
					{props.mailingStatus === MailingStatus.ACTIVE ? <DraftsIcon /> : <MailIcon />}
				</ListItemIcon>
				<ListItemText >{props.mailingName}</ListItemText>
				<Box component="div" sx={{ minWidth: 120 }}>
					{props.mailingStatus === MailingStatus.ACTIVE
						? <Chip label={props.mailingStatus} color="primary" variant="filled" />
						: <Chip label={props.mailingStatus} color="primary" variant="outlined" />
					}
				</Box>
			</ListItemButton>
		</Link>
	)
}