import { useNavigate } from 'react-router-dom';
import style from './EmployeeList.module.scss';
import { useMutation, useQueryClient, useQuery } from 'react-query';
import axios from 'axios';
import { Employee } from '../EmployeeDetails/EmployeeDetails';
import { yearsSinceStart } from '../../service/EmployeeAPI';

const EmployeeList = () => {
    const navigate = useNavigate();
    const queryClient = useQueryClient();

    const employeeList = useQuery({
        queryKey: ['employees'],
        queryFn: () => axios.get('http://localhost:8080/employees'),
    });

    if (employeeList.isLoading) return <h1>Loading...</h1>;
    if (employeeList.isError) return <h1>Error</h1>;

    const nav = (destination: string) => {
        navigate(`/employee/${destination}`);
    };

    return (
        <div>
            <h1 className={style.Header}>Employees' list</h1>
            <div className={style.Info}>
                <p className={style.Description}>
                    Please click on 'Edit' to find more details on each employee
                </p>
                <button className={style.Button} onClick={() => nav('new')}>
                    Add employee
                </button>
            </div>
            <div>
                {employeeList.data?.data.map((employee: Employee) => (
                    <section className={style.Tile} key={employee.id}>
                        <div className={style.EmployeeDetails}>
                            <p className={style.EmployeeDetailsName}>
                                {`${employee.firstName} ${employee.lastName}`}
                            </p>
                            <p>{`${employee.contractType} - ${yearsSinceStart(
                                employee.startDate
                            )}yrs`}</p>
                            <p>{employee.email}</p>
                        </div>
                        <div className={style.Options}>
                            <p
                                className={style.Option}
                                onClick={(event) => nav(employee.id)}
                            >
                                Edit
                            </p>
                            <p
                                onClick={() => console.log('remove')}
                                className={[style.Remove, style.Option].join(
                                    ' '
                                )}
                            >
                                Remove
                            </p>
                        </div>
                    </section>
                ))}
            </div>
        </div>
    );
};

export default EmployeeList;
