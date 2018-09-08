import * as React from 'react';

interface IProps {
    readonly name: string;
}

export default class App extends React.Component<IProps> {
    render() {
        return <h1>Hello {this.props.name}</h1>;
    }
}