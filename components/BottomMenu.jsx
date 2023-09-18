import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

// Import your screen components
import Quiz from './Quiz';
import Chat from './Chat';
import Profile from './Profile';

const Tab = createBottomTabNavigator();

function BottomMenu() {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Quiz"
                component={Quiz}
                options={{
                    tabBarLabel: 'Quiz',
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="ios-quiz" color={color} size={size} />
                    ),
                }}
            />
                        <Tab.Screen
                name="Chat"
                component={Chat}
                options={{
                    tabBarLabel: 'Chats',
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="ios-chatbubbles" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="ios-person" color={color} size={size} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

export default BottomMenu;
