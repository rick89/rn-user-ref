//renders input to be focused by parent

import { forwardRef, useImperativeHandle, useRef } from 'react';
import { TextInput, View } from 'react-native';

export type ChildHandle = {
	focusInput: () => void;
};

export const Child = forwardRef<ChildHandle>((props, ref) => {
	const inputRef = useRef<TextInput>(null);

	useImperativeHandle(ref, () => ({
		focusInput: () => {
			inputRef.current?.focus();
		},
	}));

	return (
		<View>
			<TextInput ref={inputRef} />
		</View>
	);
});
