import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

const stories = [
  { id: '1', name: 'Unique_boy', image: require('./Icons/sainath3.jpg') },
  { id: '2', name: 'Mr_Killer', image: require('./Icons/sainath1.jpg') },
  { id: '3', name: 'Raja_Saab', image: require('./Icons/sainath5.jpg') },
  { id: '4', name: 'Mr_idiot', image: require('./Icons/sainath.jpg') },
];

const post = {
  id: '1',
  image: require('./Icons/sainath3.jpg'),
  username: '_mr._unique1_',
  likes: 5000,
  comments: 45,
};

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
      
        <Text style={styles.logo}>𝑰𝒏𝒔𝒕𝒂𝒈𝒓𝒂𝒎</Text>
        <View style={styles.iconContainer}>
          <View style={styles.iconWrapper}>
            <Icon name='heart-outline' size={25} color='#000'/>
            <View style={styles.notificationBadge}>
              <Text style={styles.notificationText}>5</Text>
            </View>
          </View>
          <View style={styles.iconWrapper}>
            <Icon name='paper-plane-outline' size={25} color='#000' />
            <View style={styles.notificationBadge}>
              <Text style={styles.notificationText}>10</Text>
            </View>
          </View>
        </View>
      </View>

      <FlatList
        horizontal
        data={stories}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.storyContainer}>
            <Image source={item.image} style={styles.storyImage} />
            <Text style={styles.storyText}>{item.name}</Text>
          </View>
        )}
        contentContainerStyle={styles.storiesList}
      />

      <View style={styles.postContainer}>
        <View style={styles.usernameContainer}>
          <Text style={styles.usernameText}>{post.username}</Text>
          <View style={styles.usernameRightContainer}>
            <View style={styles.followBox}>
              <Text style={styles.followText}>Follow</Text>
            </View>
            <Icon name='ellipsis-horizontal' size={20} color='#000' />
          </View>
        </View>
        <Image source={post.image} style={styles.postImage} />
        <View style={styles.iconsContainer}>
          <View style={styles.iconWithCount}>
            <Icon name='heart-outline' size={25} color='#000' />
            <Text style={styles.iconCount}>{post.likes}</Text>
          </View>
          <View style={styles.iconWithCount}>
            <Icon name='chatbubble-outline' size={25} color='#000' />
            <Text style={styles.iconCount}>{post.comments}</Text>
          </View>
          <Icon name='paper-plane-outline' size={25} color='#000' />
        </View>
      </View>

      <View style={styles.bottomNavBar}>
        <TouchableOpacity style={styles.navIconWrapper}>
          <Icon name='home-outline' size={25} color='#000' />
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navIconWrapper}>
          <Icon name='search-outline' size={25} color='#000' />
          <Text style={styles.navText}>Search</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navIconWrapper}>
          <Icon name='add-circle-outline' size={25} color='#000' />
          <Text style={styles.navText}>Add</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navIconWrapper}>
          <Icon name='person-outline' size={25} color='#000' />
          <Text style={styles.navText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  navbar: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  logo: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  iconContainer: {
    flexDirection: 'row',
  },
  iconWrapper: {
    marginLeft: 20,
    position: 'relative',
  },
  notificationBadge: {
    position: 'absolute',
    top: -5,
    right: -10,
    backgroundColor: 'red',
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  notificationText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  storiesList: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  storyContainer: {
    alignItems: 'center',
    marginHorizontal: 10,
  },
  storyImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
    borderWidth: 2,
    borderColor: '#ddd',
  },
  storyText: {
    marginTop: 5,
    fontSize: 12,
    textAlign: 'center',
  },
  postContainer: {
    marginHorizontal: 10,
    marginTop: 20,
  },
  usernameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  usernameText: {
    fontWeight: 'bold',
  },
  usernameRightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  followBox: {
    backgroundColor: '#0095f6',
    paddingVertical: 2,
    paddingHorizontal: 8,
    borderRadius: 5,
    marginRight: 10,
  },
  followText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 12,
  },
  postImage: {
    width: '100%',
    height: 400,
    marginVertical: 10,
  },
  iconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: 10,
  },
  iconWithCount: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10, 
  },
  iconCount: {
    marginLeft: 5,
    fontWeight: 'bold',
  },
  bottomNavBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 50,  
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    backgroundColor: '#fff',
  },
  navIconWrapper: {
    alignItems: 'center',
  },
  navText: {
    fontSize: 12,
    marginTop: 2, 
  },
});
