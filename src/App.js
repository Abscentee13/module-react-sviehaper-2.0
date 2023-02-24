import React, {useState} from 'react';

import {Navigate, Route, Routes} from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';

import { ThemeProvider } from "@material-ui/core/styles";
import { CssBaseline } from '@material-ui/core';

import css from './App.module.css';

import { MainLayout } from './layouts';
import {Header, ThemeSelection} from './components';
import { ThemeContext } from './themes/theme-context';
import { lightTheme, darkTheme } from './themes/theme';


const App = () => {


    //////////////////////////////////////
    const [theme, setTheme] = useState(lightTheme ? lightTheme : darkTheme);

    const toggleTheme = () => {
        setTheme(theme === lightTheme ? darkTheme : lightTheme);
    };
////////////////////////////////////////////


    return (
        <Provider store={store}>
        <ThemeContext.Provider value={{ theme, setTheme: toggleTheme }}>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <div className={css.setting}>
                <div className={css.themeSetting}>
                        <ThemeSelection />
                </div>
            </div>
            <Header />
            <Routes>
                <Route index element={ <Navigate to={'home'} /> } />
                <Route path={'home'} element={<MainLayout/>}/>
                {/*<Route path="/genre/:id" component={GenrePage} />*/}
                {/*    /!*<Route index element={<Navigate to={'cars'}/>}/>*!/*/}

                {/*    /!*<Route element={<AuthRequireLayout/>}>*!/*/}
                {/*    /!*    <Route path={'cars'} element={<CarsPage/>}/>*!/*/}
                {/*    /!*</Route>*!/*/}

                {/*    <Route path={'movies'} element={<MoviesPage />}/>*/}
                {/*</Route>*/}
                    {/*<Route path={'register'} element={<RegisterPage/>}/>*/}

            </Routes>
        </ThemeProvider>
        </ThemeContext.Provider>
        </Provider>
    );
}

export {App};