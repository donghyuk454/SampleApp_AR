'use strict';

import React, { Component } from 'react';

import {StyleSheet} from 'react-native';

import {
  ViroARScene,
  ViroText,
  ViroConstants,
  ViroSpotLight,
  ViroImage,
  ViroARPlaneSelector,
  Viro3DObject,
} from 'react-viro';

export default class HelloWorldSceneAR extends Component {

  constructor() {
    super();

    // Set initial state here
    this.state = {
      text : "Initializing AR..."
    };

    // bind 'this' to functions
    this._onInitialized = this._onInitialized.bind(this);
  }

  render() {
    return (
      <ViroARScene onTrackingUpdated={this._onInitialized} >
        <ViroText text={this.state.text} scale={[.5, .5, .5]} position={[0, 0, -1]} style={styles.helloWorldTextStyle} />
        <ViroSpotLight
          innerAngle={5}
          outerAngle={90}
          direction={[0, -1, -2]}
          position={[0, 3, 1]}
          color="#ffffff"
          castsShadow={true}
        />
        <ViroARPlaneSelector>
          <Viro3DObject
               source={require('./res/res/emoji_smile/emoji_smile.vrx')}
               resources={[require('./res/res/emoji_smile/emoji_smile_diffuse.png'),
                   require('./res/res/emoji_smile/emoji_smile_normal.png'),
                   require('./res/res/emoji_smile/emoji_smile_specular.png')]}
              position={[1, 2, 2]}
              scale={[1, 1, 1]}
              type="VRX"/> 
        </ViroARPlaneSelector>
        <ViroImage
          position={[1, 1, -1]}
          height={1.5}
          width={1.5}
          source={require('./res/guadalupe_360.jpg')}
        />
      </ViroARScene>
      
 
    );
  }

  _onInitialized(state, reason) {
    if (state == ViroConstants.TRACKING_NORMAL) {
      this.setState({
        text : "Shin is gay"
      });
    } else if (state == ViroConstants.TRACKING_NONE) {
      // Handle loss of tracking
    }
  }
}

var styles = StyleSheet.create({
  helloWorldTextStyle: {
    fontFamily: 'Arial',
    fontSize: 30,
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center',  
  },
});

module.exports = HelloWorldSceneAR;
