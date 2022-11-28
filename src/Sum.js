export function Sum({numbers, object}){
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