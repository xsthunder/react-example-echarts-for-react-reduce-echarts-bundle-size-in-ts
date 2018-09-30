import React from 'react';
import Simple from './Simple'
import SimpleCore from './SimpleCore'

export default class extends React.Component {
    render() {
        return (
            <div>
                <Simple />
                <SimpleCore />
            </div>
        )
    }
};