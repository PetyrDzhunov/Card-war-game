import { Box, IconButton, Typography } from '@mui/material';
import AppBar from '@mui/material/AppBar'
import { makeStyles } from '@mui/styles'
import { drawerWidth } from '../Drawer/Drawer';
import LayoutDrawer from '../Drawer/Drawer';
import { Toolbar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu'
import { DrawerStore } from '../../store/DrawerStore';
import { observer } from 'mobx-react-lite';


export const appbarHeight = "3.5rem";

const useStyles = makeStyles(() => {
	return {
		appbar: {
			width: '100%',
			height: appbarHeight,
			borderBottom: "5px solid green !important",
			backgroundColor: "blue !important",
			display: "flex",
			justifyContent: "center"

		},
		shrinkedAppbar: {
			width: `calc(100% - ${drawerWidth}px) !important`,
			height: appbarHeight,
			backgroundColor: "blue !important",
			borderBottom: "5px solid green !important",
			display: "flex",
			justifyContent: "center"
		},
	}
})



const Appbar = observer(() => {
	const { isDrawerOpen, closeDrawer, openDrawer } = DrawerStore;


	const changeHandler = () => {
		isDrawerOpen ? closeDrawer() : openDrawer()
	}

	const classes = useStyles();
	return (
		<AppBar className={isDrawerOpen ? `${classes.shrinkedAppbar}` : `${classes.appbar}`}>
			<Toolbar disableGutters>
				<LayoutDrawer />
				<IconButton onClick={changeHandler} sx={{ mr: 2 }}>
					<MenuIcon sx={{ color: "#fff" }} />
				</IconButton>
				<Box sx={{ flexGrow: "1" }}>
					<Typography mt={1} sx={{ fontSize: "24px" }}
						component="h1" variant='body2' align='center'>Card Games
					</Typography>
				</Box>

			</Toolbar>

		</AppBar>
	);
})


export default Appbar;