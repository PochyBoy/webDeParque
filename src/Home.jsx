import {useContext} from "react";
import TraductorContext from "./TraductorContext.js";

function Home(){

    const Traductor = useContext(TraductorContext);

    return(

        <>

            <>
                <h1>{Traductor.traduce('estas')} {' '} P1</h1>
        </>

        </>
    )
}
export default Home