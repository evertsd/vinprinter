import React from 'react';
import { requireAverySessionSheet, Sheet } from 'Avery';
import { Labels, SheetPreview } from 'components';
import PrintMediaQuery from 'hoc/PrintMediaQuery';
import Form from './Form';

const NonPrintView = ({ session }) => (
    <div className="flex no-print pa3">
        <div>
            <Form session={session} />
        </div>
        <div style={{ flexGrow: 2 }}>
            <SheetPreview sheetId={session.currentSheet} LabelInsertComponent={Labels.StockTagLabel} />
        </div>
    </div>
);

const PrintView = ({ session }) => <Sheet sheetId={session.currentSheet} LabelInsertComponent={Labels.StockTagLabel} />;

const StockTagForm = PrintMediaQuery(NonPrintView, PrintView);

const StockTagWrapper = requireAverySessionSheet(({ avery: { session } }) => {
    if (!session) return null;

    return <StockTagForm session={session} />;
});

export default StockTagWrapper;
