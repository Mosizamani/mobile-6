import React, { useState } from 'react'
import { Button, Modal, View, Text, StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { ActionSheetProvider, useActionSheet } from '@expo/react-native-action-sheet'

const Tab = createBottomTabNavigator()
const Drawer = createDrawerNavigator()
const Stack = createNativeStackNavigator()

function HomeScreen() {
const [modalVisible, setModalVisible] = useState(false)

return (
        <View style={styles.container}>
        <Text>Home Screen</Text>
        <Button title="Show Modal" onPress={() => setModalVisible(true)} />
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => setModalVisible(false)}
            >
            <View style={styles.modalView}>
            <Text>This is a Modal</Text>
            <Button title="Close Modal" onPress={() => setModalVisible(false)} />
            </View>
        </Modal>
        </View>
)
}

function SettingsScreen() {
    return (
        <View style={styles.container}>
        <Text>Settings Screen</Text>
        </View>
    )
}

function ProfileScreen() {
return (
    <View style={styles.container}>
    <Text>Profile Screen</Text>
    </View>
)
}

function Tabs() {
return (
    <Tab.Navigator>
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
)
}

function DrawerNavigation() {
return (
    <Drawer.Navigator>
    <Drawer.Screen name="Tabs" component={Tabs} />
    <Drawer.Screen name="Profile" component={ProfileScreen} />
    </Drawer.Navigator>
)
}

const App = () => {
    return (
    <ActionSheetProvider>
        <MainComponent />
    </ActionSheetProvider>
    );
};

const MainComponent = () => {
    const { showActionSheetWithOptions } = useActionSheet();

    const handlePress = () => {
    const options = ['Delete', 'Save', 'Cancel']
    const destructiveButtonIndex = 0
    const cancelButtonIndex = 1

    showActionSheetWithOptions(
        {
        options,
        destructiveButtonIndex,
        cancelButtonIndex,
        title: 'Choose an Option',
        },
        (buttonIndex) => {
        if (buttonIndex === cancelButtonIndex) {
            console.log('Action Sheet Cancelled');
        } else if (buttonIndex !== undefined) {
            console.log(`Selected option: ${options[buttonIndex]}`);
        }
        }
    );
    };

    return (
    <View style={styles.container}>
        <Button title="Show Action Sheet" onPress={handlePress} />
    </View>
    );
};

export default App;

const styles = StyleSheet.create({
container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
},
modalView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 20,
},
})
