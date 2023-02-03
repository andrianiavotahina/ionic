import {useHistory} from "react-router";

interface ContainerProps { }

const Header: React.FC<ContainerProps> = (message?: any) => {
    function logOut(){
        localStorage.removeItem("id")
        history.push("/home")
    }
    const history=useHistory();
    return (
        <div className="fixed-top shadow-sm p-3 mb-5 bg-body rounded" id="top">
            <div className="row">
                <nav>
                    <div className="icon">
                        <i className="fa-solid fa-list" aria-hidden="true" onClick={(e=>{
                            history.push("/List")
                        })}/>
                    </div>
                    <div className="icon">
                        <i className="fa-sharp fa-solid fa-money-bill-trend-up" aria-hidden="true" onClick={(e=>{
                            history.push("/rechargement")
                        })}/>
                    </div>
                    <div className="icon">
                        <i className="fa-solid fa-bell" aria-hidden="true"/>
                    </div>
                    <div className="icon">
                        <i className="fa fa-sign-out" aria-hidden="true" onClick={logOut}/>
                    </div>
                </nav>
            </div>
        </div>
    )
}
export default Header;