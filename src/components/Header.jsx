import { Box, Grid, Avatar, Typography } from '@mui/material';
import Typed from 'react-typed';

export default function Header() {
	return (
		<Box>
			<Grid>
				<Avatar />
			</Grid>
			<Typography variant='h4'>
				<Typed strings={['David']} typeSpeed={40} />
			</Typography>
			<Typography>
				<Typed
					strings={[
						'Front End Developer',
						'Backend Developer',
						'Native App Developer',
					]}
					typeSpeed={40}
					backSpeed={50}
					loop
				/>
			</Typography>
		</Box>
	);
}
