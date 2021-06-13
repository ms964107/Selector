import React, { useState } from 'react';
import { View, Text, Image, Picker } from "react-native";
import { layout, mainLevel, botLevel } from './style.js';
import './const/const.js'
import * as en from './const/category_en.js'
import * as zh from './const/category_zh.js'
import { language, question, category, select } from './const/const.js';
import { Button, IconButton, Provider } from 'react-native-paper';
import  DropDown  from  'react-native-paper-dropdown';
import ca from './icons/ca.png';
import tw from './icons/tw.png';

// CMD + I = inspector

export default function App() {
	// set language, 0 = Madarin, 1 = English
	const [lang, setLang] = useState(0);
	const [cat, setCat] = useState(zh.category[0].value);
	const [result, setResult] = useState('');
	const [showDropDownLang, setShowDropDownLang] = useState(false);
	const [showDropDown, setShowDropDown] = useState(false);

	const renderSelectHeader = () => {
		let header = category[cat]
		return lang == 0 ? header.header_zn : header.header
	}

	const renderResult = () => {
		let options = lang == 0 ? category[cat].options_zn : category[cat].options
		let option = Math.floor(Math.random() * options.length)
		while (result == options[option]) {
			option = Math.floor(Math.random() * options.length)
		}
		setResult(options[option])
	}

	const handleCategoryOnchange = (event) => {
		setResult('')
		setCat(event)
	}

	const handleLanguageOnchange = () => {
		setResult('')
		setLang(lang == 0 ? 1 : 0)
	}

	return (
		<Provider>
		<View className="layout" style={layout.layout}>
			<View className="main" style={mainLevel.main}>
				<View className="top" style={mainLevel.top}>
					<View className="header-wrapper" style={mainLevel.headerWrapper}>
						<Text className="header-text" style={mainLevel.headerText}>
							Selector   ʕ•ᴥ•ʔ
						</Text>
						{/* <Text className="header-emoji" style={mainLevel.headerEmoji}>
							ʕ•ᴥ•ʔ
						</Text> */}
					</View>
					<View className="add-category" style={mainLevel.addCategory}>
						<IconButton
							icon="plus"
						/>
					</View>
				</View>
				<View className="body">
					<Text className="question" style={mainLevel.question}>
						{question[lang]}
					</Text>
					<View className="category" style={mainLevel.category}>
						<DropDown
							value={cat}
							setValue={(event) => handleCategoryOnchange(event)}
							list={lang == 0 ? zh.category : en.category}
							visible={showDropDown}
							showDropDown={() => setShowDropDown(true)}
							onDismiss={() => setShowDropDown(false)}
						/>
					</View>
					<Text className="category-header" style={mainLevel.categoryHeader}>
						{renderSelectHeader()}
					</Text>
					<View className="choose" style={mainLevel.choose}>
						<Button
							variant="contained" 
							onPress={() => renderResult()}
							labelStyle={{
								fontSize: 25,
							}}
						>
							{select[lang]}
						</Button>
					</View>
					<Text className="result" style={mainLevel.result}>
						{result}
					</Text>
				</View>
			</View>
			<View className="bot" style={botLevel.bot}>
				<View className="language" style={botLevel.language}>
					<Picker
						selectedValue={lang}
						onValueChange={() => handleLanguageOnchange()}
						style={{
							width: "60%",
							display: "flex",
							// marginBottom: 15,
							marginHorizontal: "20%",
						}}
					>
						<Picker.Item label={language[0].label} value={language[0].value} />
						<Picker.Item label={language[1].label} value={language[1].value} />
					</Picker>
				</View>
				<View className="about" style={botLevel.about}>
					<View className="author-wrapper" style={botLevel.authorWrapper}>
						<Text className="app" style={botLevel.app}>Selector  </Text>
						<Text className="author" style={botLevel.textAlign}>by Martin Hsu</Text>
					</View>
					<Text className="version" style={botLevel.textAlign}>Version: 1.01</Text>
				</View>
			</View>
		</View>
		</Provider>
	);
}
