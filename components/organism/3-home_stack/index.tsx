import React from 'react';

import {NavigationContainer} from '@react-navigation/native';

import {
  AnimatedTabBarNavigator,
  DotSize,
  TabElementDisplayOptions,
} from 'react-native-animated-nav-tab-bar';

import HomeMain from '../../molecules/home-main';
import HomeJourney from '../../molecules/home-journey';
import HomeProfile from '../../molecules/home-profile';

// @ts-ignore
import HomeMainLogo from '../../../assets/icons/home-main.svg';
// @ts-ignore
import HomeMainAlt from '../../../assets/icons/home-main-alt.svg';
// @ts-ignore
import HomeJourneyLogo from '../../../assets/icons/home-journey.svg';
// @ts-ignore
import HomeJourneyAlt from '../../../assets/icons/home-journey-alt.svg';
// @ts-ignore
import HomeProfileLogo from '../../../assets/icons/home-profile.svg';
// @ts-ignore
import HomeProfileAlt from '../../../assets/icons/home-profile-alt.svg';

// @ts-ignore
function HomeStack() {
  const Tabs = AnimatedTabBarNavigator();

  return (
    <Tabs.Navigator
      appearance={{
        floating: true,
        shadow: true,
        whenActiveShow: TabElementDisplayOptions.BOTH,
        whenInactiveShow: TabElementDisplayOptions.ICON_ONLY,
        dotSize: DotSize.SMALL,
        tabBarBackground: '#042F40',
        activeTabBackgrounds: '#f3f3f3',
      }}
      initialRouteName={'Profile'}>
      <Tabs.Screen
        name={'Home'}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? (
              <HomeMainLogo width={20} height={20} />
            ) : (
              <HomeMainAlt width={20} height={20} />
            ),
        }}>
        {props => <HomeMain {...props} />}
      </Tabs.Screen>
      <Tabs.Screen
        name={'Journey'}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? (
              <HomeJourneyLogo width={27.5} height={27.5} />
            ) : (
              <HomeJourneyAlt width={27.5} height={27.5} />
            ),
        }}>
        {props => <HomeJourney {...props} />}
      </Tabs.Screen>
      <Tabs.Screen
        name={'Profile'}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? (
              <HomeProfileLogo width={20} height={20} />
            ) : (
              <HomeProfileAlt width={20} height={20} />
            ),
        }}>
        {props => <HomeProfile {...props} />}
      </Tabs.Screen>
    </Tabs.Navigator>
  );
}

export default HomeStack;
