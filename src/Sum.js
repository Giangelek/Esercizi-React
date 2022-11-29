export function Sum({numbers = [1], object = [computer]}){
    let totale = 0
    numbers.forEach(number => {
        totale += number
    });

    return(
        <div>
            <p>Attualmente possiedo circa {totale} {object} !</p>
        </div>
    )

}

//utilizzo dei valori di default per il componente