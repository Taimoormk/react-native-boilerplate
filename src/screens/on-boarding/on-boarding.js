// ########## Import Dependencies Here ##########
import React from 'react';
import Onboarding from 'react-native-onboarding-swiper';
import { useDispatch } from 'react-redux';

// ########## Import Components Here ##########
import { hideIntroAction } from '../main-screen/actions';
import { Next, Skip } from './components';
import { onBoardingData } from './helpers';

export const OnBoarding = () => {
  const dispatch = useDispatch();

  return (
    <Onboarding
      SkipButtonComponent={Skip}
      NextButtonComponent={Next}
      onDone={() => dispatch(hideIntroAction())}
      onSkip={() => dispatch(hideIntroAction())}
      pages={onBoardingData}
    />
  );
};