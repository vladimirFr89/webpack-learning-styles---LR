function summ(...numbers) {
    let total = 0;

    numbers.forEach((item)=>{
        total += item;
    });

    return total;
}

export default summ;