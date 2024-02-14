

function Teclat({prem}){

 
    return (
        <>
            <button onClick={()=>prem("1")} class="px-4 mx-4 border">1</button>
            <button onClick={()=>prem("2")} class="px-4 mx-4 border" >2</button>
            <button onClick={()=>prem("3")} class="px-4 mx-4 border" >3</button>
            <button onClick={()=>prem("4")} class="px-4 mx-4 border" >4</button>
        </>
    )
}


export default Teclat;