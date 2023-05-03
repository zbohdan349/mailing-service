import { ListItemButton, ListItemIcon, ListItemText, Box, Chip, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom"
import MailIcon from '@mui/icons-material/Mail';
import { MailingStatus } from "./activeMailing";

export type FinishedMailing = {
	mailingName: string;
	startDate: string;
	endData: string;
}

export const FinishedMailingElement = (props: FinishedMailing) => {
	const navigate = useNavigate()
	return (
		<ListItemButton
			sx={{ minHeight: 80, backgroundColor: 'whitesmoke', marginBottom: 1 }}
			onClick={() => { navigate('/mailing/:mailingId') }}>
			<ListItemIcon>
				<MailIcon />
			</ListItemIcon>
			<ListItemText >{props.mailingName}</ListItemText>
			<Box component="div" sx={{ minWidth: 120, display: 'flex', gap: 1 }}>
				<Box sx={{ display: 'flex', alignItems: 'center' }}>
					<Typography variant="body2">
						{`${props.startDate}-${props.endData}`}
					</Typography>
				</Box>
				<Chip label={MailingStatus.FINISHED} color="primary" variant="filled" />
			</Box>
		</ListItemButton>
	)
}