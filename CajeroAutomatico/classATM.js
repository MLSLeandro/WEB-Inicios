class billete{
    constructor(denominacion, cantidad){
        this.denominacion = denominacion;
        this.cantidad = cantidad;
    }
}

class cajeroAutomatico
{
    constructor(stockBilletes){
        this.billetesATM = stockBilletes.slice();
        this.billetesENT = [];
    }
    validarRetiro( valorRetiro){
        var totalDisponible = 0;
        for ( var _billete of this.billetesATM ){
            totalDisponible = totalDisponible + (_billete.denominacion * _billete.cantidad);
        }
        if ( totalDisponible < valorRetiro ){
            return false;
        }
        else{
            return true;
        }
    }
    dispensarDinero( valorRetiro){
        if ( this.validarRetiro(valorRetiro)){
            var dineroXDispensar = valorRetiro;
            var canBilletesEntregar = 0;            
            for ( var _billete of this.billetesATM ){
                if ( dineroXDispensar > 0 && dineroXDispensar >= _billete.denominacion ){
                    canBilletesEntregar = Math.floor(dineroXDispensar / _billete.denominacion);
                    if ( canBilletesEntregar > _billete.cantidad ){
                        canBilletesEntregar = _billete.cantidad;
                    }
                    this.billetesENT.push(new billete(_billete.denominacion, canBilletesEntregar));
                    dineroXDispensar = dineroXDispensar - (_billete.denominacion * canBilletesEntregar);
                }
            }
            if ( dineroXDispensar > 0 ){
                this.billetesENT.splice(0, this.billetesENT.length);
                return false;            
            }
            else{
                return true;
            }
        }
        else{
            return false;
        }        
    }
}