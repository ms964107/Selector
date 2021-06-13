import React, { useState } from 'react';
import { View, Text, Image, Picker } from "react-native";
import { layout, mainLevel, botLevel } from './style.js/index.js';
import '../const/const.js'
import * as en from '../const/category_en.js'
import * as zh from '../const/category_zh.js'
import { language, question, category, select } from '../const/const.js';
import { Button, IconButton, Provider } from 'react-native-paper';
import  DropDown  from  'react-native-paper-dropdown';

export default function HomeScreen({ navigation }) {
	return (
		<Button
			title="Go to Jane's profile"
			onPress={() =>
			navigation.navigate('Home')
			}
		/>
	);
};