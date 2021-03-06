import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getLeads, deleteLead } from '../../actions/leads';

export class Leads extends Component {
    static propTypes = {
        leads: PropTypes.array.isRequired,
        getLeads: PropTypes.func.isRequired,
        deleteLead: PropTypes.func.isRequired
    }

    //make the request first before the component loads
    componentDidMount() {
        this.props.getLeads();
    }

    render() {
        return (
            <Fragment>
                <h2>SLO Metrics
                </h2>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Metric</th>
                            <th>Q1 Target</th>
                            <th>Q1 Actual</th>
                            <th>Deviation</th>
                            <th>% Error Budget Left Over</th>
                            <th />
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.leads.map(lead => (
                            <tr key={lead.id}>
                                <td>{lead.id}</td>
                                <td>{lead.name}</td>
                                <td>{lead.email}</td>
                                <td>{lead.message}</td>
                                <td><button onClick={this.props.deleteLead.bind(this, lead.id)} className="btn btn-danger btn-sm">Delete</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </Fragment>
        )
    }
}

// map the state of redux to the props of this component
const mapStateToProps = state => ({
    leads: state.leads.leads
});

export default connect(mapStateToProps, { getLeads, deleteLead })(Leads);
