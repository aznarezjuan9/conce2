buscarAuto : function (pat){
    let aux = null;
    for (let i =0; i<autos.length; i++){
        if(autos[i].patente==pat){
            aux = autos[i];
        }
    }

    return aux;
}


venderAuto : function(pat){
    let autoEncontrado = this.buscarAuto(pat);
    if(autoEncontrado != null){
        autoEncontrado.vendido =true;
    }
    else{
        console.log("Auto no encontrado");
    }
},


autosParalaVenta : function(){
    let autosVenta = this.autos.filter(function(elemento){
        return elemento.vendido ==false;
    })
    return autosVenta;
}

autosNuevos : function(){
    let autosEnVenta = this.autosParaLaVenta();
     let autos0KM = autosEnVenta.filter(function(elemento){
         return elemento.km <100;
     })
    return autos0KM;
 }

 listaDeVentas : function(){

    let autosVendidos = this.autos.filter(function(elemento){
        return elemento.vendido ==true;
    })
    let preciosVentas = [ ];
    for (let i=0; i<autosVendidos.length; i++){
       preciosVentas.push(autosVendidos[i].precio)
    }
    return preciosVentas;

}
totalDeVentas : function(){
    let listaVentas = this.listaDeVentas();
    let totalVentas = listaVentas.reduce(function(acumulador, elemento){
        return acumulador + elemento},0)
    return totalVentas
},

puedeComprar : function(auto, persona){
    let cuota = auto.precio / auto.cuotas
    if(auto.precio < persona.capacidadDePagoTotal && cuota < persona.capacidadDePagoEnCuotas){
       return true
    }else{
       return false
    }
    
    autosQuePuedeComprar: function(persona){
        let paraVenta= this.autosParaLaVenta()
        let aux = [];
        for (let i=0;i<paraVenta.length;i++){
            if(this.puedeComprar(paraVenta[i],persona)==true){
                aux.push(paraVenta[i])
            }
        }return aux
    }
