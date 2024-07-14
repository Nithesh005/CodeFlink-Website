import './style.css'
export const ButtonComp = ({text}) =>{
    return(
        <div className="buttonComp df jcsb aic">
            <button className="btncomp">{text}</button>
            {/* <div className="explore-icon"></div> */}
            <i className="fas fa-arrow-right explore-icon" style={{ marginLeft: 8 }}></i>
        </div>
    )
}