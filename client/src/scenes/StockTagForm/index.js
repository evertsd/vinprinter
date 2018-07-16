import React from 'react';
import { requireAverySessionSheet, Sheet } from 'Avery';
import { Labels, SheetPreview } from 'components';
import PrintMediaQuery from 'hoc/PrintMediaQuery';
import Form from './Form';

const NonPrintView = ({ sheetId }) => (
    <div className="flex no-print pa3">
        <div>
            <Form sheetId={sheetId} />
        </div>
        <div style={{ flexGrow: 2 }}>
            <SheetPreview sheetId={sheetId} LabelInsertComponent={Labels.StockTagLabel} />
        </div>
    </div>
);

const PrintView = ({ sheetId }) => <Sheet sheetId={sheetId} LabelInsertComponent={Labels.StockTagLabel} />;

const StockTagForm = PrintMediaQuery(NonPrintView, PrintView);

const StockTagWrapper = requireAverySessionSheet(({ avery: { session } }) => {
    const sheetId = session && session.sheets ? session.sheets[0] : undefined;

    return <StockTagForm sheetId={sheetId} />;
});

export default StockTagWrapper;
