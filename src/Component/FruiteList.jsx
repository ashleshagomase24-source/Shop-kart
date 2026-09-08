
function FruiteList() {
    const fruits=["Apple","Banana","Mango","Grapes"];
    return(
        <>
        <ul>
         {fruits.map((fruit)=>(
        <li>{fruit}</li>
         ))}
         </ul>
        </>
    );
}export default FruiteList