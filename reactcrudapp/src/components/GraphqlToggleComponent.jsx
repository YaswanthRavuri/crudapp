import { useContext } from "react"
import { GraphqlToggleContext } from "../App"



export default function GraphqlToggleComponent(){
    const {setGraphqlToggle} = useContext(GraphqlToggleContext)


    console.log("graphql toggle component")
    return (
        <>
        <div className="container mt-3">
        <div className="row gx-0">
        <div className="form-check form-switch">
            <div className="col-sm-1">
            <input className="form-check-input" type="checkbox" role="switch" id="graphqlToggleCheck" onChange={()=>setGraphqlToggle(prev=>!prev)}/>
            </div>
            <div className="col-sm-2">
            <b><label className="form-check-label" style={{color: "black", marginRight: 60}} for="graphqlToggleCheck">Enable Graphql</label></b>
            </div>
        </div>
        </div>
        </div>
        </>
    )
}