import { useRef } from 'react';
import { Button, TextInput, View } from 'react-native';

export const ChangeInputValue = () => {
	const inputRef = useRef<TextInput>(null);

	const handleChangeValue = () => {
		console.log('handleChangeValue');
		inputRef.current?.setNativeProps({ value: 'new' });
	};

	return (
		<View>
			<TextInput ref={inputRef} value='Value to change' />
			<Button
				onPress={handleChangeValue}
				title='Change input value using ref'
			/>
		</View>
	);
};
