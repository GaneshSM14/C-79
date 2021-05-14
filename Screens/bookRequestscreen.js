import * as React from 'react'
import{View,Text, TextInput} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import BookDonateScreen from './bookDonatescreen'
export default class BookRequestScreen extends React.Component{
    constructor(){
        super()
        this.state={
            BookName:'',
            Reason:''
        }
    }
    addRequest=()=>{
        db.collection('Request').add({
            Name:this.state.BookName,
            Reason:this.state.Reason,
            Userid:firebase.auth().currentUser.email,
            Requestid: Math.random().toString(36).substring(7)
        })
    }
    render(){
        return(
            <View>
                <TextInput onChangeText={(Text)=>{this.setState({BookName:Text})}} placeholder="BookName"/>
                <TextInput onChangeText={(Text)=>{this.setState({Reason:Text})}}placeholder="Reason to Request"/>
                <TouchableOpacity onPress={()=>{this.addRequest()}}>
                    <Text>
                        Request
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}