import React, {Component} from 'react';

import {connect} from 'react-redux';

class WhetherList extends Component{
    renderWhether(info){
        return (
            <tr>
                <td>{info.city.name}</td>
            </tr>
        );
    }

    render(){
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>도시</th>
                        <th>온도</th>
                        <th>기압</th>
                        <th>습도</th>                        
                    </tr>
                </thead>
                <tbody>
                    {this.props.whether.map(this.renderWhether)}              
                </tbody>
            </table>
        );
    }
}

function mapStateToProps(state){
    return {
        whether : state.whether
    }
}

export default connect(mapStateToProps)(WhetherList);