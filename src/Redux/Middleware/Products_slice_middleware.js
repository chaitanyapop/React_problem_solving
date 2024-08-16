export let product_slice_middleware=(store)=>(next)=>(action)=>{

    if(typeof(action)==='function')
    {
        console.log(action)
        console.log("I am in products slice midd")
        action(store.dispatch)
    }
    else
    {
        next(action)
    }

}