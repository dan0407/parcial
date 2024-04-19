

export const getdata = async (Text:any) => {
    try{
    const data = await fetch(`https://cataas.com/cat/says/:${Text}`). then((res) => res.json());
    console.log(data);
    return data;   
}
catch(error){
    console.log(error)
    return error;
}
}


