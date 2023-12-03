import {
	Box,
	Avatar,
	Divider,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
} from '@mui/material';

const HiddenSide = () => (
	<Box>
		<Avatar />
		<Divider />
		<List>
			<ListItem>{}</ListItem>
		</List>
	</Box>
);

export default HiddenSide