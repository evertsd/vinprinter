import { default as composeClassNames } from 'classnames';
import React from 'react';
import { Colors } from 'ink';

let TabBar = ({ children, classNames, stretch, styles = {} }) => (
    <div
        className={composeClassNames(stretch ? 'flex' : 'inline-flex', classNames.bar)}
        style={{
            borderColor: Colors.Gray.Dark,
            ...styles.bar,
        }}>
        {children}
    </div>
);

let TabBarButton = ({ active, children, classNames = {}, index, onClick, stretch, styles = {} }) => (
    <div
        onClick={onClick}
        className={composeClassNames(index === 0 ? '' : 'bl', 'pv2 ph3 relative pointer tc', classNames.button)}
        style={{
            flexGrow: stretch ? 1 : null,
            backgroundColor: active ? Colors.Blue.Periwinkle : Colors.Gray.White,
            fontWeight: 500,
            ...styles.button,
        }}>
        {children}
    </div>
);

let TabContent = ({ children, classNames = {}, styles = {} }) => (
    <div className={classNames.content} style={styles.content}>
        {children}
    </div>
);

let TabsControlled = ({ children, activeTab, onSelect, stretch = false, ...props }) => {
    let activeContent = null;
    return (
        <React.Fragment>
            <TabBar {...props} stretch={stretch}>
                {React.Children.map(children, (child, i) => {
                    let key = child.props.tabKey || i;
                    let active = activeTab == key;
                    if (active) {
                        activeContent = <TabContent {...child.props} />;
                    }

                    return (
                        <TabBarButton {...child.props} active={active} key={key} index={i} onClick={() => onSelect(key)} stretch={stretch}>
                            {child.props.title}
                        </TabBarButton>
                    );
                })}
            </TabBar>
            {activeContent}
        </React.Fragment>
    );
};

class TabsUncontrolled extends React.Component {
    constructor(props) {
        super(props);

        this.state = { activeTab: props.defaultActiveTab };
    }

    setActiveTab = activeTab => this.setState({ activeTab });

    render = () => <TabsControlled {...this.props} activeTab={this.state.activeTab} onSelect={this.setActiveTab} />;
}

export let Tabs = ({ onSelect, ...props }) => {
    if (onSelect) {
        return <TabsControlled {...props} onSelect={onSelect} />;
    } else {
        return <TabsUncontrolled {...props} />;
    }
};

// Do not want to pass along title
/* eslint-disable no-unused-vars */
export let Tab = ({ children, title, ...props }) => {
    return <div {...props}>{children}</div>;
};
