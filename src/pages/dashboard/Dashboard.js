//@flow
import * as React from 'react';
import './Dashboard.css';

type Props = {};

type State = {};

class Home extends React.PureComponent<Props, State> {
  add = (a: number, b: number) => {
    return a + b;
  };
  dads = () => {
    return '22';
  };
  render() {
    return <div className="dashboard">dashboard{this.add(4, 3)}</div>;
  }
}
export default Home;
