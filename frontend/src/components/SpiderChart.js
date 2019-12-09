/*
SPIDER CHART:
Uses react-svg-radar-chart to create the Spider Chart.
The package itself is essentially a high-level version of 
creating the chart using svg. 
*/

import React, { Component } from 'react';
import RadarChart from 'react-svg-radar-chart';
import 'react-svg-radar-chart/build/css/index.css';
import '../styles/SpiderChart.css';

class SpiderChart extends Component {

    

    render() {
        const dataSets = this.props;        
        
        //Captions for the SpiderChart. Entries in Label:Value. 
        const captions = {
            E2: "Practical Ingenuity",
            E3: "Creativity",
            E4: "Communication",
            E5: "Business & Management",
            E6: "Leadership",
            E7: "High Ethical Standards",
            E8: "Professionalism",
            E9: "Dynamism, Agility, Resilience, and Flexibility" 
        }

        const noSmoothing = points => {
            let d = 'M' + points[0][0].toFixed(4) + ',' + points[0][1].toFixed(4);
            for (let i = 1; i < points.length; i++) {
              d += 'L' + points[i][0].toFixed(4) + ',' + points[i][1].toFixed(4);
            }
            return d + 'z';
          };

        // If options are not specified where the RadarChart is rendered,
        // these options are used.
        const defaultOptions = {
            size: 200,
            axes: true, // show axes?
            scales: 4, // show scale circles?
            captions: true, // show captions?
            captionMargin: 35, // move margins? Width of the RadarChart is set to the entire page in the SpiderChart.css
            dots: false, // show dots?
            zoomDistance: 1.2, // where on the axes are the captions?
            setViewBox: (options) => `-${options.captionMargin} 0 ${options.size + options.captionMargin * 2} ${options.size}`, // custom viewBox ?
            smoothing: noSmoothing, // shape smoothing function
            axisProps: () => ({ className: 'axis' }),
            scaleProps: () => ({ className: 'scale', fill: 'none' }),
            shapeProps: () => ({ className: 'shape' }),
            captionProps: () => ({
              className: 'caption',
              textAnchor: 'middle',
              fontSize: 16, // change font size of the captions?
              fontFamily: 'sans-serif' // change font?
            }),
            dotProps: () => ({
              className: 'dot',
              mouseEnter: (dot) => { console.log(dot) },
              mouseLeave: (dot) => { console.log(dot) }
            })
        };

        return (
            <div className="center">
                <RadarChart 
                    captions={captions}
                    data={dataSets.dataSets}
                    options={defaultOptions}
                    size={500}
                />
            </div>
        );
    }
}

export default SpiderChart;