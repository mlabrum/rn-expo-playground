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
const Home =  () => (
	<Container>
		<Content>
			<Text>Hello</Text>
			<Button>
				<Text>Button</Text>
			</Button>
		</Content>
	</Container>
);

Home.navigationOptions = {
	title: "HomeMoo"
}

export default Home