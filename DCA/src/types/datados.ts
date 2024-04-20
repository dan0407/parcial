export const getfraces = async (text:any) => {
    try{
    const data = await fetch(`https://cataas.com/cat/says/${text}`). then((res) => res.json());
    console.log(data);
    return data;   
}
catch(error){
    console.log(error)
    return error;
}
}

