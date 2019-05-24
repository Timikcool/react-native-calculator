import React from 'react';
import SideMenu from 'react-native-side-menu';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  SafeAreaView,
  TouchableOpacity
} from 'react-native';

import Row from './components/Row';
import Button from './components/Button';
import calculator, { initialState } from './util/calculator';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#202020',
    justifyContent: 'flex-end',
    position: 'relative'
  },
  value: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'right',
    marginRight: 20,
    marginBottom: 10
  }
});

export default class App extends React.Component {
  state = initialState;

  handleTap = (type, value) => {
    this.setState(state => calculator(type, value, state));
  };

  toggleSidemenu = () => {
    console.log(this.state);
    this.setState({ isSidemenuOpen: !this.state.isSidemenuOpen });
  };

  render() {
    return (
      <SideMenu
        isOpen={this.state.isSidemenuOpen}
        menu={
          <View
            style={{
              backgroundColor: 'black',
              height: '100%',
              paddingTop: 50,
              paddingLeft: 20
            }}
          >
            {this.state.history.map(item => (
              <Text style={{ color: 'white', fontSize: 30 }} key={item}>
                {item.toString()}
              </Text>
            ))}
          </View>
        }
      >
        <View style={styles.container}>
          <StatusBar barStyle="light-content" />
          <SafeAreaView>
            <TouchableOpacity
              style={{ position: 'absolute', top: 0, left: 0, zIndex: 2 }}
              onPress={() => this.toggleSidemenu()}
            >
              <Text style={{ color: 'white', fontSize: 30, marginLeft: 20 }}>
                {'☰'}
              </Text>
            </TouchableOpacity>
            <Text style={styles.value}>
              {parseFloat(this.state.currentValue).toLocaleString()}
            </Text>
            <Row>
              <Button
                text="C"
                theme="secondary"
                onPress={() => this.handleTap('clear')}
              />
              <Button
                text="+/-"
                theme="secondary"
                onPress={() => this.handleTap('posneg')}
              />
              <Button
                text="%"
                theme="secondary"
                onPress={() => this.handleTap('percentage')}
              />
              <Button
                text="/"
                theme="accent"
                onPress={() => this.handleTap('operator', '/')}
              />
            </Row>

            <Row>
              <Button text="7" onPress={() => this.handleTap('number', 7)} />
              <Button text="8" onPress={() => this.handleTap('number', 8)} />
              <Button text="9" onPress={() => this.handleTap('number', 9)} />
              <Button
                text="x"
                theme="accent"
                onPress={() => this.handleTap('operator', '*')}
              />
            </Row>

            <Row>
              <Button text="4" onPress={() => this.handleTap('number', 4)} />
              <Button text="5" onPress={() => this.handleTap('number', 5)} />
              <Button text="6" onPress={() => this.handleTap('number', 6)} />
              <Button
                text="-"
                theme="accent"
                onPress={() => this.handleTap('operator', '-')}
              />
            </Row>

            <Row>
              <Button text="1" onPress={() => this.handleTap('number', 1)} />
              <Button text="2" onPress={() => this.handleTap('number', 2)} />
              <Button text="3" onPress={() => this.handleTap('number', 3)} />
              <Button
                text="+"
                theme="accent"
                onPress={() => this.handleTap('operator', '+')}
              />
            </Row>

            <Row>
              <Button
                text="0"
                size="double"
                onPress={() => this.handleTap('number', 0)}
              />
              <Button text="." onPress={() => this.handleTap('number', '.')} />
              <Button
                text="="
                theme="accent"
                onPress={() => this.handleTap('equal')}
              />
            </Row>
            <Row>
              <Button
                text="sin"
                theme="secondary"
                onPress={() => this.handleTap('sin')}
              />
              <Button
                text="cos"
                theme="secondary"
                onPress={() => this.handleTap('cos')}
              />
              <Button
                text="tan"
                theme="secondary"
                onPress={() => this.handleTap('tan')}
              />
              <Button
                text="log"
                theme="secondary"
                onPress={() => this.handleTap('log')}
              />
            </Row>
            <Row>
              <Button
                text="asin"
                theme="secondary"
                onPress={() => this.handleTap('asin')}
              />
              <Button
                text="acos"
                theme="secondary"
                onPress={() => this.handleTap('acos')}
              />
              <Button
                text="atan"
                theme="secondary"
                onPress={() => this.handleTap('atan')}
              />
              <Button
                text="ln"
                theme="secondary"
                onPress={() => this.handleTap('ln')}
              />
            </Row>
          </SafeAreaView>
        </View>
      </SideMenu>
    );
  }
}
