import React from 'react'
import {createStackNavigator, createDrawerNavigator, DrawerActions} from "react-navigation";
import themeVariables from '../native-base-theme/variables/platform'

import HomeScreen from "../Home";
import NotHomeScreen from "../NotHome";
import { TouchableHighlight } from 'react-native'
import { Icon } from 'native-base'
import HeaderButtons from 'react-navigation-header-buttons'

const subStackNavOptions = {
	headerMode: 'screen',
	navigationOptions: ({ navigation }) => ({
		headerStyle: {
			backgroundColor: themeVariables.toolbarDefaultBg,
		  },
		headerTintColor: themeVariables.toolbarInputColor,
		headerLeft: (
			<HeaderButtons left>
				<HeaderButtons.Item
					title="menu"

					IconElement={<Icon name="menu" fontSize={23} style={{color: themeVariables.toolbarBtnTextColor}}/>}
					onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
				
				/>
			</HeaderButtons>
		)
	})
}

const routes = {
	Home: {
		screen: HomeScreen
	},
	NotHome: {
		screen: NotHomeScreen
	}
}

for(let routeName in routes){
	routes[routeName].screen = createStackNavigator({routeName: routes[routeName].screen}, subStackNavOptions)
}

const draw =  createDrawerNavigator(
	routes
);

// Login handled here
export default createStackNavigator({
	draw
},
{headerMode: 'none'})