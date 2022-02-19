import { List, ListItem, ListItemIcon, ListItemText, SwipeableDrawer } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useNavigate } from "react-router-dom";
import { routes } from "../../routes";
import { DrawerStore } from "../../store/DrawerStore";
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
	{ text: 'Card game 1', path: routes.cardWar },
	{ text: 'Card game 2', path: routes.poker },
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
			<List>
				{menuItems.map((item) => (
					<ListItem
						onClick={() => navigate(item.path)}
						button
						key={item.text}
						className={classes.item}>
						<ListItemIcon>icon</ListItemIcon>
						<ListItemText primary={item.text} />
					</ListItem>
				))}
			</List>
		</SwipeableDrawer>
	);
};

export default LayoutDrawer;