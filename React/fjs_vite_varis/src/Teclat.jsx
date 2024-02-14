

function Teclat({ prem }) {

    const botons = ["1", "2", "3", "+", "4", "5", "6", "-", "7", "8", "9", "*", "C", "0", "=", "/", "M", "RM"]

    return (
        <div class="grid grid-cols-4 gap-4">
            {
                botons.map(item => <button onClick={() => prem(item)} class={"px-4 mx-4 border w-full "}>{item}</button>)
            }


        </div>
    )
}


export default Teclat;