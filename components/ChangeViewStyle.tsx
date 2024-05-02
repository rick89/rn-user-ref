import { useRef } from 'react';
import { Button, Text, View } from 'react-native';

export const ChangeViewStyle = () => {
	const viewRef = useRef<View>(null);

	const handleBackgroundColorChange = () => {
		console.log('change background');
		viewRef.current?.setNativeProps({
			style: { backgroundColor: 'purple' },
		});
	};

	return (
		<>
			<View
				ref={viewRef}
				style={{
					backgroundColor: 'red',
				}}
			>
				<Text>
					You can press the button to change the backgroun colour.
				</Text>
			</View>
			<Button
				title='Change background colour'
				onPress={handleBackgroundColorChange}
			/>
		</>
	);
};
