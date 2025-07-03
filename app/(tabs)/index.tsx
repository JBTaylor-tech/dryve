import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import React from 'react';

export default function HomeScreen(): React.JSX.Element {
    return (
        <SafeAreaView className="flex-1 items-center justify-center bg-white">
            <Text>Dryve App!</Text>
            <StatusBar style="auto" />
        </SafeAreaView>
    );
}
