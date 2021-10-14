import "./css/Styles.css";
import GestorVendedores from "./pages/GestorVendedores";
import AdminLayout from "./layouts/AdminLayout";
import EditorProductos from "./pages/EditorProductos";
import EditorVentas from "./pages/EditorVentas";
import LogIn from "./pages/auth/LogIn";
import SignUp from "./pages/auth/SignUp";
import SellerLayout from "./layouts/SellerLayout";
import AuthLayout from "./layouts/AuthLayout";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Products from "./pages/admin/Products";
import Seller from "./pages/admin/Seller";
import Index from "./pages/admin/Index";
import {DarkModeContext} from "./context/darkMode";
import {useState} from "react";


function App() {
    const [darkMode,setDarkMode] = useState(false)
    return (
        <div className='App'>
            <DarkModeContext.Provider value={{darkMode,setDarkMode}}>
                <Router>
                    <Switch>
                        <Route path={['/admin','/admin/products','/admin/vendedor']}>
                            <AdminLayout>
                                <Switch>
                                    <Route path='/admin/products'>
                                        <Products/>
                                    </Route>
                                    <Route path='/admin/vendedor'>
                                        <Seller/>
                                    </Route>
                                    <Route path='/'>
                                        <Index/>
                                    </Route>
                                </Switch>
                            </AdminLayout>
                        </Route>
                        <Route path={['/login','/registro']}>
                            <AuthLayout>
                                <Switch>
                                    <Route path='/login'>
                                        <LogIn/>
                                    </Route>
                                    <Route path='/registro'>
                                        <SignUp/>
                                    </Route>
                                </Switch>
                            </AuthLayout>
                        </Route>
                        <Route path={['/']}>
                            <SellerLayout>
                                <Switch>
                                    <Route path='/'>
                                        <Index/>
                                    </Route>
                                </Switch>
                            </SellerLayout>
                        </Route>
                    </Switch>
                </Router>
            </DarkModeContext.Provider>
        </div>
    );
}

export default App;
