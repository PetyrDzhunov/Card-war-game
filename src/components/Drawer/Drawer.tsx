import { List, ListItem, ListItemIcon, ListItemText, SwipeableDrawer, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useNavigate } from "react-router-dom";
import { routes } from "../../routes";
import { DrawerStore } from "../../store/DrawerStore";
import CasinoIcon from '@mui/icons-material/Casino';
import GamesIcon from '@mui/icons-material/Games';
export const drawerWidth = 200;

const useStyles = makeStyles(() => {
	return {
		drawer: {
			width: drawerWidth,
			position: 'absolute',
		},
		drawerPaper: {
			width: drawerWidth,
			backgroundColor: '#f4f4f4',
		},
		logo: {
			width: `calc(100% - 50px)`,
			paddingBottom: '30px',
			marginTop: '10px',
		},
		active: {
			backgroundColor: '#bebaba',
		},
		item: {
			margin: '15px 0',
		},
	}
})

const menuItems = [
	{ text: 'Card wars', path: routes.cardWar, icon: <GamesIcon /> },
	{ text: 'Poker', path: routes.poker, icon: <CasinoIcon /> },
]

const LayoutDrawer = () => {
	let navigate = useNavigate();
	const { isDrawerOpen } = DrawerStore;

	const classes = useStyles();
	return (
		<SwipeableDrawer
			elevation={2}
			ModalProps={{
				hideBackdrop: true,
			}}
			onOpen={() => null}
			onClose={() => null}
			open={isDrawerOpen}
			className={classes.drawer}
			variant="persistent"
			anchor="left"
			classes={{ paper: classes.drawerPaper }}>
			<Typography component="h1" variant="h4"
				sx={{ borderBottom: "2px solid blue", paddingBottom: "10px" }}
			>
				Pick a game
			</Typography>
			<List>
				{menuItems.map((item) => (
					<ListItem
						onClick={() => navigate(item.path)}
						button
						key={item.text}
						className={classes.item}>
						<ListItemIcon>{item.icon}</ListItemIcon>
						<ListItemText primary={item.text} />
					</ListItem>
				))}
			</List>
		</SwipeableDrawer>
	);
};

export default LayoutDrawer;