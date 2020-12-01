import React, { useContext } from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { Context } from '../context/BlogContext';
import { Feather } from '@expo/vector-icons';

const ShowScreen = ({route, navigation }) => {
    // const { postId } = route.params;
    // navigation.setOptions({
    //     headerRight: () => (
    //         <Button onPress={() => setCount(c => c + 1)} title="Update count" />
    //     )
    // })

    React.useLayoutEffect(() => {
        navigation.setOptions({
          headerRight: () => (
                <TouchableOpacity onPress={() => navigation.navigate("Edit", {id: route.params?.postId})}>
                    <Feather name="edit" size={25} />
                </TouchableOpacity>
          ),
        });
      }, [navigation]);

    const { state } = useContext(Context);

    const blogPost = state.find((blogPost) => blogPost.id === route.params?.postId);
    
    return (
        <View>
            <Text> {blogPost.title} - {route.params?.postId} </Text>
        </View>
    );
}



const styles = StyleSheet.create({});

export default ShowScreen; 
