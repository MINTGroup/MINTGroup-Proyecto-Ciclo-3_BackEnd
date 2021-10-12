import "./css/Styles.css";
import GestorVendedores from "./pages/GestorVendedores";
import Layout from "./layouts/Layout";
import EditorProductos from "./pages/EditorProductos";
import EditorVentas from "./pages/EditorVentas";
import LogIn from "./pages/LogIn";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import SignUp from "./pages/SignUp";


function App() {
    return (
        <div className="App">
            <Router>
                <Layout>
                    <Switch>
                        <Route path="/EditorProductos">
                            <EditorProductos/>
                        </Route>
                        <Route path="/EditorVentas">
                            <EditorVentas/>
                        </Route>
                        <Route path="/LogIn">
                            <LogIn/>
                        </Route>
                        <Route path="/SignUp">
                            <SignUp/>
                        </Route>
                        <Route path="/GestorVendedores">
                            <GestorVendedores/>
                        </Route>
                    </Switch>
                </Layout>
            </Router>
        </div>
    );
}

export default App;
