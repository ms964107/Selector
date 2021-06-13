import { StyleSheet } from 'react-native';

export const layout = StyleSheet.create({
	layout: {
		width: "100%",
		height: "100%",
		backgroundColor: "rgba(247, 247, 243, 1)",
		// flex: 1,
	}
})

export const mainLevel = StyleSheet.create({
	main: {
		// flex: 1,
		width: "100%",
		height: "60%",
	},
	top: {
		width: "100%",
		fontSize: 30,
		paddingTop: "10%",
		display: "flex",
	},
	headerWrapper: {
		// flex: 1,
		display: "flex",
		// flexDirection: "row",
	},
	headerText: {
		// display: "flex",
		textAlign: "center",
		fontSize: 25,
		// marginLeft: "20%",
		// fontFamily: "cursive",
	},
	headerEmoji: {
		marginLeft: 10,
		// display: "flex",
		textAlign: "center",
		fontSize: 35,
		// fontFamily: "sans-serif",
	},
	addCategory: {
		display: "flex",
		position: "absolute",
		right: 10,
		bottom: -10,
	},
	question: {
		marginTop: "10%",
		fontSize: 25,
		marginBottom: "5%",
		textAlign: "center",
	},
	category: {
		marginTop: "10%",
		marginBottom: "5%",
		width: "80%",
		marginRight: "auto",
		marginLeft: "auto",
	},
	categoryHeader: {
		marginBottom: "5%",
		textAlign: "center",
		fontSize: 20,
	},
	choose: {
		width: "auto",
		marginRight: "auto",
		marginLeft: "auto",
	},
	result: {
		paddingTop: "15%",
		fontSize: 30,
		textAlign: "center",
	}
})

export const botLevel = StyleSheet.create({
	bot: {
		// width: "100%",
		// height: "20%",
		display: "flex",
		textAlign: "center",
	},
	language: {
		// top: 0,
		// width: "60%",
		// display: "flex",
		// // marginBottom: 15,
		// marginHorizontal: "20%",
		top: 40,
		height: "auto",
	},
	flag: {
		marginRight: 10,
	},
	about: {
		// flex: 1,
		justifyContent: "center",
		marginRight: "auto",
		marginLeft: "auto",
	},
	authorWrapper: {
		display: "flex",
		flexDirection: "row",
	},
	app: {
		fontStyle: 'italic',
		textAlign: "center",
		color: 'rgba(180, 180, 180, 1)',
	},
	textAlign: {
		textAlign: "center",
		color: 'rgba(180, 180, 180, 1)',
	}
})
