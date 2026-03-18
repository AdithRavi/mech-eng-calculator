// Tab Switching Logic
function showModule(moduleId) {
    document.querySelectorAll('.module').forEach(m => m.classList.remove('active'));
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    
    document.getElementById(moduleId).classList.add('active');
    event.currentTarget.classList.add('active');
}

// Thermodynamics: Ideal Gas Law
function calcIdealGas() {
    const P = parseFloat(document.getElementById('p_val').value);
    const V = parseFloat(document.getElementById('v_val').value);
    const T = parseFloat(document.getElementById('t_val').value);
    const R = 8.314; // Universal Gas Constant

    let result = "";

    if (!P && V && T) {
        let resP = (1 * R * T) / V;
        result = `Calculated Pressure (P): ${resP.toFixed(2)} kPa`;
    } else if (P && !V && T) {
        let resV = (1 * R * T) / P;
        result = `Calculated Volume (V): ${resV.toFixed(3)} m³`;
    } else if (P && V && !T) {
        let resT = (P * V) / (1 * R);
        result = `Calculated Temperature (T): ${resT.toFixed(2)} K`;
    } else {
        result = "Please leave exactly one field empty to calculate it.";
    }

    document.getElementById('thermo-result').innerText = result;
}

// Mechanics: Stress Calculation
function calcStress() {
    const F = parseFloat(document.getElementById('force').value);
    const A = parseFloat(document.getElementById('area').value);

    if (F && A) {
        const stress = F / A;
        document.getElementById('solids-result').innerText = `Normal Stress (σ): ${stress.toFixed(2)} N/mm² (MPa)`;
    } else {
        document.getElementById('solids-result').innerText = "Please enter both Force and Area.";
    }
}
