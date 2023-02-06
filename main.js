
function calculoPerimetroCuadrado() {
  let input = document.getElementById('side');
  let value = parseInt(input.value);

  //Validacion
  if (!Number.isInteger(value)) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'You can only enter numbers',
    })
  } else {
    // A = L * 4 || A = L + L + L + L
    let calculo = value * 4;
    Swal.fire(`The result of the perimeter of the square is: ${calculo}`)
  }
}

function calculoAreaCuadrado() {
  let input = document.getElementById('side');
  let value = parseInt(input.value);

  //Validacion
  if (!Number.isInteger(value)) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'You can only enter numbers',
    })
  } else {
    let calculo = value * 2;
    Swal.fire(`The result of the area of the square is: ${calculo}`)
  }

}

function calculoPerimetroTriangulo() {
  let input1 = document.getElementById('side1');
  let input2 = document.getElementById('side2');
  let input3 = document.getElementById('side3');

  let value1 = parseInt(input1.value);
  let value2 = parseInt(input2.value);
  let value3 = parseInt(input3.value);


  //Validacion
  if (!Number.isInteger(value1) & !Number.isInteger(value2) || !Number.isInteger(value3)) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'You can only enter numbers',
    })
  } else {
    let calculo = value1 + value2 + value3;
    Swal.fire(`The result of the perimeter of the triangle is: ${calculo}`)
  }
}

function calculoAreaTriangulo() {
  let input1 = document.getElementById('base');
  let input2 = document.getElementById('altura');

  let value1 = parseInt(input1.value);
  let value2 = parseInt(input2.value);


  //Validacion
  if (!Number.isInteger(value1) || !Number.isInteger(value2)) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'You can only enter numbers',
    })
  } else {
    let calculo = (value1 * value2) / 2;
    Swal.fire(`The result of the area of the triangle is: ${calculo}`)
  }
}

function calculoDiametroCirculo() {
  let input = document.getElementById('lado');
  let value = parseInt(input.value);

  //Validacion
  if (!Number.isInteger(value)) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'You can only enter numbers',
    })
  } else {
    let calculo = value * 2
    Swal.fire(`The result of the area of the triangle is: ${calculo}`)
  }
}

function calculoAreaCirculo() {
  let input = document.getElementById('lado');
  let value = parseInt(input.value);


  //Validacion
  if (!Number.isInteger(value)) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'You can only enter numbers',
    })
  } else {
    let calculo = (value * value) * Math.PI
    let result = calculo;
    Swal.fire(`The result of the area of the triangle is: ${calculo}`)
  }
}

function calculoPerimetroCirculo() {
  let input = document.getElementById('lado');
  let value = parseInt(input.value);

  //Validacion
  if (!Number.isInteger(value)) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'You can only enter numbers',
    })
  } else {
    let calculo = (value * 2) * Math.PI;
    Swal.fire(`The result of the area of the triangle is: ${calculo}`)
  }
}