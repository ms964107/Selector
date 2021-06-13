import { StyleSheet } from 'react-native';

export const layout = StyleSheet.create({
	layout: {
		width: "100%",
		height: "100%",
		backgroundColor: "rgba(247, 247, 243, 1)",
	}
})

export const mainLevel = StyleSheet.create({
	main: {
		width: "100%",
		height: "55%",
	},
	top: {
		width: "100%",
		fontSize: 30,
		paddingTop: "5%",
		display: "flex",
	},
	headerWrapper: {
		display: "flex",
	},
	headerText: {
		textAlign: "center",
		fontSize: 25,
	},
	headerEmoji: {
		marginLeft: 10,
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
		marginTop: "5%",
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
		paddingTop: "7%",
		fontSize: 30,
		textAlign: "center",
	}
})

export const botLevel = StyleSheet.create({
	bot: {
		display: "flex",
		textAlign: "center",
	},
	language: {
		top: 50,
		height: "auto",
	},
	flag: {
		marginRight: 10,
	},
	about: {
		top: 15,
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
