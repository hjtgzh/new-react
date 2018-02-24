import * as React from 'react';

class Home extends React.PureComponent {
  render() {
    const { match } = this.props;
    return <div className="">home{match.params.id}</div>;
  }
}
export default Home;
