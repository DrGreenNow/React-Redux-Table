    //getSortedCompanies
  
export default (json, sortCompany) => {
    if(sortCompany===null) {
        console.log(sortCompany);
        return json;
    }

    else if(sortCompany)
        return json.sort( (a,b) => {
            if (a.company.toLowerCase() < b.company.toLowerCase()) {
                return 1;
            } else {
                return -1;
            }
        });

    else {
        return json.sort( (a,b) => {
            if (a.company.toLowerCase() > b.company.toLowerCase()) {
                return 1;
            } else {
                return -1;
            }
        }); 
    }
}      
 




