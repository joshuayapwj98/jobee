
import { StatusBar } from 'expo-status-bar';
import { Dimensions, Platform, ScrollView, StyleSheet } from 'react-native';
import { Button, Card, Paragraph } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, View } from '../components/Themed';
import TinderCard from 'react-tinder-card'
import React, { useState, useMemo, useRef, useEffect } from 'react'

export default function JobProfile() {
    let db = [
        {
            name: 'Company A',
            position: 'SWE Intern'
        },
        {
            name: 'Company B',
            position: 'DevOps'
        },
        {
            name: 'Company C',
            position: 'HR'
        },
        {
            name: 'Company D',
            position: 'Data Analyst'
        },
        {
            name: 'Company E',
            position: 'Data Scientist'
        }
    ]

    const [lastDirection, setLastDirection] = useState('')
    const [company, updateCompany] = useState(db);
    const [index, addIndex] = useState(0);

    // set last direction and decrease current index
    const swiped = (direction: string, nameToDelete: string) => {
        updateCompany(db.slice(1))
        // updateCompany(db)
        setLastDirection(direction)
        // getUpdatedDb();
        outOfFrame(nameToDelete);
    }


    const onCardLeftScreen = (myIdentifier: string) => {
        console.log(myIdentifier + ' left the screen')
    }

    const outOfFrame = (name: string) => {
        console.log(name + ' left the screen!')
        console.log(company)
    }


    useEffect(() => {
        return () => {
            console.log(db);
        };
    }, [db]);


    return (
        <SafeAreaView style={styles.safe}>
            <View style={styles.container}>
                {company.map((comp) =>
                    <TinderCard
                        className='swipe'
                        key={comp.name}
                        onSwipe={(dir) => swiped(dir, comp.name)}
                        // swipeThreshold={100}
                        flickOnSwipe={false}
                    >
                        <Card mode="outlined" style={styles.cardstyle}>
                            <Card.Title title={comp.name} subtitle={comp.position} style={{ backgroundColor: 'white' }} />
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
                    </TinderCard>
                )}
                {/* Use a light status bar on iOS to account for the black space above the modal */}
                <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
            </View>
            <Text>
                You swiped {lastDirection}
            </Text>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    safe: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    container: {
        alignSelf: "center",
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        // width: '100%',
    },
    cardstyle: {
        width: 300,
        height: 500,
        margin: 10
    }
});
