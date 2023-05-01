import { Alert, Box, Button, Collapse, Container, Divider, List, ListItem, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material"
import MainLayout from "../layouts/mainLayout"
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { useState } from "preact/hooks";


export const MailingPage = () => {
	const [openWarnings, setOpenWarnings] = useState(false);
	const [openErrors, setOpenErrors] = useState(false);


	return (
		<MainLayout>
			<Container maxWidth="md" >
				<Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
					<Typography variant="h3" >
						Mailing: {"Mailing name"}
					</Typography>
					<Button variant="contained" sx={{ m: 1 }}>Finish mailing</Button>
				</Box>
				<Divider sx={{ marginBottom: 1 }} />
				<Typography variant={"body1"} sx={
					{
						backgroundColor: "whitesmoke",
						p: 4,
						marginBottom: 2,
						wordWrap: 'break-word'
					}
				} >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi id aspernatur recusandae eos numquam a, maiores facilis animi iusto, quaerat atque hic molestiae delectus ea eius eum tempore, mollitia magni?</Typography>

				<Typography variant="h4" >
					Statistics
				</Typography>
				<Divider sx={{ marginBottom: 1 }} />
				<List
					sx={{ width: '100%' }}
					component="div"
				>
					<ListItem>
						<Alert severity="info" sx={
							{ width: '100%' }
						}>
							<Typography><strong>10</strong> Mailing participants</Typography>
						</Alert>
					</ListItem>
					<ListItem>
						<Alert severity="success" sx={
							{ width: '100%' }
						}>
							<Typography><strong>7</strong> Successfully delivered messages</Typography>
						</Alert>
					</ListItem>
					<ListItem onClick={() => { setOpenWarnings(!openWarnings) }}>
						<Alert severity="warning" sx={
							{ width: '100%' }
						} action={
							<>
								{openWarnings ? <ExpandLess /> : <ExpandMore />}
							</>
						}>
							<Typography><strong>2</strong> User side errors</Typography>
						</Alert>
					</ListItem>
					<Collapse in={openWarnings} timeout="auto" unmountOnExit>
						<TableContainer component={Container}>
							<Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
								<TableHead>
									<TableRow>
										<TableCell>User id</TableCell>
										<TableCell >Error</TableCell>
									</TableRow>
								</TableHead>
								<TableBody>
									<TableRow>
										<TableCell>3434d332423ds2</TableCell>
										<TableCell >Bot blocked</TableCell>
									</TableRow>
									<TableRow>
										<TableCell>3434d33aa4n3ds2</TableCell>
										<TableCell>Account deleted</TableCell>
									</TableRow>
								</TableBody>
							</Table>
						</TableContainer>
					</Collapse>
					<ListItem onClick={() => { setOpenErrors(!openErrors) }}>
						<Alert severity="error" sx={
							{ width: '100%' }
						} action={
							<>
								{openErrors ? <ExpandLess /> : <ExpandMore />}
							</>
						}>
							<Typography><strong>1</strong> Errors</Typography>
						</Alert>
					</ListItem>
					<Collapse in={openErrors} timeout="auto" unmountOnExit>
						<TableContainer component={Container}>
							<Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
								<TableHead>
									<TableRow>
										<TableCell>User id</TableCell>
										<TableCell >Error</TableCell>
									</TableRow>
								</TableHead>
								<TableBody>
									<TableRow>
										<TableCell>3434d332423ds2</TableCell>
										<TableCell >Some kind of mistake.</TableCell>
									</TableRow>
								</TableBody>
							</Table>
						</TableContainer>
					</Collapse>
				</List>
			</Container>
		</MainLayout>
	)
}