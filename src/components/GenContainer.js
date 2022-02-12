function GenContainer(props) {
    if (props.dispMBI!=="") {
        return (
            <div className="GenContainer">
                <button className="genButton" onClick={()=>props.genMBI()}>Generate MBI</button>
                <div className="MBIDisplay">
                    {props.dispMBI}
                </div>
            </div>
        );
    } else {
        return (
            <div className="GenContainer">
                <button className="genButton" onClick={()=>props.genMBI()}>Generate MBI</button>
            </div>
        );
    }
}

export default GenContainer;