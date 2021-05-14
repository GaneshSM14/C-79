import * as React from 'react'
import{View,Text} from 'react-native'
export default class BookDonateScreen extends React.Component{
    componentDidMount(){this.getrequestlist()}
    getrequestlist=()=>{}
    render(){

        return(
            <View>
                <Text>
                    BookDonateScreen
                </Text>
            </View>
        )
    }
}
