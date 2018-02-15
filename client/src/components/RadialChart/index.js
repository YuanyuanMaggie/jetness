import React from 'react';
import echarts from 'echarts';
import MealItem from '../MealItem';
import './index.css';

class RadialChart extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: [
                { desc: 'Spanish-Style Shrimp With Garlic', src: '/images/chart/chart-1.png', calories: 400 },
                { desc: 'Roasted Salmon Glazed With Brown Sugar and Mustard', src: '/images/chart/chart-2.png', calories: 500 },
                { desc: 'Spanish-Style Shrimp With Garlic', src: '/images/chart/chart-3.png', calories: 400 },
                { desc: 'Spanish-Style Shrimp With Garlic', src: '/images/chart/chart-4.png', calories: 400 },
                { desc: 'Spanish-Style Shrimp With Garlic', src: '/images/chart/chart-5.png', calories: 400 },
                { desc: 'Spanish-Style Shrimp With Garlic', src: '/images/chart/chart-6.png', calories: 400 },
                { desc: 'Spanish-Style Shrimp With Garlic', src: '/images/chart/chart-1.png', calories: 400 },
            ],
            show: null,
            pos: {
                top: '100px',
                left: '70%',
            }
        }
    }

    componentDidMount(){
		let option= {
            angleAxis: {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                z: 10
            },
            radiusAxis: {
            },
            polar: {
            },
            series: [{
                type: 'bar',
                data: [500, 200, 300, 400, 300, 500, 300],
                coordinateSystem: 'polar',
                name: 'Fat',
                stack: 'a'
            }, {
                type: 'bar',
                data: [200, 400, 300, 100, 300, 200, 100],
                coordinateSystem: 'polar',
                name: 'Carbs',
                stack: 'a'
            }, {
                type: 'bar',
                data: [300, 200, 300, 400, 100, 200, 500],
                coordinateSystem: 'polar',
                name: 'Protein',
                stack: 'a'
            }],
            legend: {
                show: true,
                data: ['Fat', 'Carbs', 'Protein']
            },
            tooltip: {},
        };
        let myCharts=echarts.init(document.getElementById('radial-chart'));
        myCharts.setOption(option);
        myCharts.on('mouseover', (params, event) => {
            const data = this.state.data[params.dataIndex];
            const defaultPos = {
                top: '100px',
                left: '70%',
            }
            if(params.event && params.event.event){
                defaultPos.top = params.event.event.offsetY;
                defaultPos.left = params.event.event.offsetX + 50;
            }
            this.setState({show:data, pos: defaultPos});
        });
    
        // myCharts.on('mouseout', function (params) {
        //     console.log(params);
        // });
    }

    render() {
        return (
        <div className="pt10 radial">
            <div id="radial-chart">

            </div>
            <div id="menu-chart" style={{top: this.state.pos.top, left: this.state.pos.left}}>
                { this.state.show &&
                <MealItem desc={this.state.show.desc} src={this.state.show.src} calories={this.state.show.calories}/>}
            </div>
        </div>)
    }
}

export default RadialChart;