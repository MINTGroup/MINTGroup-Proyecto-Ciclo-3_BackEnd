import "./css/Styles.css";
import GestorVendedores from "./pages/admin/GestorVendedores";
import AdminLayout from "./layouts/AdminLayout";
import EditorProductos from "./pages/admin/EditorProductos";
import EditorVentas from "./pages/admin/EditorVentas";
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
import IndexAuth from "./pages/auth/IndexAuth";
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
                                    <Route path='/admin/ventas'>
                                        <EditorVentas/>
                                    </Route>
                                    <Route path='/admin/vendedores'>
                                        <GestorVendedores/>
                                    </Route>
                                    <Route path='/admin/products-edit'>
                                        <EditorProductos/>
                                    </Route>
                                </Switch>
                            </AdminLayout>
                        </Route>
                        <Route path={['/seller']}>
                            <SellerLayout>
                                <Switch>
                                    <Route path='/seller'>
                                    </Route>
                                </Switch>
                            </SellerLayout>
                        </Route>
                        <Route path={['/','/login','/registro']}>
                            <AuthLayout>
                                <Switch>
                                    <Route path='/login'>
                                        <LogIn/>
                                    </Route>
                                    <Route path='/registro'>
                                        <SignUp/>
                                    </Route>
                                    <Route path='/'>
                                        <IndexAuth/>
                                    </Route>
                                </Switch>
                            </AuthLayout>
                        </Route>
                    </Switch>
                </Router>
            </DarkModeContext.Provider>
        </div>
    );
}

export default App;
