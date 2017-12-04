import React, {Component} from 'react';
import {connect} from 'react-redux';

import Chart from '../components/chart';
import GoogleMap from '../components/google-map';

class WhetherList extends Component{
    renderWhether(info){
        const cityName =  info.city.name;
        const temps = info.list.map((whether) => whether.main.temp - 273.15);
        const pressures = info.list.map((whether) => whether.main.pressure);
        const humidities = info.list.map((whether) => whether.main.humidity);
        const {lat, lon} = info.city.coord;
        

        return (
            <tr key={cityName}>
                <td>
                <GoogleMap lat={lat} lon={lon} />
                </td>
                <td><Chart data={temps} color="red" units="도" /></td>
                <td><Chart data={pressures} color="green" units="hPa" /></td>
                <td><Chart data={humidities} color="blue" units="%" /></td>
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