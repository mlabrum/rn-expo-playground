import React from "react";
import {
	Container,
	Button,
	Text,
	Header,
	Left,
	Right,
	Body,
	Icon,
	Title,
	Content
} from "native-base";

const NotHome =  () => (
	<Container>
		<Content>
			<Text>NOTHOME!</Text>
			<Button>
				<Text>Button</Text>
			</Button>
		</Content>
	</Container>
);

NotHome.navigationOptions = {
	title: "NOTHOME"
}

export default NotHome