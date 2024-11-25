// gaussian elimination variables ----------------------------------------------------------------
let mat_c = [
    7.2038, -14.165, 71.985
];
let mat_a = [
    [
        9.7800,
        75.7200,
        29.6100
    ],
    [
        67.4900,
        90.2700,
        30.2800
    ],
    [
        58.1600,
        87.4800,
        79.5100
    ]
];
//3 x 1 random numbers in [-100, 100]
function initialize_mat_c() {
    mat_c = [];
    let num1 = parseFloat((Math.random() * 200 - 100).toFixed(4));
    let num2 = parseFloat((Math.random() * 200 - 100).toFixed(4));
    let num3 = parseFloat((Math.random() * 200 - 100).toFixed(4));
    mat_c.push([num1]);
    mat_c.push([num2]);
    mat_c.push([num3]);
}
//3 x 3 random numbers in [-100, 100]
function initialize_mat_a() {
    mat_a = [];
    for (let i = 0; i < 3; i++) {
        let num1 = parseFloat((Math.random() * 100 - 50).toFixed(4));
        let num2 = parseFloat((Math.random() * 100 - 50).toFixed(4));
        let num3 = parseFloat((Math.random() * 100 - 50).toFixed(4));
        mat_a.push([num1, num2, num3]);
    }
    if (Math.abs(mat_a[0][0]) < 25) {
        mat_a[0][0] = 25;
    }
    mat_a[0][0] = mat_a[0][0] * 4;
}
initialize_mat_c();
initialize_mat_a();
let mat_x = [];
let mat_x1 = [];
//compare two values using absolute difference
function verify_values_abs(value, truevalue) {
    if ((truevalue == 0) && (value == truevalue)) {
        return true;
    }
    let res = false;
    res = (Math.abs(value - truevalue) < 0.001) ? true : false;
    // if(calculated_value <= 1) {
    //     return true
    // } else {
    //     return false;
    // }
    return res;
}
let one_norm = 0;
let two_norm_sqr = 0;
let two_norm = 0;
let inf_norm = 0;
let temp_c = [];
let mat_one_norm;
let sum_one_norm = [];
let mat_inf_norm;
let sum_inf_norm = [];
let ran_trap;
let x_trap = [];
let y_trap = [];
let tb_data = [];
let trap_sum = 0;
//# sourceMappingURL=data.js.map