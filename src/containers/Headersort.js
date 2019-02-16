import React from 'react';
import { connect } from 'react-redux';

import { sortCompany } from '../actions'

let Headersort = ({ dispatch }) => (
	<thead>
		<tr>
			<td onClick={() => {dispatch(sortCompany());}}>Company</td>
			<td>Balance</td>
			<td>Registered</td>
			<td>Country</td>
			<td>Number of employers</td>
			<td>Show employers</td>
		</tr>
	</thead>
);

const mapStateToProps = (state) => ({
	Arr: state.json,
  })

export default connect(mapStateToProps)(Headersort);  