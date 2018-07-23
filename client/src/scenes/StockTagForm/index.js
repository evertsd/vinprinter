import React from 'react';
import { requireAverySessionSheet, PrintMediaQuery, Sheet } from 'Avery';
import { Labels, SheetPreview } from 'components';
import Form from './Form';

const NonPrintView = ({ session }) => (
    <div className="flex justify-center pa3">
        <div className="w-33">
            <Form session={session} />
        </div>
        <div className="">
            <SheetPreview session={session} sheetId={session.currentSheet} LabelInsertComponent={Labels.StockTagLabel} />
        </div>
    </div>
);

const PrintView = ({ session }) => <Sheet session={session} sheetId={session.currentSheet} LabelInsertComponent={Labels.StockTagLabel} />;

const StockTagForm = PrintMediaQuery(NonPrintView, PrintView);

const StockTagWrapper = requireAverySessionSheet(({ avery: { session } }) => {
    if (!session) return null;

    return <StockTagForm session={session} />;
});

export default StockTagWrapper;
