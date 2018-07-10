import React from 'react'

const Label = ({ children }) => <label className="mt2">{children}</label>;

const FormFields = ({ index, label = {}, onChange }) => {
    const onUpdateField = field => {
        return event => {
            onChange({ [field]: event.target.value });
        };
    };

    return (
        <section className="mv2">
            <div className="row row-no-padding">
                <div className="col-sm-6">
                    <Label>Color</Label>
                    <input type="text"
                      className="form-control"
                      value={label.color}
                      onChange={onUpdateField('color')} />
                </div>
                <div className="col-sm-6">
                    <Label>Mileage</Label>
                    <input type="text"
                      className="form-control"
                      value={label.miles}
                      onChange={onUpdateField('miles')} />
                </div>
            </div>
            <div className="row row-no-padding">
                <div className="col-sm-6">
                    <Label>Received from</Label>
                    <input  type="text"
                            className="form-control"
                            value={label.receivedFrom}
                            onChange={onUpdateField('receivedFrom')}
                    />
                </div>
                <div className="col-sm-6">
                    <Label>Received on</Label>
                    <input type="text"
                      className="form-control"
                      value={label.receivedOn}
                      onChange={onUpdateField('receivedOn')} />
                </div>
            </div>
            <div className="row row-no-padding">
                <div className="col-sm-6">
                    <Label>Key code</Label>
                    <input type="text"
                      className="form-control"
                      value={label.keyCode}
                      onChange={onUpdateField('keyCode')} />
                </div>
                <div className="col-sm-6">
                    <Label>Keyless code</Label>
                    <input type="text"
                      className="form-control"
                      value={label.keylessCode}
                      onChange={onUpdateField('keylessCode')} />
                </div>
            </div>
            <div className="row row-no-padding">
                <div className="col-sm-12">
                    <Label>Stock number</Label>
                    <input type="text"
                      className="form-control"
                      value={label.stockNumber}
                      onChange={onUpdateField('stockNumber')} />
                </div>
            </div>
            <div className="row row-no-padding">
                <div className="col-sm-4">
                    <Label>Make</Label>
                    <input type="text"
                      className="form-control"
                      value={label.make}
                      onChange={onUpdateField('make')} />
                </div>
                <div className="col-sm-5">
                    <Label>Model</Label>
                    <input type="text"
                      className="form-control"
                      value={label.model}
                      onChange={onUpdateField('model')} />
                </div>
                <div className="col-sm-3">
                    <Label>Year</Label>
                    <input type="text"
                      className="form-control"
                      value={label.year}
                      onChange={onUpdateField('year')} />
                </div>
            </div>
            <div className="row row-no-padding">
                <div className="col-sm-12">
                    <Label>VIN</Label>
                    <input type="text"
                      className="form-control"
                      value={label.vin}
                      onChange={onUpdateField('vin')} />
                </div>
            </div>
        </section>
    );
};

export default FormFields;
