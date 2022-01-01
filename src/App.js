import React, { useState } from "react";
import NavBar from "./components/NavBar";
import ViewApplicants from "./components/ViewApplicants";
import AddApplicants from "./components/AddApplicants";
import UpdataApllicant from "./components/UpdataApllicant";

import { Switch, Route } from "react-router-dom"
function App() {
  const [uid, setUid] = useState("");
  return (
    <div>
      <NavBar></NavBar>
      <div>
        <Switch>
          <Route exact path="/addapplicants" ><AddApplicants></AddApplicants></Route>
          <Route path="/viewapplicants" render={() => (<ViewApplicants uid={uid} setUid={setUid} />)} ></Route>
          <Route path="/updateApplicant/:id" render={() => (<UpdataApllicant uid={uid} setUid={setUid} />)}></Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
