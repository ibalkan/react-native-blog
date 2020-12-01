import React, { useContext } from 'react';
import { View, Text, StyleSheet, addons } from 'react-native';
import { Context } from '../context/BlogContext';

const ShowScreen = ({route}) => {
    // const { postId } = route.params;
    
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
