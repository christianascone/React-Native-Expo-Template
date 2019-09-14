/*
 * Copyright (C) Christian Ascone - All Rights Reserved
 *
 * @project    react-native-expo-template.nosync
 * @file       StyledText-test.js
 * @author     Christian Ascone
 * @date       9/14/19 2:21 PM
 */

import React from 'react';
import renderer from 'react-test-renderer';

import { AvenirMediumText } from '../StyledText';

it(`renders correctly`, () => {
  const tree = renderer.create(<AvenirMediumText>Snapshot test!</AvenirMediumText>).toJSON();

  expect(tree).toMatchSnapshot();
});
