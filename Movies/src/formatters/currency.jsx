const currency = (number) => {
    console.log(number)
        return number.toLocaleString("en-US", {
                style: "currency", 
                currency: "USD",
            })
    };
export default currency;


