/**
 * Conversion de unidades de metros, pies, yardas y pulgadas
 * @method conversionUnidades
 * @param (string) id - Id de los inputs del formulario
 * @param (number) value - El valor de los inputs del formulario
 * @return Valor que retorno
 */
function conversionUnidades (id, value)
{
    let metro, pulgada, pie, yarda;
    if (value.includes(","))
    {
        value = value.replace(",", ".");
    }
    if (isNaN(value))
    {
        alert("Se ingreso un valor incorrecto");
        metro = "";
        pulgada = "";
        pie = "";
        yarda = "";
    }
    else if (id=="metro")
    {
        metro = value;
        pie = value*3.28084;
        yarda = 1.09361*value;
        pulgada = value*39.3701;
    }
    else if (id=="pulgada")
    {
        pulgada = value
        pie = value*0.0833333;
        yarda = 0.0277778*value;
        metro = value*0.0254;
    }
    else if (id=="pie")
    {
        pie = value;
        metro = value*0.3048;
        yarda = 0.333333*value;
        pulgada = value*12;
    }
    else if (id=="yarda")
    {
        yarda = value;
        pie = value*3;
        metro = 0.9144*value;
        pulgada = value*36;
    }
    document.lasUnidades.unid_metro.value = Math.round(metro*100)/100;
    document.lasUnidades.unid_pie.value = Math.round(pie*100)/100;
    document.lasUnidades.unid_yarda.value = Math.round(yarda*100)/100;
    document.lasUnidades.unid_pulgada.value = yarda.toFixed(2);
    /*esta ultima es otra forma de redondear mas facil*/
}

function convertirGR (id)
{
    let grad, rad;
    if (id=="grados")
    {
        grad = document.getElementById("grados").value;
        rad = (grad*Math.PI)/180;
    }
    else if (id=="radianes")
    {
        rad = document.getElementById("radianes").value;
        grad = (rad*180)/Math.PI;
    }
    document.getElementById("grados").value = grad;
    document.getElementById("radianes").value = rad;
}

function mostrar_ocultar(ValorMO)
{
    if (ValorMO=="val_mostrar")
    {
        document.getElementById("unDiv").style.display = 'block';
    }
    else if (ValorMO=="val_ocultar")
    {
        document.getElementById("unDiv").style.display = 'none'
    }
}

function calcularSuma()
{
    let num1, num2;
    num1 = Number(document.getElementById("nums1").value);
    num2 = document.getElementsByName("sum_num2")[0].value;
    document.getElementById("totalS").innerHTML = num1 + Number(num2);
}

function calcularResta()
{
    let num1, num2;
    num1 = Number(document.getElementById("numr1").value);
    num2 = document.getElementById("numr2").value;
    document.getElementById("totalR").value = num1 - Number(num2);
}

function calcularMultiplicacion()
{
    let num1, num2;
    num1 = Number(document.getElementById("numm1").value);
    num2 = document.getElementById("numm2").value;
    document.getElementById("totalM").value = num1 * Number(num2);
}

function calcularDivision()
{
    let num1, num2;
    num1 = Number(document.getElementById("numd1").value);
    num2 = document.getElementById("numd2").value;
    document.getElementById("totalD").value = num1 / Number(num2);
}

function cargarWeb()
{
    let cantidad, unidad, urlComp;
    cantidad = document.getElementById("distancia").value;
    unidad = document.getElementById("unidades").value;
    urlComp = "segundaWeb.html#"+cantidad+"#"+unidad;
    window.open(urlComp);
}

function cargarResultado()
{
    let cantidad, unidad, urlComp;
    urlComp = window.location.href;
    urlComp = urlComp.split("#");
    console.log(urlComp);

    cantidad = urlComp[1];
    unidad = urlComp[2];

    document.getElementById("dist").value = cantidad + " " + unidad;
}

function dibujarCirCuad()
{
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    var xMax = canvas.width;
    var yMax = canvas.height;
    var margen = 5;
    ctx.fillStyle = "#d51526";
    ctx.fillRect(0+margen, yMax-margen, 40, -40);
    ctx.arc(xMax/2, yMax/2, 75, 0, 2*Math.PI);
    ctx.stroke(); //esto marca la linea nomas
    ctx.fillStyle = "#070000"
    ctx.fill(); // esto pinta la figura
}
var bandera;
function dibujar(event)
{
    var canvas = document.getElementById("miCanvas");
    ctx = canvas.getContext("2d");
    var posX = event.clientX;
    var posY = event.clientY;
    console.log(posX, posY);
    canvas.onmousedown = function (){bandera = true};
    canvas.onmouseup = function (){bandera = false};
    if (bandera)
    {
        ctx.fillRect(posX, posY, 5, 5)
        ctx.fill;
    }
}

function limpiarCanvas()
{
    var canvas = document.getElementById("miCanvas");
    ctx = canvas.getContext("2d");
    canvas.width = canvas.width;
}

function dibujarCuadriculado()
{
    var canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");
    var alturaMax = canvas.height;
    var anchoMax = canvas.width;

    ctx.beginPath();
    for (var i=0; i<alturaMax; i=i+20)
    {
        ctx.moveTo(0, i);
        ctx.lineTo(anchoMax, i);
        ctx.strokeStyle = "#a9a8a8";
        ctx.stroke();
    }
    ctx.closePath();

    ctx.beginPath();
    for (var i=0; i<anchoMax; i=i+20)
    {
        ctx.moveTo(i, 0);
        ctx.lineTo(i, alturaMax);
        ctx.strokeStyle = "#a9a8a8";
        ctx.stroke();
    }
    ctx.closePath();

    ctx.beginPath();
    ctx.moveTo(500, 0);
    ctx.lineTo(500, alturaMax);
    ctx.strokeStyle = "#e71515";
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.moveTo(0, 300);
    ctx.lineTo(anchoMax, 300);
    ctx.strokeStyle = "#e71515";
    ctx.stroke();
    ctx.closePath();
}

function dibujarImagen (posX, posY)
{
    var canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");

    console.log(posX, posY);
    var img = new Image();
    img.src="images/auto.png";

    canvas.width = canvas.width;
    img.onload = function ()
    {
        ctx.drawImage(img, posX, posY);
    }
}