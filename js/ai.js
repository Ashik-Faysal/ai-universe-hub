const loadAI =()=>{
    const URL =`https://openapi.programming-hero.com/api/ai/tools`
    fetch(URL).then(res=>res.json())
    .then(data=>displayAI(data.data.tools))
    .catch(err=>console.log(err))
};
const displayAI =(data)=>{
    console.log(data);
}
loadAI();