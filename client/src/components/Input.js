import React from 'react';
import { Colors } from 'ink';

export const InputLabel = ({ children }) => <label className="db mt3 mb1">{children}</label>;
export const Input = ({ type = 'text', value = '', ...props }) => (
    <input {...props} className="ba pa2 w-100" type={type} value={value} style={{ borderColor: Colors.Gray.Default, borderRadius: '2px' }} />
);
