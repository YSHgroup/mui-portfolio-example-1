import React from 'react';
import { Box, AppBar, Toolbar, IconButton, Typography, Drawer } from '@mui/material';
import { ArrowBack } from '@mui/icons-material';
import HiddenSide from './HiddenSide'

export default function Navbar() {
	const [open, setOpen] = React.useState(false)
	return (
		<>
			<Box component={'nav'}>
				<AppBar>
					<Toolbar>
						<IconButton onClick={() => setOpen(!open)}>
							<ArrowBack />
						</IconButton>
						<Typography variant='h5'>Portfolio</Typography>
					</Toolbar>
				</AppBar>
			</Box>
			<Drawer open={open} anchor='right' onClose={() => setOpen(false)} >
			<HiddenSide />
			{/* <Footer/> */}
			</Drawer>
		</>
	);
}
