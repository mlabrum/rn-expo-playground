import React from "react";
import { Root, StyleProvider } from "native-base";
import { AppLoading, Asset, Font } from 'expo';
import Navigator from "./Navigator";
import getTheme from 'native-base/src/theme/components'
import themeVariables from './native-base-theme/variables/platform'

export default class App extends React.Component {
	state = {
		loading: true
	};

	async componentDidMount() {
		await Font.loadAsync({
			Roboto: require("native-base/Fonts/Roboto.ttf"),
			Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
		});
		this.setState({ loading: false });
	}

	render() {
		if (this.state.loading) {
			return <AppLoading />;
		} else {
			return (
				<Root>
					<StyleProvider style={getTheme(themeVariables)}>
						<Navigator />
					</StyleProvider>
				</Root>
			);
		
		}
	}
}