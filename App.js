/**
 * Mobile Developer assignment
 *
 * NeverthinkDemo
 *
 * Eeli Klemettilä
 *
 * 29.01.2020
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Image,
} from 'react-native';
import {YouTubeStandaloneAndroid} from 'react-native-youtube';

const YOUR_API_KEY = '';               // APIkey from https://console.developers.google.com (not save to use my own when using GitHub)

const App: () => React$Node = () => {

  return (
      <>
        <StatusBar backgroundColor="black" barStyle="default"/>
        <SafeAreaView>
          <ScrollView
              contentInsetAdjustmentBehavior="automatic"
              style={styles.scrollView}>
            <View>
              <Text style={styles.header}>NeverthinkDEMO</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <View style={styles.MainContainer}>
                <TouchableOpacity activeOpacity={0.5}
                                  onPress={() => {
                                    YouTubeStandaloneAndroid.playVideos({
                                      apiKey: YOUR_API_KEY,                   // YouTube Developer API Key
                                      videoIds: channels[0].playlist,         // Playlist from channels
                                      lightboxMode: true,                     // Show the video on small window, not fullscreen
                                      autoplay: true,                         // Autoplay the video
                                      loop: true,                             // Loops the playlist
                                    }).
                                        then(() => console.log(               // Sends log to console when exited from the lightbox
                                            'Standalone Player Exited')).
                                        catch(errorMessage => console.error(
                                            errorMessage));
                                  }}>
                  <Image                                                      // Gets image url and name from channels
                      source={{uri: channels[0].icon}}
                      style={styles.ImageIconStyle}
                  />
                  <Text style={styles.TextStyle}> {channels[0].name} </Text>
                </TouchableOpacity>
              </View>

              <View style={styles.MainContainer}>
                <TouchableOpacity activeOpacity={0.5}
                                  onPress={() => {
                                    YouTubeStandaloneAndroid.playVideos({
                                      apiKey: YOUR_API_KEY,                   // YouTube Developer API Key
                                      videoIds: channels[1].playlist,         // Playlist from channels
                                      lightboxMode: true,                     // Show the video on small window, not fullscreen
                                      autoplay: true,                         // Autoplay the video
                                      loop: true,                             // Loops the playlist
                                    }).
                                        then(() => console.log(               // Sends log to console when exited from the lightbox
                                            'Standalone Player Exited')).
                                        catch(errorMessage => console.error(
                                            errorMessage));
                                  }}>
                  <Image                                                      // Gets image url and name from channels
                      source={{uri: channels[1].icon}}
                      style={styles.ImageIconStyle}
                  />
                  <Text style={styles.TextStyle}> {channels[1].name} </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={{flexDirection: 'row'}}>
              <View style={styles.MainContainer}>
                <TouchableOpacity activeOpacity={0.5}
                                  onPress={() => {
                                    YouTubeStandaloneAndroid.playVideos({
                                      apiKey: YOUR_API_KEY,                   // YouTube Developer API Key
                                      videoIds: channels[2].playlist,         // Playlist from channels
                                      lightboxMode: true,                     // Show the video on small window, not fullscreen
                                      autoplay: true,                         // Autoplay the video
                                      loop: true,                             // Loops the playlist
                                    }).
                                        then(() => console.log(               // Sends log to console when exited from the lightbox
                                            'Standalone Player Exited')).
                                        catch(errorMessage => console.error(
                                            errorMessage));
                                  }}>
                  <Image                                                      // Gets image url and name from channels
                      source={{uri: channels[2].icon}}
                      style={styles.ImageIconStyle}
                  />
                  <Text style={styles.TextStyle}> {channels[2].name} </Text>
                </TouchableOpacity>
              </View>

              <View style={styles.MainContainer}>
                <TouchableOpacity activeOpacity={0.5}
                                  onPress={() => {
                                    YouTubeStandaloneAndroid.playVideos({
                                      apiKey: YOUR_API_KEY,                   // YouTube Developer API Key
                                      videoIds: channels[3].playlist,         // Playlist from channels
                                      lightboxMode: true,                     // Show the video on small window, not fullscreen
                                      autoplay: true,                         // Autoplay the video
                                      loop: true,                             // Loops the playlist
                                    }).
                                        then(() => console.log(               // Sends log to console when exited from the lightbox
                                            'Standalone Player Exited')).
                                        catch(errorMessage => console.error(
                                            errorMessage));
                                  }}>
                  <Image                                                      // Gets image url and name from channels
                      source={{uri: channels[3].icon}}
                      style={styles.ImageIconStyle}
                  />
                  <Text style={styles.TextStyle}> {channels[3].name} </Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </>
  );
};

const channels = [
  {
    id: 1,
    name: 'Meme Radar',
    icon: 'https://neverthink.tv/assets/images/63e3939725b3d92af5e7b8429a0f4d57e6be661abf380b39348f360e528dd6e2.png',
    playlist: [
      'QSqIG5Dl-SM',
      'jM0GePXOdT0',
      'exLTGu_c5fs',
      'Km8kIX-8hVs',
      'c9EOCt9kkUo',
      '-goTfMUabxc',
      'y7pZzp99Jgs',
      '85RhW75xM8U',
      'URLyBDYHoGo'],
  },
  {
    id: 2,
    name: 'LOL',
    icon: 'https://neverthink.tv/assets/images/61d1aeee19fd7cff13a8b17727f1b5a4e9645f16c42ff376a5e5f3ce8a373df2.png',
    playlist: [
      'v',
      'p8UR4dODogI',
      'HoL1csZPYsk',
      '8V0HETilr4I',
      'ADrBo7u3tR4',
      'BgZh5T4nG_w',
      'J3iSEq5Apfg',
      'iCc5l8iWUZs'],
  },
  {
    id: 3,
    name: 'WTF',
    icon: 'https://neverthink.tv/assets/images/fde01ee47dc02d83892c35c22f2efd81f52c37edc4f3651be40094a115c812fd.png',
    playlist: ['JZnlJ2upJv8', 'Km8kIX-8hVs', 'tHa260XXH6U'],
  },
  {
    id: 4,
    name: 'Russia',
    icon: 'https://neverthink.tv/assets/images/08bf5b99648ec6a7f56f761fdde5c3189e477a38e1d5a7246749df164206364d.png',
    playlist: ['y90yaLFoYoA', 'QiFBgtgUtfw', 'xCUUxBVVcQ0'],
  },
];

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#000',
  },
  header: {
    color: '#fff',
    fontSize: 45,
    textAlign: 'center',
  },
  button: {
    flex: 1,
  },
  buttons: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 60,
  },
  ImageIconStyle: {
    padding: 20,
    margin: 45,
    height: 150,
    width: 150,
    resizeMode: 'stretch',
  },
  TextStyle: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 20,
  },
});
export default App;
