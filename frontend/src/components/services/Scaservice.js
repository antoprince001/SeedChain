
export default {
    getProducts : ()=>{
        return fetch('/merchant/getProduct',{
            method : "get",
            headers:{
                'Content-Type' : 'application/json',
            }
        })
                .then(response=>{
                    if(response.status !== 401){
                        // response.json().then((data) =>{
                        //     console.log('hook');
                        //     console.log(data);
                        //     return data //response.json().then(data => data);

                        // })
                        return response.json().then(data => data);
                    }
                    else
                        return {message : {msgBody : "UnAuthorized",msgError : true}};
                });
    },
    postProduct : prod=>{
        return fetch('/merchant/addProduct',{
            method : "post",
            body : JSON.stringify(prod),
            headers:{
                'Content-Type' : 'application/json',
            }
        }).then(response=>{
            if(response.status !== 401){
                //console.log(response.json())
                return response.json().then(data => data);
            }
            else
                return {message : {msgBody : "UnAuthorized"},msgError : true};
        });
    } ,


    getProductsByApi : ()=>{
        return fetch('/merchant/getProductsByApi',{
            method : "get",
            credentials : 'include',
            headers:{
                'Content-Type' : 'application/json'
                        }
        })
                .then(response=>{

                        return response.json().then(data => data);

                });
    },

    computePrice : (details) =>{
      return fetch('/advertiser/computePrice',{
        method: "post",
        body : JSON.stringify(details),
        headers:{
            'Content-Type' : 'application/json',
        }
    }).then(response=>{
        //if(response.status !== 401){
            //console.log(response.json())
            console.log('here in service');
            return response.json().then(data => data);
        //}
        //else
        //    return { err : 'error message'};
    });
    }

}
