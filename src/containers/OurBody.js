import React from 'react';
import { connect } from 'react-redux';

import getSortedCompanies from '../selectors/balance';

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
          <td>
            {element.employers.map(element =>
              <p key={element.name}>
                {element.name}
              </p>
            )}
          </td>
        </tr>
      )}
    </tbody>
  )
}

const mapStateToProps = (state) => {
  return {
    filteredArr: getSortedCompanies(state.ourData.json, state.ourSort.sortCompany, 
      state.ourSort.sortBalance, state.ourData.action)
  };

}

export default connect(mapStateToProps)(OurBody);