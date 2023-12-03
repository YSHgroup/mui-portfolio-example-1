import { Box, Grid, Avatar, Typography } from '@mui/material';
import { TypeAnimation } from 'react-type-animation';
import avatar from '../assets/avatar.jpg'

export default function Header() {
	return (
		<Box sx={{
			position: 'absolute',
			top: '50%',
			left: '50%',
			transform: 'translate(-50%, -50%)',
			textAlign: 'center',
			width: '100vw',
			zIndex: 1
		}} >
			<Grid container justifyContent={'center'}>
				<Avatar src={avatar} sx={{height: '120px', width: '120px', margin: '15px' }} />
			</Grid>
			<Typography variant='h4'>
				<TypeAnimation sequence={['David']} speed={40} />
			</Typography>
				<Typography variant='h5' sx={{color: "chocolate", textTransform: 'uppercase' }}>
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
