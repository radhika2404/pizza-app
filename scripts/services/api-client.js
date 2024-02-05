/*
Network talk
HTTP/HTTPS
Asnyc Call , promise
a) then  b)catch
*/
//makeNetworkCall('https://gist.githubusercontent.com/kshirsagarps/36fade16fa39202715656ef487aaf7b0/raw/2b682e589ef283f06be42d2799dfa54f57794a6e/Pizza.json');
async function makeNetworkCall(URL){
try{
   const response =  await fetch(URL);
   const data= await response.json();
   console.log("data is common data",data);
   return data;
}
catch(err){
    console.log("Error",err);
    throw err;
}
//       fetch(URL);          // wrapper method
// promise.then((response)=>{
// // header+body
// const promise2=response.json();
// promise2.then(data=>{
 // }).catch(err=>{
// })
// }).catch((err)=>{
// });
}
export default makeNetworkCall;
 