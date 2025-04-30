import React from "react";
import Class_compo from "./Component/Class-compo";
import Func_compo from "./Component/Func_compo";
import Hello from "./Jsx/Hello";
import Css from "./Css/Css";
import Main_compo from "./Props/Main_compo";
import Main_state from "./State/Main_state";
import Form from "./form_hadling/Form";
import Form2 from "./form_hadling/Form2";
import UseEffect from "./useEffect/UseEffect";
import User from "./useEffect/User";
import Userdata from "./useEffect/Userdata";
import Card from "./useEffect/Card";
import Cardreac from "./Bootstrap/Cardreac";
import Header from "./Bootstrap/Header";
import Footer from "./Bootstrap/Footer";
import Login from "./Bootstrap/Login";
import LifeCycle from "./LifeCycle/LifeCycle";
import Func_life from "./LifeCycle/Func_life";
import Usedata from "./hooks/Usedata";
import Drilling from "./UseContext/Drilling";

function App() {
  return (
    <div>
      <h1>Hell this App data</h1>

      {/* componen */}
      {/* <Class_compo /> */}
      {/* <Func_compo /> */}

      {/* jsx compo */}
      {/* <Hello /> */}

      {/* csss */}
      {/* <Css /> */}

      {/*  props */}
      {/* <Main_compo /> */}

      {/* state */}
      {/* <Main_state /> */}

      {/* form hadling */}
      {/* <Form /> */}
      {/* <Form2 /> */}


      {/* api load  ;- useEffect */}
      {/* <UseEffect /> */}
      {/* <User /> */}
      {/* <Userdata /> */}
      {/* <Card /> */}
      {/* <Cardreac /> */}
      {/* <Header /> */}
      {/* <Footer /> */}
      {/* <Login /> */}
      {/* <LifeCycle /> */}
      {/* <Func_life /> */}
      {/* <Usedata /> */}
      <Drilling />
    </div>
  )
}

export default App;