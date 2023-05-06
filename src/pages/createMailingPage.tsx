import MainLayout from "../layouts/mainLayout"
import { useState } from "preact/hooks";
import { Alert, Autocomplete, Box, Button, Container, Divider, Snackbar, TextField, Typography } from "@mui/material";
import MDEditor from "@uiw/react-md-editor";

enum UserGroups {
	ADMINS = "admins",
	MANAGERS = "managers",
	USERS = "users"
}

export const CreateMailingPage = () => {
	const [error, setError] = useState(false)
	const [mailingName, setMailingName] = useState('');
	const [mailingText, setMailingText] = useState('');
	const [mailingGroups, setMailingGroups] = useState<string[]>([]);
	return (
		<MainLayout>
			<Container maxWidth="md" >
				<Typography variant="h3" >
					Create mailing
				</Typography>
				<Divider sx={{ marginBottom: 2 }} />
				<TextField fullWidth label="Mailing name" sx={{ marginBottom: 4 }} onChange={(event) => { setMailingName(event.target.value) }} />

				<Typography variant="h5" >
					Mailing text
				</Typography>
				<Box sx={{ marginBottom: 3 }}>
					<div data-color-mode="light">
						<div className={"wmde-markdown-var"}> </div>
						<MDEditor value={mailingText} style={{ whiteSpace: 'pre-wrap' }} onChange={(val) => setMailingText(val || '')} />
					</div>
				</Box>

				<Autocomplete
					sx={{ marginBottom: 3 }}
					multiple
					id="tags-outlined"
					options={Object.values(UserGroups) as string[]}
					getOptionLabel={(option) => option}
					filterSelectedOptions
					onChange={(event, newValue) => {
						setMailingGroups(newValue);
					}}
					renderInput={(params) => (
						<TextField
							{...params}

							label="Groups for sending"
						/>
					)}
				/>

				<Button variant="contained" onClick={() => {
					console.log(mailingName)
					console.log(mailingText)
					console.log(mailingGroups)

					if (mailingGroups.length === 0 || !mailingText || !mailingName) setError(true)
				}}>Send</Button>
			</Container>
			<Snackbar open={error} autoHideDuration={6000} onClose={() => setError(!error)}>
				<Alert onClose={() => setError(!error)} severity="error" sx={{ width: '100%' }}>
					This is a success message!
				</Alert>
			</Snackbar>
		</MainLayout>
	)
}