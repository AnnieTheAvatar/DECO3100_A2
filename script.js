//This website has been tested on 1920x1080 screens, Chrome browser

// create the unpack function from tutorials
const unpack = (data, key) => data.map(row => row[key]);

//import and read the data
Plotly.d3.csv("data/environmental-footprint-milks.csv", footprintData => {
    //define each of the data points to be plotted on the chart

    const water_y = unpack(footprintData, "Water use of milks (L)");
    const milk_name = unpack(footprintData, "Entity");

    const water_data = [{
        x: milk_name,
        y: water_y,
        type: 'bar',
        transforms: [{
            type: 'sort',
            target: 'y',
            order: 'descending'
        }]
    }];

    const water_layout = {
        title: 'Water Usage per Litre of Milk',
        xaxis: {
            title: 'Milk Type'
        },
        yaxis: {
            title: 'Water Usage (L)',
        },
        hovermode: 'closest',
        width: '500px'

    }

    //plot the bar chart with the pop
    Plotly.newPlot('waterBar', water_data, water_layout);



    const land_y = unpack(footprintData, "Land use of milks (m2)");

    const land_data = [{
        x: milk_name,
        y: land_y,
        type: 'bar',
        transforms: [{
            type: 'sort',
            target: 'y',
            order: 'descending'
        }]
    }];

    const land_layout = {
        title: 'Land Usage per Litre of Milk',
        xaxis: {
            title: 'Milk Type'
        },
        yaxis: {
            title: 'Land Usage (m2)',
        },
        hovermode: 'closest',
        width: '500px'
    }

    //plot the bar chart with the pop
    Plotly.newPlot('landBar', land_data, land_layout);

});

const first_milky = document.getElementById('milky_first');
const milky_button1 = document.getElementById('milky_first_button');
const hide_button1 = document.getElementById('hide_btn_1');
const main = document.getElementById("body");

function showMilky1() {
    first_milky.classList.remove("hidden");
}

function hideMilky1() {
    first_milky.classList.add("hidden");
}

console.log(hide_button1)
    // Attach event listeners
milky_button1.addEventListener("click", showMilky1);
hide_button1.addEventListener("click", hideMilky1);


const second_milky = document.getElementById('milky_second');
const milky_button2 = document.getElementById('milky_second_button');
const hide_button2 = document.getElementById('hide_btn_2');

function showMilky2() {
    second_milky.classList.remove("hidden");

}

function hideMilky2() {
    second_milky.classList.add("hidden");
}

console.log(hide_button2)
    // Attach event listeners
milky_button2.addEventListener("click", showMilky2);
hide_button2.addEventListener("click", hideMilky2);