import { RefObject, useEffect, useRef, useState } from 'react';
import { Button, Text, TextInput, View } from 'react-native';

export const StoringPreviousStateValues = () => {
	const [value, setValue] = useState('Richard');
	const previousValueRef = useRef<React.MutableRefObject<null>>(null);

	useEffect(() => {
		const previousValueRef.current = value;
		console.log('previousValueRef', previousValueRef);
	}, [value]);

	return (
		<View style={{ flex: 1, justifyContent: 'center' }}>
			<Button
				title='Change value'
				onPress={() => setValue('this is the current value')}
			/>
			<Text>Current value: {value}</Text>
			<Text>Previous value: {previousValueRef}</Text>
		</View>
	);
};
