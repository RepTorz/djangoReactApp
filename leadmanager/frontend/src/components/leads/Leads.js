import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getLeads } from '../../actions/';

export class Leads extends Component {
    render() {
        return (
            <div>
                <h1>Leads List</h1>
            </div>
        )
    }
}

export default Leads
