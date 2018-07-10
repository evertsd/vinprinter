import React from 'react';
import { parseStockTag } from '../model';

const SUBMIT_KEYCODE = 13

const StockTagInput = ({ index, label, onChange, onSubmit }) => {
    const onChangeWrapper = event => {
        const text = event.target.value;
        onChange({ text, ...parseStockTag(text) });
    };

    const onKeyDown = event => {
        if (event.keyCode === SUBMIT_KEYCODE) {
            event.stopPropagation()
            onSubmit();
        }
    };

    return (
        <div className="row mtm">
          <textarea
            type="text"
            className="w-100 br1"
            placeholder="Paste stock tag information"
            value={(label && label.text) || ''}
            onChange={onChangeWrapper}
            onKeyDown={onKeyDown} />
        </div>
    );
}

export default StockTagInput;
