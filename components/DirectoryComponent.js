import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { Tile } from 'react-native-elements';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';

const mapStateToProps = state => {
    return {
        campsites: state.campsites,
    }
}

    // class components are useful for adding a constructor to hold data in state.
class Directory extends Component {


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
                //USE THIS TO GET A NEW CARD FOR EACH OBJECT
                <Tile
                    title={item.name}
                    caption={item.description}
                    featured
                    onPress={() => navigate('CampsiteInfo', { campsiteId: item.id })}
                    imageSrc={{uri: baseUrl + item.image}}
                />
            );
        };

        return (
            <FlatList
                data={this.props.campsites.campsites}
                renderItem={renderDirectoryItem}
                keyExtractor={item => item.id.toString()}
            />
        );
    }
}

export default connect(mapStateToProps)(Directory);