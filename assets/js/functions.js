function sumar(a,b, ...args) {

    console.log(a);
    console.log(b);
    console.log(a + b);

}

function func_ej1(){


    let ej1_c1 = parseFloat(document.getElementById('ej1_c1').value);
    let ej1_c2 = parseFloat(document.getElementById('ej1_c2').value);
    let ej1_c3 = parseFloat(document.getElementById('ej1_c3').value);


    if (ej1_c1 > ej1_c2 && ej1_c1 > ej1_c3) {

        document.getElementById('ej1_resultado').value = ej1_c1;

    }
    else{
        if (ej1_c2 > ej1_c1 && ej1_c2 > ej1_c3){

            document.getElementById('ej1_resultado').value = ej1_c2;

        }
        else{

            document.getElementById('ej1_resultado').value = ej1_c3;

        }


    }

   }