import React from "react";



const MyHeavyComponent = ({ myprops }: any) => {
    console.log("Rendering MyHeavyComponent");
    console.log(myprops);
    return (<></>);
}

export default React.memo(MyHeavyComponent);