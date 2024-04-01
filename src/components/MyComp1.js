// 1. Import Area

// import something from somelocation/somelibrary
import { MyComp2 } from "./MyComp2";

// 2. Function Definition Area
function MyComp1()
{
  //  Every function return something
  return <h1>Welcome <MyComp2 /> </h1>
}

// 3. Export Area
// There are 2 ways you can export in NodeJs
// 3.1. Default Export
export default MyComp1;
// 3.2. Named Export