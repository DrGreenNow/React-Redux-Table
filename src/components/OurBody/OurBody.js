import React from "react";
import { connect } from "react-redux";
import _ from "lodash";

const ourBody = props => {
  const paginate = (items, pageNumber, pageSize) => {
    const startIndex = (pageNumber - 1) * pageSize;
    return _(items)
      .slice(startIndex)
      .take(pageSize)
      .value();
  };

  const sorted = _.orderBy(
    props.ourData,
    [props.sortColumn.path],
    [props.sortColumn.order]
  );

  const renderdArr = paginate(sorted, props.currentPage, props.pageSize);

  return (
    <tbody>
      {renderdArr.map(element => (
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
    ourData: state.ourData.json,
    pageSize: state.ourPagination.pageSize,
    currentPage: state.ourPagination.currentPage,
    sortColumn: state.ourSort.sortColumn
  };
};

export default connect(mapStateToProps)(ourBody);
