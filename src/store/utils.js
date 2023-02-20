export function filterPosts (response, assignation){
    return assignation==='assigned' ? 
    Object.values(response).filter((el) => el.assigned==true) :
    Object.values(response).filter((el) => el.assigned==false)
}