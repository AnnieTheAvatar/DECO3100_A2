//This website has been tested on 1920x1080 screens, Chrome browser

// create the unpack function from tutorials
const unpack = (data, key) => data.map(row => row[key]);

const colorWat = ['#3fc1c0', '#00b2ca', '#0899ba', '#0f80aa', '#1c558e'];
const colorLan = ['#936639', '#b6ad90', '#a4ac86', '#656d4a', '#414833'];
const colorCo2 = ['#495057', '#343a40', '#212529', '#161a1d', '#495057'];


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
        }],
        marker: {
            color: colorWat
        }
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
        width: 600,
        font: {
            family: 'Arial, sans script',
            size: 15,
            color: '#28587B'
        },
        paper_bgcolor: 'rgba(0, 0, 0, 0)',
        plot_bgcolor: 'rgba(0, 0, 0, 0)',
    }

    //plot the bar chart with the pop
    Plotly.newPlot('waterBar', water_data, water_layout, { displayModeBar: false });



    const land_y = unpack(footprintData, "Land use of milks (m2)");

    const land_data = [{
        x: milk_name,
        y: land_y,
        type: 'bar',
        transforms: [{
            type: 'sort',
            target: 'y',
            order: 'descending'
        }],
        marker: {
            color: colorLan
        }
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
        width: 600,
        font: {
            family: 'Arial, sans script',
            size: 15,
            color: '#28587B'
        },
        paper_bgcolor: 'rgba(0, 0, 0, 0)',
        plot_bgcolor: 'rgba(0, 0, 0, 0)'
    };

    //plot the bar chart with the pop
    Plotly.newPlot('landBar', land_data, land_layout, { displayModeBar: false });

    const co2_y = unpack(footprintData, "GHG emissions of milks (kg CO2eq)");

    const co2data = [{
        x: milk_name,
        y: co2_y,
        type: 'bar',
        transforms: [{
            type: 'sort',
            target: 'y',
            order: 'descending'
        }],
        marker: {
            color: colorCo2
        }
    }];

    const co2layout = {
        title: 'CO2 Production per Litre of Milk',
        xaxis: {
            title: 'Milk Type'
        },
        yaxis: {
            title: 'CO2 Production (kg)',
        },
        hovermode: 'closest',
        width: 600,
        font: {
            family: 'Arial, sans script',
            size: 15,
            color: '#28587B'
        },
        paper_bgcolor: 'rgba(0, 0, 0, 0)',
        plot_bgcolor: 'rgba(0, 0, 0, 0)'
    };

    Plotly.newPlot('co2graph', co2data, co2layout, { displayModeBar: false });

});

//first milky aside button functions
const first_milky = document.getElementById('milky_first');
const milky_button1 = document.getElementById('milky_first_button');
const hide_button1 = document.getElementById('hide_btn_1');
//const main = document.getElementById("all");

function showMilky1() {
    first_milky.classList.remove("hidden");
    //main.classList.add("blackout");//
}

function hideMilky1() {
    first_milky.classList.add("hidden");
    //main.classList.remove("blackout");//
}

console.log(hide_button1)
    // Attach event listeners
milky_button1.addEventListener("click", showMilky1);
hide_button1.addEventListener("click", hideMilky1);

//2nd milky aside button functions
const second_milky = document.getElementById('milky_second');
const milky_button2 = document.getElementById('milky_second_button');
const hide_button2 = document.getElementById('hide_btn_2');

function showMilky2() {
    second_milky.classList.remove("hidden");
    //main.classList.add("blackout");//
}

function hideMilky2() {
    second_milky.classList.add("hidden");
    //main.classList.remove("blackout");//
}

console.log(hide_button2)
    // Attach event listeners
milky_button2.addEventListener("click", showMilky2);
hide_button2.addEventListener("click", hideMilky2);

//3rd milky aside button functions
const milky_third = document.getElementById('milky_third');
const milky_button3 = document.getElementById('milky_second_third');
const hide_button3 = document.getElementById('hide_btn_3');

function showMilky3() {
    milky_third.classList.remove("hidden");
    //main.classList.add("blackout");//
}

function hideMilky3() {
    milky_third.classList.add("hidden");
    //main.classList.remove("blackout");//
}

milky_button3.addEventListener("click", showMilky3);
hide_button3.addEventListener("click", hideMilky3);