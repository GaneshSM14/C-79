import * as React from 'react'
import{createBottomTabNavigator} from 'react-navigation-tabs'
import BookDonateScreen from '../Screens/bookDonatescreen'
import BookRequestScreen from '../Screens/bookRequestscreen'
export const AppTabNavigator = createBottomTabNavigator({
    Donate : BookDonateScreen,
    Request:BookRequestScreen
})