function calculateLuas() {
    let a = parseFloat(document.getElementById('a').value);
    let b = parseFloat(document.getElementById('b').value);

    if (isNaN(a) || isNaN(b)) {
        alert('Mohon masukkan input yang valid');
        return;
    }

    let luas = 0.5 * a * b;
    document.getElementById('luas').innerText = luas.toFixed(2);

    // Display steps for luas calculation
    document.getElementById('calculationSteps').innerHTML = `
        Langkah-langkah menghitung Luas Segitiga:
        <ol>
            <li>Masukkan panjang alas (a): ${a}</li>
            <li>Masukkan tinggi (t): ${b}</li>
            <li>Hitung luas dengan rumus: Luas = 1/2 * a * t</li>
            <li>Substitusi nilai: Luas = 1/2 * ${a} * ${b}</li>
            <li>Hitung hasil: Luas = ${luas.toFixed(2)}</li>
        </ol>
    `;
}

function calculateKeliling() {
    let s1 = parseFloat(document.getElementById('s1').value);
    let s2 = parseFloat(document.getElementById('s2').value);
    let s3 = parseFloat(document.getElementById('s3').value);

    if (isNaN(s1) || isNaN(s2) || isNaN(s3)) {
        alert('Mohon masukkan input yang valid');
        return;
    }

    let keliling = s1 + s2 + s3;
    document.getElementById('keliling').innerText = keliling.toFixed(2);

    // Display steps for keliling calculation
    document.getElementById('calculationSteps2').innerHTML = `
        Langkah-langkah menghitung Keliling Segitiga:
        <ol>
            <li>Masukkan panjang sisi 1 (S1): ${s1}</li>
            <li>Masukkan panjang sisi 2 (S2): ${s2}</li>
            <li>Masukkan panjang sisi 3 (S3): ${s3}</li>
            <li>Hitung keliling dengan rumus: Keliling = S1 + S2 + S3</li>
            <li>Substitusi nilai: Keliling = ${s1} + ${s2} + ${s3}</li>
            <li>Hitung hasil: Keliling = ${keliling.toFixed(2)}</li>
        </ol>
    `;
}

function reset() {
    document.getElementById('a').value = '';
    document.getElementById('b').value = '';
    document.getElementById('s1').value = '';
    document.getElementById('s2').value = '';
    document.getElementById('s3').value = '';
    document.getElementById('luas').innerText = '';
    document.getElementById('keliling').innerText = '';
}