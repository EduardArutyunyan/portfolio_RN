import React, { useState } from 'react';

import { StyleSheet, Text, View } from 'react-native';
import { AppLoading } from 'expo';
import { loadAssets } from './src/loadAssets';

import { MainRouter } from './src/router';


export default function App() {
	const [ isReady, setIsReady ] = useState(false);

	if(!isReady) {
		return <AppLoading 
				startAsync={loadAssets}
				onFinish={() => setIsReady(true)} 
				onError={(err) => console.log(err)}/>
	}

	return (
		<MainRouter />
	);
}