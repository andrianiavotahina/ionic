import './ExploreContainer.css';
import {useEffect, useState} from "react";
import {url} from "../Configuration";
import {useHistory} from "react-router";

interface ContainerProps { }

const ExploreContainer: React.FC<ContainerProps> = (message?: any) => {
    const history=useHistory()
    const [login,setLogn]=useState("Koto");
    const [mdp,setPwd]=useState("Koto");
    async function log() {
        //const history=useHistory()
        let itms={login,mdp}
        let result= await fetch(url+"/login",{
            method:"POST",
            headers: {
                "Content-Type":"application/json",
                "Accept":"application/json"
            },
            body:JSON.stringify(itms)
        });
        const user=await result.json();
        console.log(user.id_client)
        if (user.id_client<=0){
            history.push("/home")
        }else {
            localStorage.setItem("id",user.id_client)
            history.push("/List")
        }
    }
    return (
      <main>
          <div className="container">
              <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
                  <div className="container">
                      <div className="row justify-content-center">
                          <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
                              <div className="card mb-3">
                                  <div className="card-body">
                                      <div className="pt-4 pb-2">
                                          <h5 className="card-title text-center pb-0 fs-4">Login to Your Account</h5>
                                          <p className="text-center small">Enter your username & password to login</p>
                                      </div>
                                      <form className="row g-3 needs-validation" method="POST">
                                          <div className="col-12">
                                              <label htmlFor="yourUsername" className="form-label">Username</label>
                                              <div className="input-group mb-3">
                                                  <span className="input-group-text" id="basic-addon1">@</span>
                                                  <input type="text" className="form-control" placeholder="Username"
                                                         aria-label="Username" aria-describedby="basic-addon1" value="Koto" onChange={(event => setLogn(event.target.value))}/>
                                              </div>
                                          </div>
                                          <div className="col-12">
                                              <label htmlFor="yourPassword" className="form-label">Password</label>
                                              <input type="password" name="password"
                                                     className="form-control" id="yourPassword" value="Koto" onChange={(e =>setPwd(e.target.value))} required/>
                                          </div>
                                          <div className="col-12">
                                              <div className="row">
                                                  <div className="col-6">
                                                      <button className="btn btn-primary w-100" type="button" onClick={log}>Login</button>
                                                  </div>
                                                  <div className="col-6">
                                                      <button className="btn btn-secondary w-100" type="button" onClick={(e=>{
                                                          history.push("/sing")
                                                      })}>sing up</button>
                                                  </div>
                                              </div>
                                          </div>
                                      </form>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </section>
          </div>
      </main>
  );
};

export default ExploreContainer;
