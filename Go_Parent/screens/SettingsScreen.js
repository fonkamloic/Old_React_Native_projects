import React from 'react';
// import { ExpoConfigView } from '@expo/samples';
import { View, Text, ScrollView, StyleSheet } from "react-native";
import Panel from "../components/Panel";

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'Settings',
  };

  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */
    return (
      <ScrollView>
          <Panel title="Account">
            <Text></Text>
          </Panel>
          <Panel title="Notifications">
            <Text></Text>
          </Panel>
          <Panel title="Logout">
            <Text></Text>
          </Panel>
          <Panel title="Help">
            <Text></Text>
          </Panel>
          <Panel title="Contact us">
            <Text></Text>
          </Panel>
      </ScrollView>      

    );
  }
}
