const monto = document.querySelector('#monto');
const fecha = document.querySelector('#fecha');
const tipo = document.querySelector('#tipo');
const descripcion = document.querySelector('#descripcion');
const form  = document.querySelector('#movimientos');
const cuerpoTabla = document.querySelector('#tabla-cuerpo');
const error = document.querySelector('#error')


let movimientos = [];

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    


    const movimiento = {
        monto: monto.value,
        fecha: fecha.value,
        tipo: tipo.value,
        descripcion: descripcion.value

    }
    movimientos = [...movimientos,movimiento]
    render();
    form.reset();
    
    console.log(movimientos);
    
});

const render = ()=> {
/*     movimientos.map((movimiento)=>{
        const {monto,fecha,descripcion,tipo} = movimiento;

         cuerpoTabla.innerHTML = `    <tr>
        <td>${monto}</td>
        <td>${descripcion}</td>
        <td>${fecha}</td>
        <td>${tipo}</td>
      </tr>`

    })
    return; */
    cuerpoTabla.innerHTML="";
    movimientos.forEach((movimiento)=>{
        const {monto,fecha,descripcion,tipo} = movimiento;

        

        cuerpoTabla.innerHTML += `    <tr ${tipo=='Ingreso'?`class='ingreso'`:`class='egreso'`}>
        <td>${monto}</td>
        <td>${descripcion}</td>
        <td>${fecha}</td>
        <td>${tipo}</td>
      </tr>`

    })
    return;

}
