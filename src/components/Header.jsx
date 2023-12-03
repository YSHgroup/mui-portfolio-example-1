import { Box, Grid, Avatar, Typography } from '@mui/material';
import { TypeAnimation } from 'react-type-animation';

export default function Header() {
	return (
		<Box>
			<Grid>
				<Avatar />
			</Grid>
			<Typography variant='h4'>
				<TypeAnimation sequence={['David']} speed={40} />
			</Typography>
			<Typography variant='h5'>
				<TypeAnimation
					sequence={[
						// Same substring at the start will only be typed out once, initially
						'Front End Developer',
						1000, // wait 1s before replacing "Mice" with "Hamsters"
						'Backend Developer',
						1000,
						'Native App Developer',
						1000,
					]}
					wrapper='span'
					speed={30}
                    deletionSpeed={60}
					// style={{ fontSize: '2em', display: 'inline-block' }}
					repeat={Infinity}
				/>
			</Typography>
		</Box>
	);
}
