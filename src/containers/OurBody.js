import React from 'react';
import { connect } from 'react-redux';

import getSortedCompanies from '../selectors/companies';

let OurBody = ({ filteredArr }) => {

  return (
    <tbody>
      {filteredArr.map(element =>
        <tr key={element._id}>
          <td>{element.company}</td>
          <td>{element.balance}</td>
          <td>{element.registered}</td>
          <td>{element.address.country}</td>
          <td>{element.employers.length}</td>
          <td>--</td>
        </tr>
      )}
    </tbody>
  )
}

const mapStateToProps = (state) => {
  return {
    filteredArr: getSortedCompanies(state.json, state.sortCompany)
  };
}

export default connect(mapStateToProps)(OurBody);