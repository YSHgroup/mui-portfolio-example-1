import {
	Box,
	Avatar,
	Divider,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
    ListItemButton,
} from '@mui/material';
import {Home, AssignmentInd, Apps, ContactMail } from '@mui/icons-material'
import avatar from '../assets/avatar.jpg'

const menuItems = [
    {listIcon: <Home/>, listText: 'Home', listPatch: '/' },
    {listIcon: <AssignmentInd/>, listText: 'Resume', listPatch: '/resume' },
    {listIcon: <Apps/>, listText: 'Portfolio', listPatch: '/portfolio' },
    {listIcon: <ContactMail/>, listText: 'Contact', listPatch: '/contact' },
]

const HiddenSide = () => (
	<Box sx={{width: '250px', background: '#235', height: '100%'}}>
		<Avatar src={avatar} sx={{width: '120px', height: '120px', margin: '16px auto'}} />
		<Divider />
		<List>
			{
                menuItems.map((item, i) => (
                    <ListItemButton
                        sx = {{color: 'tan'}}
                    >
                        <ListItemIcon sx = {{color: 'tan'}}>
                            {item.listIcon}
                        </ListItemIcon>
                        <ListItemText primary={item.listText} />
                    </ListItemButton>)
                )
            }
		</List>
	</Box>
);

export default HiddenSide