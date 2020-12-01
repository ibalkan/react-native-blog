import React, {useContext} from 'react';
import {  StyleSheet } from 'react-native';
import BlogPostForm from '../components/BlogPostForm';
import { Context } from '../context/BlogContext';


const EditScreen = ({route, navigation}) => {
    // const {addBlogPost} = useContext(Context);
    const {state, editBlogPost} = useContext(Context);
    //find the blog with id
    const blogPost = state.find(blogPost => blogPost.id === route.params?.id);


    return (<BlogPostForm 
        initialValues={{ title: blogPost.title, content: blogPost.content }}
        onSubmit={(title, content) => {
            editBlogPost(route.params?.id, title, content, () => navigation.pop())
    }} />);
};



const styles = StyleSheet.create({});

export default EditScreen;