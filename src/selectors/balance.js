//getSortedBalance

export default (json, sortCompany, sortBalance, action) => {
  if (action !== "") {
    var word = new RegExp("^" + action, "i");
    let filteredArr = [];

    filteredArr = json.filter(item => {
      return word.test(item.company);
    });

    if (sortCompany === null && sortBalance === null) {
      return filteredArr;
    }

    if (sortCompany) {
      return [...filteredArr].sort((a, b) => {
        if (a.company.toLowerCase() > b.company.toLowerCase()) {
          return 1;
        } else {
          return -1;
        }
      });
    }

    if (sortCompany === false) {
      return [...filteredArr].sort((a, b) => {
        if (a.company.toLowerCase() < b.company.toLowerCase()) {
          return 1;
        } else {
          return -1;
        }
      });
    }

    if (sortBalance) {
      return [...filteredArr].sort((a, b) => {
        if (a.balance > b.balance) {
          return 1;
        } else {
          return -1;
        }
      });
    }

    if (sortBalance === false) {
      return [...filteredArr].sort((a, b) => {
        if (a.balance < b.balance) {
          return 1;
        } else {
          return -1;
        }
      });
    }
  }

  if (sortCompany === null && sortBalance === null) {
    return json;
  }

  if (sortCompany) {
    return [...json].sort((a, b) => {
      return a.company.toLowerCase() > b.company.toLowerCase() ? 1 : -1;
    });
  }

  if (sortCompany === false) {
    return [...json].sort((a, b) => {
      return a.company.toLowerCase() < b.company.toLowerCase() ? 1 : -1;
    });
  }

  if (sortBalance) {
    return [...json].sort((a, b) => {
      return a.balance > b.balance ? 1 : -1;
    });
  }

  if (sortBalance === false) {
    return [...json].sort((a, b) => {
      return a.balance < b.balance ? 1 : -1;
    });
  }
};
