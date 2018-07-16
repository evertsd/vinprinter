import React from 'react';
import classNames from 'classnames';
import { toNumber } from 'util/number';

const Row = ({ children, className, style }) => (
    <div className={classNames('w-100 db ph2', className)} style={style}>
        {children}
    </div>
);
const Col = ({ children, className, style }) => (
    <div className={classNames('dib', className)} style={style}>
        {children}
    </div>
);
const Label = ({ children, className }) => <label className={classNames('dib fw6 mb0', className)}>{children}</label>;

const StockTagLabel = ({ stockNumber, make, model, vin, color, miles, receivedFrom, receivedOn, year }) => (
    <div className="label-insert">
        <Row style={{ lineHeight: '1.25rem' }}>
            <Col className="f4 w-100">
                <Label>Stock #</Label> {stockNumber}
            </Col>
        </Row>
        <Row style={{ lineHeight: '1.25rem' }}>
            <Col className="f4 w-40">{make}</Col>
            <Col className="f4 w-40">{model}</Col>
            <Col className="f4 w-20">{year}</Col>
        </Row>
        <Row style={{ lineHeight: '0.875rem' }}>
            <Col className="f6 w-100">
                <Label>VIN</Label> {vin}
            </Col>
        </Row>
        <Row style={{ lineHeight: '0.875rem' }}>
            <Col className="f6 w-40">
                <Label>Color</Label> {color}
            </Col>
            <Col className="f6 w-60">
                <Label>Miles</Label> {toNumber(miles)}
            </Col>
        </Row>
        <Row style={{ lineHeight: '0.875rem' }}>
            <Col className="f6 w-60">
                <Label>From</Label> {receivedFrom}
            </Col>
            <Col className="f6 w-40">{receivedOn}</Col>
        </Row>
    </div>
);

export default StockTagLabel;
