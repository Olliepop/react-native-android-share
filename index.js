'use strict';

var invariant = require('invariant');
import React from 'react';

import {
      NativeModules: {
             RNAndroidShare
     }
} from 'react-native';

var AndroidShare = {

   openChooserWithOptions(options: Object, title: string) {
    invariant(
      typeof options === 'object',
      'A valid option object is required'
    );
     invariant(
      typeof title === 'string',
      'Invalid Title: should be a string. Was: ' + title
    );
    console.log('calling android share chooser');
    RNAndroidShare.openChooserWithOptions(options, title);
  },

  render() {
    return (<View></View>);
  }

};
module.exports = AndroidShare;
