import { SafeAreaView, View } from 'react-native';
import { AccessDOMElements } from './components/AccessDOMElements';
import { StoringPreviousStateValues } from './components/StoringPreviousStateValues';
import { Parent } from './components/TriggerActionFromParent/Parent';
import { ChangeInputValue } from './components/ChangeInputValue';
import { ChangeViewStyle } from './components/ChangeViewStyle';

export default function App() {
	return (
		<SafeAreaView style={{ flex: 1, padding: 8 }}>
			{/* <AccessDOMElements /> */}
			{/* <StoringPreviousStateValues /> */}
			{/* <Parent /> */}
			<ChangeInputValue />
			<ChangeViewStyle />
		</SafeAreaView>
	);
}
