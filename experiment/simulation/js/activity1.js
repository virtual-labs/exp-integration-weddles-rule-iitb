let maindiv = document.getElementById('pannelcreate');
function activity1() {
    let text = `
    <div class='divide'>
        <div style='margin-top: 2vw;'>
            <br>
            <h4 class="center-text fs-20px fw-600">Integration: Weddle's Rule</h4>
            <p>Objective: To calculate the integration by Weddle's rule</p>
            <button class='btn btn-info std-btn' style='position: relative; left: 50vw;' onclick='generate_values();' id='temp-btn-1' >Next</button>
        </div>
    </div>`;
    maindiv.innerHTML = text;
    setTimeout(() => { MathJax.typeset(); }, 300);
}
function generate_values() {
    ran_trap = Math.floor((Math.random() * 10) + 1);
    console.log("random value: ", ran_trap);
    generate_data(ran_trap, x_trap, y_trap);
    console.log("x trap value ", x_trap);
    console.log("y trap value ", y_trap);
    trap_sum = weddle(x_trap, y_trap);
    console.log("sum value ", trap_sum);
    start_act1();
}
function start_act1() {
    let temp_btn = document.getElementById('temp-btn-1');
    if (temp_btn) {
        temp_btn.remove();
    }
    let btn_text = get_collapse_btn_text("Dataset", "tb1-box");
    let text = `
    ${btn_text}
    <div class='collapse center-text divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='tb1-box'>
        <div class='table-responsive' style='margin: auto;'>
            <table class='table table-bordered ' style='background-color: white;' >
                <tr id='x-values'>
                    <th class='table-dark'>x</th>
                </tr>

                <tr id='y-values'>
                    <th class='table-dark'>y</th>
                </tr>
            </table>
        </div>
        <button class='btn btn-info std-btn' onclick='plot_xy();' id='plot-graph-btn' >Plot Graph</button>

        <div id="graph-div" style="display:none;">
            <canvas id='plt-x-y'></canvas>
            <br>
            <button class='btn btn-info std-btn' onclick='load_I();' id='temp-btn-2' >Next</button>
        </div>
    </div>`;
    maindiv.innerHTML += text;
    hide_all_steps();
    show_step('tb1-box');
    show_xy();
    setTimeout(() => { MathJax.typeset(); }, 300);
}
function show_xy() {
    let x_val = (document.getElementById('x-values'));
    let y_val = (document.getElementById('y-values'));
    for (let i = 0; i < x_trap.length; i++) {
        console.log(x_trap[i]);
        x_val.innerHTML += `<td>${x_trap[i]}</td>`;
        y_val.innerHTML += `<td>${y_trap[i].toFixed(3)}</td>`;
    }
}
function plot_xy() {
    let btn = (document.getElementById('plot-graph-btn'));
    btn && btn.remove();
    let div = (document.getElementById('graph-div'));
    div.style.display = 'block';
    // root.id = "act8";
    var ctx = document.getElementById('plt-x-y');
    ctx.style.backgroundColor = "white";
    ctx.style.marginTop = "5px";
    ctx.style.marginLeft = "10%";
    ctx.style.padding = "10px";
    ctx.style.borderRadius = "8px";
    if (typeof chart != 'undefined') {
        chart.destroy();
    }
    // let labels = [0.004, 0.007, 0.010, 0.014, 0.020, 0.029, 0.039];
    // let data1=[82.28,96.86,104.07,108.28,112.48,117.68,125.35];//hi_expt
    // let data2=[146.90,183.50,204.11,230.09,256.89,290.83,323.49];//hi_st
    var chart = new Chart(ctx, {
        type: 'scatter',
        data: {
            labels: x_trap,
            datasets: [
                {
                    label: 'y',
                    data: y_trap,
                    fill: false,
                    borderColor: 'blue',
                    tension: 0.5,
                    showLine: true
                    // yAxisID: 'A',
                    // borderWidth: 1,
                    // borderColor: "green",
                    // backgroundColor: "rgba(34, 139, 34, 0.5)",
                },
            ]
        },
        options: {
            maintainAspectRatio: true,
            scales: {
                y: {
                    title: {
                        display: true,
                        text: 'y',
                        font: { size: 14, weight: 'bold' }
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: 'x',
                        font: { size: 14, weight: 'bold' }
                    }
                }
            },
            plugins: {
                title: {
                    display: true,
                    text: 'y vs x',
                    font: { size: 18 },
                },
                legend: { labels: { font: { size: 14, weight: 'bold' } } }
            },
        }
    });
}
function load_I() {
    let btn = (document.getElementById('temp-btn-2'));
    btn && btn.remove();
    let div = (document.getElementById('tb1-box'));
    div.innerHTML += `
   <br>

   <div id="I-div">
      <div class="row justify-content-center" style="align-items:center">
         <div class="col-md-7">
            $$ I = \\frac{3h}{10} (Y_1+5Y_2+Y_3+6Y_4+Y_5+5Y_6+Y_7) =  $$
         </div>
         <div class="col-md-4">
            <input type='number' id='I-inp' class='form-control fs-16px' />
         </div>
      </div>
      <br>
      <button class='btn btn-info std-btn' style='margin: auto;' id='act1-btn2' onclick='verify_I();' >Verify</button>
      <button class='btn btn-info std-btn' style='margin: auto; display:none;' id='act1-btn3' onclick='exp_complete();' >Next</button>
   </div>
   `;
    setTimeout(() => MathJax.typeset(), 100);
    plot_xy();
}
function verify_I() {
    let graph_div = (document.getElementById('graph-div'));
    let btn = (document.getElementById('act1-btn2'));
    let next_btn = (document.getElementById('act1-btn3'));
    let I_inp = (document.getElementById('I-inp'));
    console.log(trap_sum);
    if (!verify_values(parseFloat(I_inp.value), parseFloat(trap_sum.toFixed(4)))) {
        I_inp.style.border = '1px solid red';
        alert('Incorrect integration value');
        return;
    }
    else {
        I_inp.style.border = '1px solid #ced4da';
        I_inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    graph_div.innerHTML = '';
    graph_div.innerHTML = `<canvas id="plt-x-y"></canvas>`;
    plot_xy();
    btn && btn.remove();
    next_btn.style.display = 'block';
}
function exp_complete() {
    let btn = (document.getElementById('act1-btn3'));
    btn && btn.remove();
    alert('Experiment completed');
}
activity1();
//# sourceMappingURL=activity1.js.map