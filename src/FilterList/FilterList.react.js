import React from 'react';
import ShowList from '../ShowList/ShowList.react';



class FilterList extends React.Component {
    listItem = ['sugar','raisin','badam','sugarfree','badam powder'];

    constructor() {
        super();
    }

    componentWillMount =()=>{
                this.setState({items:this.listItem});

    }
    handleChange = (event)=>{

        const srch =event.target.value.toLowerCase();

       const list =this.listItem.filter(eachItem=>eachItem.toLowerCase().search(srch)!== -1);

       this.setState({items:list});
    }
    render() {
        return (
            <div>
            <input type='text' onChange={this.handleChange}></input>
             <ShowList items={this.state.items}></ShowList>
            </div>
        );
    }
}

export default FilterList;

