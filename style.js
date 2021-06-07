import { StyleSheet } from 'react-native';

export const layout = StyleSheet.create({
	layout: {
		width: "100%",
		height: "100%",
		backgroundColor: "rgba(247, 247, 243, 1)",
		justifyContent: "center",
		alignContent: "center",
		textAlign: "center",
		flex: 1,
	}
})

export const mainLevel = StyleSheet.create({
	main: {
		flex: 1,
		width: "100%",
		height: "85%",
		justifyContent: "center",
		alignContent: "center",
		textAlign: "center",
	},
	top: {
		width: "100%",
		textAlign: "center",
		fontSize: 30,
		paddingTop: 15 + "px",
	},
	headerText: {
		display: "flex",
		// fontFamily: "cursive",
	},
	headerEmoji: {
		marginLeft: 10 + "px",
		display: "flex",
		// fontFamily: "sans-serif",
	},
	addCategory: {
		display: "flex",
		position: "absolute",
		right: 0,
		top: 10 + "px",
	},
	question: {
		marginTop: "10%",
		fontSize: 15,
		marginBottom: "5%",
	},
	category: {
		marginTop: "10%",
		marginBottom: "5%",
	},
	categoryHeader: {
		marginBottom: "5%",
	},
	result: {
		paddingTop: "15%",
		fontSize: 30,
	}
})

export const botLevel = StyleSheet.create({
	bot: {
		width: "100%",
		height: "15%",
		display: "flex",
		justifyContent: "center",
		alignContent: "center",
		textAlign: "center",
	},
	language: {
		justifyContent: "center",
		alignContent: "center",
		width: "100%",
		display: "flex",
		marginBottom: 15 + "px",
	},
	flag: {
		marginRight: 10 + "px",
	},
	about: {
		flex: 1,
		justifyContent: "center",
		textAlign: "center",
		color: 'rgba(180, 180, 180, 1)',
	},
	authorWrapper: {
		display: "flex",
		flexDirection: "row",
	},
	app: {
		fontStyle: 'italic',
		marginRight: 5 + "px",
		flexDirection: "row",
	}
})
