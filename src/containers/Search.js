import React from 'react';

export default class SearchBar extends React.Component {
    render() {
        return (
          <form>
            <input type="text" placeholder="Search for company" className='form-control' onChange={ this.search.bind(this) } />
          </form>
        );
    }

    search(e){
        let word = new RegExp('^' + e.target.value, 'i'),
        filteredArr;
        if(word.length !==0) {
            filteredArr = this.props.data.hits.filter( (item) => {
                return word.test( item.company );
            });

            this.props.newState({
                filteredArr: filteredArr
            });
        } else {
            this.props.newState({
                filteredArr: this.props.data.hits
            });
        }
    } 
}

