import { useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import style from './App.module.scss';
import EmployeeDetails from './components/EmployeeDetails/EmployeeDetails';
import EmployeeList from './components/EmployeeList/EmployeeList';

const queryClient = new QueryClient();

function App() {
    return (
        <div className={style.App}>
            <QueryClientProvider client={queryClient}>
                <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<EmployeeList />} />
                        <Route
                            path='/employee/:id'
                            element={<EmployeeDetails />}
                        />
                        <Route
                            path='/employee/new'
                            element={<EmployeeDetails />}
                        />
                    </Routes>
                </BrowserRouter>
            </QueryClientProvider>
        </div>
    );
}

export default App;
