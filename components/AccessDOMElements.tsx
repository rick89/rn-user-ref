import { useRef } from 'react';
import { Button, Text, TextInput, View } from 'react-native';

export const AccessDOMElements = () => {
	const inputRef = useRef<TextInput>(null);
	const handleClick = () => {
		inputRef.current?.focus();
	};

	return (
		<View style={{ flex: 1, justifyContent: 'center' }}>
			<Text>Focus the input using the button below.</Text>
			<TextInput style={{ borderWidth: 1, padding: 10 }} ref={inputRef} />
			<Button title='Focus input' onPress={handleClick} />
		</View>
	);
};
