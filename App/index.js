import React from 'react';
import { StyleSheet, Text, View, StatusBar, SafeAreaView } from 'react-native';

import Row from './components/Row';
import Button from './components/Button';
import calculator, { initialState } from './util/calculator';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#202020',
    justifyContent: 'flex-end'
  },
  value: {
    color: '#fff',
    fontSize: 40,
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

  backToPrevResult = () => {
    const { history, operationNumber } = this.state;
    console.log(history, operationNumber);
    this.setState({
      currentValue: history[operationNumber - 2]
        ? history[operationNumber - 2]
        : '0',
      history: history.slice(0, -1),
      operationNumber: operationNumber - 1
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <SafeAreaView>
          <Text style={styles.value} onPress={() => this.backToPrevResult()}>
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
    );
  }
}
