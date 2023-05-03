import MainLayout from "../layouts/mainLayout"
import { useState } from "preact/hooks";
import 'react-quill/dist/quill.snow.css';
import { Autocomplete, Box, Button, Container, Divider, TextField, Typography } from "@mui/material";
import MDEditor from "@uiw/react-md-editor";

const userGroups = [
	{ group: "admin" },
	{ group: "managers" },
	{ group: "users" },
];

export const CreateMailingPage = () => {
	const [value, setValue] = useState('');
	return (
		<MainLayout>
			<Container maxWidth="md" >
				<Typography variant="h3" >
					Create mailing
				</Typography>
				<Divider sx={{ marginBottom: 2 }} />
				<TextField fullWidth label="Mailing name" sx={{ marginBottom: 4 }} />

				<Typography variant="h5" >
					Mailing text
				</Typography>
				<Box sx={{ marginBottom: 3 }}>
					<div data-color-mode="light">
						<div className="wmde-markdown-var"> </div>
						<MDEditor value={value} style={{ whiteSpace: 'pre-wrap' }} onChange={(val) => setValue(val || '')} />
					</div>
				</Box>

				<Autocomplete
					sx={{ marginBottom: 3 }}
					multiple
					id="tags-outlined"
					options={userGroups}
					getOptionLabel={(option) => option.group}
					filterSelectedOptions
					renderInput={(params) => (
						<TextField
							{...params}
							label="Groups for sending"
						/>
					)}
				/>

				<Button variant="contained">Send</Button>
			</Container>
		</MainLayout>
	)
}