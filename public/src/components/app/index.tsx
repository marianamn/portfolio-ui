import { GlobalStyles } from '@portfolio-styles/globals';
import Layout from '@portfolio/layout';
import * as React from 'react';

export default class App extends React.Component<{}, {}> {
  render(): JSX.Element {
    return (
      <div>
        <GlobalStyles />
        <Layout />
      </div>
    );
  }
}
