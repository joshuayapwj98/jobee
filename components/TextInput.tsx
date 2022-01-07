import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { TextInput as Input } from 'react-native-paper'
import Colors from '../constants/Colors'

export default function TextInput({ errorText, description, ...props }) {
  return (
    <View style={styles.container}>
      <Input
        style={styles.input}
        selectionColor={Colors.input.primary}
        underlineColor="transparent"
        mode="outlined"
        {...props}
      />
      {description && !errorText ? (
        <Text style={styles.description}>{description}</Text>
      ) : null}
      {errorText ? <Text style={styles.error}>{errorText}</Text> : null}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '70%',
    marginVertical: 12,
  },
  input: {
    backgroundColor: Colors.light.background,
  },
  description: {
    fontSize: 13,
    color: Colors.input.secondary,
    paddingTop: 8,
  },
  error: {
    fontSize: 13,
    color: Colors.input.error,
    paddingTop: 8,
  },
})