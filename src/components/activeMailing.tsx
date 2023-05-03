import { ListItemButton, ListItemIcon, ListItemText, Box, Chip } from "@mui/material"
import { useNavigate } from "react-router-dom"
import DraftsIcon from '@mui/icons-material/Drafts';



export enum MailingStatus {
	ACTIVE = 'Active',
	FINISHED = 'Finished'
}

export type ActiveMailing = {
	mailingName: string;
}

export const ActiveMailingElement = (props: ActiveMailing) => {
	const navigate = useNavigate()
	return (
		<ListItemButton
			sx={{ minHeight: 80, backgroundColor: 'whitesmoke', marginBottom: 1 }}
			onClick={() => { navigate('/mailing/:mailingId') }}>
			<ListItemIcon>
				<DraftsIcon />
			</ListItemIcon>
			<ListItemText >{props.mailingName}</ListItemText>
			<Box component="div" sx={{ minWidth: 120, display: 'flex', justifyContent: "center" }}>
				<Chip label={MailingStatus.ACTIVE} color="primary" variant="filled" />
			</Box>
		</ListItemButton>
	)
}
