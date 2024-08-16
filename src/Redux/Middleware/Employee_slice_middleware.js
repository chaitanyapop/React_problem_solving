export let employee_slice_middleware=(store)=>(next)=>(action)=>{
    if(typeof(action)==='function')
        {
            action(store.dispatch)
        }
        else
        {
            next(action)
        }
}