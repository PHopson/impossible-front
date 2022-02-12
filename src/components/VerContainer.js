import VerInterface from "./VerInterface"

function VerContainer(props) {
    if (props.validMBI===null){
        return(
            <div className="VerContainer" >
                <VerInterface 
                    verifyMBI={props.verifyMBI}
                />
            </div>
        );
    } else {
        let isValid = (props.validMBI?"YES":"NO");
        let valClass = (props.validMBI?"IsValid":"NotValid")
        return(
            <div className="VerContainer" >
                <VerInterface 
                    verifyMBI={props.verifyMBI}
                />
                <div className="validDisplay">
                    Valid? <span className={valClass}>{isValid}</span>
                </div>
            </div>
        );
    }

} 

export default VerContainer;