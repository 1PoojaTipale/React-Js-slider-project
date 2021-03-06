const registerAPI="http://localhost:3100/api/register";
const productInsert="http://localhost:3100/api/product/create";
// const categoryInsert="http://localhost:3100/api/category";




export const Function_registerAPI=user=>
{
    return fetch(registerAPI,
        {
            method:"Post",
            headers:
            {
                Accept:"application/json",
                "Content-Type":"application/json"
            },
            body:JSON.stringify(user)
        })
        .then(response=>{
            return response.json();
        })
        .catch(err=>console.log(err));
}

export const Function_insert_product=product=>
{
    return fetch(productInsert,
        {
            method:"Post",
            headers:
            {
                Accept:"application/json",
                "Content-Type":"application/json"
            },
            body:JSON.stringify(product)
        })
        .then(response=>{
            return response.json();
        })
        .catch(err=>console.log(err));
}



// export const Function_insert_category=category=>
// {
//     return fetch(categoryInsert,
//         {
//             method:"Post",
//             headers:
//             {
//                 Accept:"application/json",
//                 "Content-Type":"application/json"
//             },
//             body:JSON.stringify(category)
//         })
//         .then(response=>{
//             return response.json();
//         })
//         .catch(err=>console.log(err));
// }

export const Function_loginAPI=user=>
{
    return fetch('http://localhost:3100/api/login',
        {
            method:"Post",
            headers:
            {
                Accept:"application/json",
                "Content-Type":"application/json"
            },
            body:JSON.stringify(user)
        })
        .then(response=>{
            return response.json();
        })
        .catch(err=>console.log(err));
}

