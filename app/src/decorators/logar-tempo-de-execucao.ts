export function LogTempoExecucao(emSegundos: boolean = false){
   // const t2 = performance.now();
    //    console.log(`Tempo de execução do método adiciona : ${(t2 - t1/1000)}`);
     
    return function(
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ){
        const metodoOriginal = descriptor.value;
        descriptor.value = function(...args: Array<any>){
            let divisor = 1;
            let unidade = 'milisegundos';
            if(emSegundos){
                divisor = 1000;
                unidade = 'segundos';
            }
            const t1 = performance.now();
            const retorno = metodoOriginal.apply(this, args);
            const t2 = performance.now();
            console.log(`${propertyKey}, tempo de execução: ${(t2 - t1)/divisor} ${unidade}`);
            retorno
        }
        return descriptor;
    }
}