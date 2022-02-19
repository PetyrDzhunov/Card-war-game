import createStyles from '@mui/styles/createStyles'
import makeStyles from '@mui/styles/makeStyles'
import { observer } from 'mobx-react-lite';
import { DrawerStore } from '../../store/DrawerStore';
import { drawerWidth } from '../Drawer/Drawer';

const useStyles = makeStyles(() =>
	createStyles({
		footer: {
			position: "absolute",
			bottom: 0,
			width: "100%",
			backgroundColor: "blue",
			height: "3.5rem",
			display: "flex",
			justifyContent: "center",
			alignItems: "center",
			borderTop: "5px solid green !important",
		},
		footerParagraph: {
			textAlign: "center",
			color: "#fff",
			margin: "0 !important",
			fontSize: "24px",
			verticalAlign: "middle"
		},
		shrinkedFooter: {
			position: "absolute",
			marginLeft: drawerWidth,
			bottom: 0,
			width: `calc(100% - ${drawerWidth}px) !important`,
			backgroundColor: "blue",
			height: "3.5rem",
			display: "flex",
			justifyContent: "center",
			alignItems: "center",
			borderTop: "5px solid green !important",
		}
	}),
)

const Footer = observer(() => {
	const classes = useStyles();
	const { isDrawerOpen } = DrawerStore
	return (
		<footer className={isDrawerOpen ? classes.shrinkedFooter : classes.footer}>
			<p className={classes.footerParagraph}>&copy; Petar Dzhunov</p>
		</footer>
	);
});

export default Footer;