import React from "react";
import { connect } from "react-redux";

const ourBody = props => {
  return (
    <tbody>
      {props.json.map(element => (
        <tr key={element._id}>
          <td>{element.company}</td>
          <td>{element.balance}</td>
          <td>{element.registered}</td>
          <td>{element.address.country}</td>
          <td>{element.employers.length}</td>
          <td>
            {element.employers.map(element => (
              <p key={element.name}>{element.name}</p>
            ))}
          </td>
        </tr>
      ))}
    </tbody>
  );
};

const mapStateToProps = state => {
  return {
    json: state.ourPagination.paginatedJson
  };
};

export default connect(mapStateToProps)(ourBody);
