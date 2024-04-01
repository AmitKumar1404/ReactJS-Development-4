// 1. Import Area

// import something from somelibrary
import Amit from "react"

// import something from somelocation
// import { NameImport } from somelocation
import { MyComp3 } from "./MyComp3"


// 2. Function definition area
export const MyComp2=()=>
{
    // Every function return something
    return (
        <Amit.Fragment>
            <span>MyComp2</span>
            <MyComp3 />
        </ Amit.Fragment>
    )
}

// 3. Export Area

// 3.1 Default export

// 3.2 Name Export