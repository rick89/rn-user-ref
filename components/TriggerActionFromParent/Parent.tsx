// renders button to focus an input

import { useRef } from 'react';
import { Button, TextInput, View } from 'react-native';
import { ChildHandle } from './Child';

export const Parent = () => {
	const inputRef = useRef<ChildHandle>(null);

	const handleClick = () => {
		inputRef.current?.focusInput();
	};

	return (
		<View style={{ flex: 1, justifyContent: 'center' }}>
			<TextInput ref={inputRef} />
			<Button title='Focus input' onPress={handleClick} />
		</View>
	);
};
