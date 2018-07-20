import { compose, lifecycle, withStateHandlers } from 'recompose';

const labelFormHandlers = withStateHandlers(({ label = {} }) => ({ values: label }), {
    onReset: (_, { label = {} }) => () => ({ values: label }),
    onChangeValue: state => (key, value) => {
        const values = { ...state.values, [key]: value };
        return { values };
    },
    onUpdate: (state, { updateLabel }) => (key, value) => {
        const values = key ? { ...state.values, [key]: value } : state.values;

        updateLabel(values);

        return { values };
    },
});

export const onLabelLocationChange = callback => {
    return lifecycle({
        componentDidUpdate(prevProps) {
            if (prevProps.labelLocation !== this.props.labelLocation) {
                callback(this.props, prevProps);
            }
        },
    });
};

export const updateLabel = compose(
    labelFormHandlers,
    onLabelLocationChange(props => props.onReset())
);
