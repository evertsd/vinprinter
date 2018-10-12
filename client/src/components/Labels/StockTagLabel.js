import React from 'react';
import classNames from 'classnames';
import { BlankLabel } from 'Avery';
import { toNumber } from 'util/number';

const Row = ({ children, className, style }) => (
    <div className={classNames('w-100 db', className)} style={{ ...style }}>
        {children}
    </div>
);
const Col = ({ children, className, style }) => (
    <div className={classNames('dib', className)} style={style}>
        {children}
    </div>
);

const Label = ({ children, className }) => <label className={classNames('fw6 dib mb0', className)}>{children}</label>;

const RequireStockTagValue = WrappedComponent => {
    const keys = ['color', 'make', 'miles', 'model', 'receivedFrom', 'receivedOn', 'stockNumber', 'vin', 'year'];

    return label => {
        const hasValue = keys.find(key => label[key] && (typeof label[key] !== 'string' || label[key].length > 0));

        return hasValue ? <WrappedComponent {...label} /> : <BlankLabel />;
    };
};

const StockTagLabel = ({ stockNumber, make, model, vin, color, miles, receivedFrom, receivedOn, year }) => (
    <div style={{ padding: '0.30em 0.40em', fontFamily: 'sans-serif' }}>
        <Row style={{ fontSize: '0.65em', padding: '0 0 0.12em' }}>
            <Col className="w-100">
                <Label>Stock #</Label> {stockNumber}
            </Col>
        </Row>
        <Row style={{ fontSize: '0.55em', padding: '0.12em 0' }}>
            <Col className="w-30">{make}</Col>
            <Col className="w-60">{model}</Col>
            <Col className="w-10 tr">{year}</Col>
        </Row>
        <Row style={{ fontSize: '0.50em', padding: '0.12em 0' }}>
            <Col className="w-100">
                <Label>VIN</Label> {vin}
            </Col>
        </Row>
        <Row style={{ lineHeight: '1.20em', fontSize: '0.40em', padding: '0.12em 0' }}>
            <Col className="w-60">
                <Label>Color</Label> {color}
            </Col>
            <Col className="tr w-40">
                <Label>Miles</Label>
                {'\xa0'.repeat(miles && miles < 100000 ? 2 : 1)}
                {toNumber(miles)}
            </Col>
        </Row>
        <Row style={{ lineHeight: '1.20em', fontSize: '0.40em', padding: '0.12em 0 0' }}>
            <Col className="w-60">
                <Label>From</Label> {receivedFrom}
            </Col>
            <Col className="w-40 tr">
                <Label>On</Label> {receivedOn}
            </Col>
        </Row>
    </div>
);

export default RequireStockTagValue(StockTagLabel);
