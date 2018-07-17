import React from 'react';
import classNames from 'classnames';
import { Colors } from 'vinprinter-ink';

export const BTN_KINDS = {
    DANGER: -2,
    WARNING: -1,
    DEFAULT: 0,
    PRIMARY: 1,
};

const styles = {
    [BTN_KINDS.DEFAULT]: { color: Colors.Gray.Lighter, backgroundColor: Colors.Gray.Dark },
    [BTN_KINDS.PRIMARY]: { color: Colors.Gray.Lighter, backgroundColor: Colors.Green.Viridian },
};

const Button = ({ className, style, kind = BTN_KINDS.DEFAULT, ...props }) => (
    <button {...props} className={classNames('ph3 pv2 ba br1', className)} style={{ ...styles[kind], ...style }} />
);

export default Button;
