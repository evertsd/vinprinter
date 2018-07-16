import React from 'react';

class ComponentDidMount extends React.Component {
    componentWillMount() {
        const { onComponentDidMount, ...props } = this.props;

        onComponentDidMount(props);
    }

    render() {
        const { Component, ...props } = this.props;

        return <Component {...props} />;
    }
}

const ComponentDidMountHoc = onComponentDidMount => {
    return Component => {
        return props => <ComponentDidMount {...props} Component={Component} onComponentDidMount={onComponentDidMount} />;
    };
};

export default ComponentDidMountHoc;
