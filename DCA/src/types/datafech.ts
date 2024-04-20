

export const getdata = async () => {
    try{
    const data = await fetch(`https://catfact.ninja/fact`). then((res) => res.json());
    console.log(data.fact);
    return data.fact;   
}
catch(error){
    console.log(error)
    return error;
}
}
getdata();



