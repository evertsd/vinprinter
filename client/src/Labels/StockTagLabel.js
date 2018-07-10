import React from 'react'
import classNames from 'classnames';
import { toNumber } from 'lib/number';

const Row = ({ children }) => <div className="w-100 db ph2">{children}</div>;
const Col = ({ children, className, style }) => <div className={classNames('dib', className)} style={style}>{children}</div>;
const Label = ({ children, className }) => <label className={classNames('dib fw6 mb0', className)}>{children}</label>;

const StockTagLabel = ({ stockNumber, make, model, vin, color, miles, receivedFrom, receivedOn, year }) => (
    <div className="label-insert">
        <Row>
            <Col className="f4 w-100 lh-copy">
                <Label>Stock #</Label> {stockNumber}
            </Col>
        </Row>
        <Row>
            <Col className="f4 w-40 lh-copy">{make}</Col>
            <Col className="f4 w-40 lh-copy">{model}</Col>
            <Col className="f4 w-20 lh-copy">{year}</Col>
        </Row>
        <Row>
            <Col className="f6 w-100 lh-solid">
                <Label>VIN</Label> {vin}
            </Col>
        </Row>
        <Row>
            <Col className="f6 w-40 lh-solid">
                <Label>Color</Label> {color}
            </Col>
            <Col className="f6 w-60 lh-solid">
                <Label>Miles</Label> {toNumber(miles)}
            </Col>
        </Row>
        <Row>
            <Col className="f6 w-60 lh-solid">
                <Label>From</Label> {receivedFrom}
            </Col>
            <Col className="f6 w-40 lh-solid">
                {receivedOn}
            </Col>
        </Row>
    </div>
);

export default StockTagLabel;
