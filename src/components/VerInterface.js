function VerInterface(props){
    return(
        <div className="VerInterface">
            <input id="validate" className="verInput" type="text" name="check"></input>
            <button className="verButton" onClick={()=>props.verifyMBI()}>Verify MBI Number</button>
        </div>
    );
}

export default VerInterface;
