console.group('Cuadrado');
const ladoCuadrado = 5;
const perimetroCuadrado = ladoCuadrado * 4;
const areaCuadrado = ladoCuadrado * ladoCuadrado;


const calcularPerimetroCuadrado = (lado) => {
    return {
        perimetro: lado * 4,
        area: lado + lado
    }
}
console.log(
    ladoCuadrado,
    perimetroCuadrado,
    areaCuadrado
    );

console.groupEnd('Cuadrado');
console.group('Triangulo');

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;

const areaTriangulo = (baseTriangulo * alturaTriangulo) /2;


const calcularPerimetroTriangulo = (lado1,lado2,base,altura) => {
    return {
        perimetro: lado1 + lado2 + base,
        area: (base + altura) /2
    }
}
console.log({
    ladoTriangulo1,
    ladoTriangulo2,
    baseTriangulo,
    alturaTriangulo,
    perimetroTriangulo,
    areaTriangulo,
});

console.groupEnd('Triangulo');
console.group('Circle');
const radio = 3;
const diametro = radio * 2;
const PI = Math.PI;
const circunferencia = (diametro * PI).toFixed(2);  
const areaCirculo = (radio**2) * PI;

console.log({
    radio,
    diametro,
    PI,
    circunferencia,
    areaCirculo,

});
const calcularCirculo = (radio ) => {
    return {
        circunferencia: (radio * 2) * PI,
        areaCirculo: (radio ** 2) * PI,
    }
}
console.groupEnd('Circle');

console.group('Triangulo Isoseles');
const calcularAlturaTriangulo = (lado1, base) => {
    if (lado1 == base) {
        console.warn('Este no es un triangulo isosceles');
    } else {
        //h = raiz cuadrada de lado1 ** 2 - (base ** 2) / 4
        return Math.sqrt((lado1 ** 2) - ((base ** 2) / 4));
    }
}
console.groupEnd('Triangulo Isoseles');
console.group('Triangulo Escaleno');
const calcularAlturaEscaleno = (lado1, lado2, base) => {
    if (lado1 != lado2 && lado1 != base && lado2 != base ) {
        const S = (lado1 + lado2 + base) / 2;
        S.f
        return ((2 / lado1)*(Math.sqrt(S*(S-lado1)*(S - lado2)*(S -base)))).toFixed()
    }else {
        console.warn('No es un triangulo escaleno');
    }
}
console.groupEnd('Triangulo Escaleno');

