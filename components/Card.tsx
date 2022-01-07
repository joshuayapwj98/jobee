import * as React from "react";
import {
    Image, StyleSheet, View, Text,
} from "react-native";
// import { DangerZone } from "expo";

import { Profile } from "./Profile";

// const { Animated } = DangerZone;
// const { Value } = Animated;

const pf = {
    name: 'Company A',
    position: 'SWE Intern',
    details: 'hello you are not hired',
    contact: 'companyA@gmail.com'
}

type Val = number;
interface CardProps {
    profile: Profile;
    likeOpacity?: Val;
    nopeOpacity?: Val;
}

export default (props: CardProps) => {
    const { profile, likeOpacity, nopeOpacity } = {
        likeOpacity: 0,
        nopeOpacity: 0,
        ...props,
    };
    return (
        <View style={StyleSheet.absoluteFill}>
            <Image style={styles.image} source={{ uri: 'https://picsum.photos/700' }} />
            <View style={styles.overlay}>
                <View style={styles.header}>
                    <View style={[styles.like, { opacity: likeOpacity }]}>
                        <Text style={styles.likeLabel}>LIKE</Text>
                    </View>
                    <View style={[styles.nope, { opacity: nopeOpacity }]}>
                        <Text style={styles.nopeLabel}>NOPE</Text>
                    </View>
                </View>
                <View style={styles.footer}>
                    <Text style={styles.name}>{profile.name}</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    image: {
        ...StyleSheet.absoluteFillObject,
        width: undefined,
        height: undefined,
        borderRadius: 8,
    },
    overlay: {
        flex: 1,
        justifyContent: "space-between",
        padding: 16,
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    footer: {
        flexDirection: "row",
    },
    name: {
        color: "white",
        fontSize: 32,
    },
    like: {
        borderWidth: 4,
        borderRadius: 5,
        padding: 8,
        borderColor: "#6ee3b4",
    },
    likeLabel: {
        fontSize: 32,
        color: "#6ee3b4",
        fontWeight: "bold",

    },
    nope: {
        borderWidth: 4,
        borderRadius: 5,
        padding: 8,
        borderColor: "#ec5288",
    },
    nopeLabel: {
        fontSize: 32,
        color: "#ec5288",
        fontWeight: "bold",
    },
});