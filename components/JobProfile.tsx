
import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet } from 'react-native';
import { Button, Card, Paragraph } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, View } from '../components/Themed';

export default function JobProfile() {

    return (
        <SafeAreaView style={styles.safe}>
            <View style={styles.container}>
                <Card style={styles.card} mode="outlined">
                    <Card.Title title="Company Name" subtitle="Position Name" />
                    <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
                    <Card.Content>
                        <Button>
                            hello
                    </Button>
                    </Card.Content>
                    <Card.Actions>
                        <Button>Cancel</Button>
                        <Button>Ok</Button>
                    </Card.Actions>
                </Card>

                {/* Use a light status bar on iOS to account for the black space above the modal */}
                <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
            </View>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    containcard: {
        width: '50%',
    },
    safe: {
        flex: 1
    },
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        // backgroundColor: 'tomato'
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black'
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
    card: {
        width: '90%',
        height: '120%',
        margin: 10
    },
});
