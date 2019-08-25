import * as React from "react";

import { GlobalStyles } from "../../styles/globals";
import Layout from "../layout";

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
