import { makeStyles } from '@mui/styles';
import { FC } from 'react';
import Appbar from '../../components/Appbar/Appbar';
import Footer from '../Footer.tsx/Footer';

const useStyles = makeStyles(() => {
	return {
		pageContainer: {
			position: "relative",
			minHeight: "100vh"
		},
		contentWrap: {
			paddingBottom: "3.5rem"
		},
	}
})

const Layout: FC = (props) => {
	const classes = useStyles();
	return (
		<div className={classes.pageContainer}>
			<div className={classes.contentWrap}>
				<Appbar />
				{props.children}
				<Footer />
			</div>
		</div>
	);
};

export default Layout;	