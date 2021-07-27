import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';
import { CAMPSITES } from '../shared/campsites';

// class components are useful for adding a constructor to hold data in state.
class Directory extends Component {

    constructor(props) {
        super(props);
        this.state = {
            campsites: CAMPSITES
        };
    }
    // static keyword sets a method on the class itself rather than
    // the object instantiated in the class.
    // this particular usage allows a title to appear in the navigation
    // when this Directory component is called from React-Navigation.
    static navigationOptions = {
        title: 'Directory'
    }

    render() {
        // I dont know what's going on here. Why destructuring? Syntax?
        const { navigate } = this.props.navigation;
        const renderDirectoryItem = ({item}) => {
            return (
                //Use this to get a new card for each new object
                <ListItem
                    title={item.name}
                    subtitle={item.description}
                    onPress={() => navigate('CampsiteInfo', { campsiteId: item.id })}
                    leftAvatar={{ source: require('./images/react-lake.jpg')}}
                />
            );
        };

        return (
            <FlatList
                data={this.state.campsites}
                renderItem={renderDirectoryItem}
                keyExtractor={item => item.id.toString()}
            />
        );
    }
}

export default Directory;