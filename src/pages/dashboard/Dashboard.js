//@flow
import * as React from 'react';
import { Button } from 'antd';
import './Dashboard.css';

type Props = {};

type State = {};

class Home extends React.PureComponent<Props, State> {
  add = (a: number, b: number) => {
    return a + b;
  };
  render() {
    return <div className="dashboard">dashboard{this.add('2', 3)}</div>;
  }
}
export default Home;
