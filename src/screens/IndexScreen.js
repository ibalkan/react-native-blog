import React, { useContext } from 'react';
import { View, Text, FlatList, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { Context } from '../context/BlogContext';
import { Feather } from '@expo/vector-icons';


const IndexScreen = ({ navigation }) => {
    const { state, addBlogPost, deleteBlogPost } = useContext(Context);
   
    return (
        <View>
            <Button title="Add Post" onPress={addBlogPost}/>
            <FlatList
             data={state} 
             keyExtractor={(blogPost) => blogPost.title}
             renderItem={({item}) => {
                return (
                  <TouchableOpacity onPress={() => navigation.navigate("Show", { postId: item.id} )}>
                    <View style={styles.row}>
                      <Text style={styles.title}>
                        {item.title} - {item.id}
                      </Text>
                      <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                        <Feather style={styles.icon} name="trash" />
                      </TouchableOpacity>
                    </View>
                  </TouchableOpacity>
                );
             }}
            />
        </View>
    );
}
// const IndexScreen = () => {
//     return (
//         <Stack.Navigator>
//             <Index.Screen 
//              name="Index"
//              component={IndexScreen}
//              options={{ headerRight: <Feather name="plus" size={30}/>}}
//             />
//         </Stack.Navigator>
//     );
// };


// IndexScreen.navigationOptions = () => {
//     return {
//         headerRight: <Feather name="plus" size={30}/>
//     };
// };

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        paddingHorizontal: 10,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: 'gray'
    },
    title: {
        fontSize: 18
    },
    icon: {
        fontSize: 24
    }
});

export default IndexScreen;