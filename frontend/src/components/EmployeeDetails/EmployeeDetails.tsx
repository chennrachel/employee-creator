import style from './EmployeeDetails.module.scss';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import axios from 'axios';

export interface Employee {
    id: string;
    firstName: string;
    middleName: string;
    lastName: string;
    email: string;
    mobile: number;
    address: string;
    contractType: string;
    startDate: Date;
    startDateDay: number;
    startDateMonth: string;
    startDateYear: number;
    finishDate: Date;
    finishDateDay: number;
    finishDateMonth: string;
    finishDateYear: number;
    isOngoing: boolean;
    workType: string;
    weeklyHours: number;
}

const EmployeeDetails = () => {
    const [data, setData] = useState<{ [key: string]: string }>({});
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Employee>();

    const onSubmit: SubmitHandler<Employee> = (data) => {
        console.log(data);
    };

    const nav = (destination: string) => {
        navigate(`/${destination}`);
    };

    const { id } = useParams();

    useEffect(() => {
        if (id) {
            axios.get(`http://localhost:8080/employees/${id}`).then((res) => {
                setData(res.data);
                console.log(res.data);
            });
        }
    }, []);

    return (
        <div>
            <p
                onClick={() => navigate('/')}
                className={style.Back}
            >{`< Back`}</p>
            <h2 className={style.Heading}>Employee details</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <section>
                    <>
                        <h3>Personal information</h3>
                        <label>First name</label>
                        <input
                            {...register('firstName', {
                                required: 'First name is required',
                            })}
                            value={data?.firstName}
                        />
                        {errors.firstName?.message}
                        <label>Middle name (if applicable)</label>
                        <input
                            {...register('middleName')}
                            value={data?.middleName}
                        />
                        <label>Last name</label>
                        <input
                            {...register('lastName', {
                                required: 'Last name is required',
                            })}
                            value={data?.lastName}
                        />
                        {errors.lastName?.message}
                    </>
                </section>
                <section>
                    <>
                        <h3>Contact details</h3>
                        <label>Email address</label>
                        <input
                            {...register('email', {
                                required: 'Email is required',
                            })}
                            value={data?.email}
                        />
                        <span className={style.Error}>
                            {errors.email?.message}
                        </span>
                        <label>Mobile number</label>
                        <input
                            {...register('mobile', {
                                required: 'Mobile is required',
                                pattern: {
                                    value: /^(?:\+?61|0) ?(?:4|[578]\d) ?(?:\d ?){8}\b|^(?:\+61|61|0)?(?:\((?:02)\)|02)[ ]?\d{4}[ ]?\d{4}$/i,
                                    message:
                                        'Valid Australian phone mobile required EG. 0400 123 456',
                                },
                            })}
                            value={data?.mobile}
                        />
                        {errors.mobile?.type === 'required' &&
                            errors.mobile.message}
                        {errors.mobile?.type === 'pattern' &&
                            errors.mobile.message}
                        <label>Residential address</label>
                        <input
                            {...register('address', {
                                required: 'Address is required',
                            })}
                            value={data?.address}
                        />
                        {errors.address?.message}
                    </>
                </section>
                <section>
                    <h3>Employee status</h3>
                    <div>
                        <label>What is contract type?</label>
                        <div className={style.RadioGroup}>
                            <div className={style.RadioOption}>
                                <input
                                    type='radio'
                                    value='permanent'
                                    id='contractType'
                                    {...register('contractType')}
                                    checked={
                                        data?.contractType === 'permanent'
                                            ? true
                                            : false
                                    }
                                />
                                <p className={style.RadioOptionText}>
                                    Permanent
                                </p>
                            </div>
                            <div className={style.RadioOption}>
                                <input
                                    className={style.RadioOptionRadio}
                                    type='radio'
                                    value='contract'
                                    id='contractType'
                                    {...register('contractType')}
                                    checked={
                                        data?.contractType === 'contract'
                                            ? true
                                            : false
                                    }
                                />
                                <p className={style.RadioOptionText}>
                                    Contract
                                </p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p className={style.DatesTitle}>Start date</p>
                        <div className={style.Dates}>
                            <div className={style.DMY}>
                                <label>Day</label>
                                <input
                                    className={[
                                        style.DMY__Input,
                                        style.DMY__Input__Number,
                                    ].join(' ')}
                                    type='number'
                                    {...register('startDateDay', {
                                        min: 1,
                                        max: 31,
                                    })}
                                />
                            </div>
                            <div className={style.DMY}>
                                <label>Month</label>
                                <select
                                    className={[
                                        style.DMY__Input,
                                        style.DMY__Input__DropDown,
                                    ].join(' ')}
                                    {...register('startDateMonth')}
                                >
                                    <option>January</option>
                                    <option>February</option>
                                    <option>March</option>
                                    <option>April</option>
                                    <option>May</option>
                                    <option>June</option>
                                    <option>July</option>
                                    <option>August</option>
                                    <option>September</option>
                                    <option>October</option>
                                    <option>November</option>
                                    <option>December</option>
                                </select>
                            </div>
                            <div className={style.DMY}>
                                <label>Year</label>
                                <input
                                    className={[
                                        style.DMY__Input,
                                        style.DMY__Input__Number,
                                    ].join(' ')}
                                    type='number'
                                    {...register('startDateYear', {
                                        min: 1900,
                                        maxLength: 4,
                                    })}
                                />
                            </div>
                        </div>
                        {(errors.startDateDay || errors.startDateYear) && (
                            <span>Start date invalid</span>
                        )}
                    </div>
                    <div>
                        <p className={style.DatesTitle}>Finish date</p>
                        <div className={style.Dates}>
                            <div className={style.DMY}>
                                <label>Day</label>
                                <input
                                    className={[
                                        style.DMY__Input,
                                        style.DMY__Input__Number,
                                    ].join(' ')}
                                    type='number'
                                    {...register('finishDateDay', {
                                        min: 1,
                                        max: 31,
                                    })}
                                />
                            </div>
                            <div className={style.DMY}>
                                <label>Month</label>
                                <select
                                    className={[
                                        style.DMY__Input,
                                        style.DMY__Input__DropDown,
                                    ].join(' ')}
                                    {...register('finishDateMonth')}
                                >
                                    <option>January</option>
                                    <option>February</option>
                                    <option>March</option>
                                    <option>April</option>
                                    <option>May</option>
                                    <option>June</option>
                                    <option>July</option>
                                    <option>August</option>
                                    <option>September</option>
                                    <option>October</option>
                                    <option>November</option>
                                    <option>December</option>
                                </select>
                            </div>
                            <div className={style.DMY}>
                                <label>Year</label>
                                <input
                                    className={[
                                        style.DMY__Input,
                                        style.DMY__Input__Number,
                                    ].join(' ')}
                                    type='number'
                                    {...register('finishDateYear', {
                                        min: 1900,
                                        maxLength: 4,
                                    })}
                                />
                            </div>
                            {(errors.finishDateDay ||
                                errors.finishDateYear) && (
                                <span>Finish date invalid</span>
                            )}
                        </div>
                    </div>
                    <div className={style.Checkbox}>
                        <input type='checkbox' /> On going
                    </div>
                    <div className={style.RadioGroup}>
                        <label>Is this a full-time or part-time basis?</label>
                        <div className={style.RadioOption}>
                            <input
                                type='radio'
                                value='Full-time'
                                id='workType'
                                {...register('workType')}
                                checked={
                                    data?.workType === 'full-time'
                                        ? true
                                        : false
                                }
                            />
                            <p className={style.RadioOptionText}>Full-time</p>
                        </div>
                        <div className={style.RadioOption}>
                            <input
                                type='radio'
                                value='Part-time'
                                id='workType'
                                {...register('workType')}
                                checked={
                                    data?.workType === 'part-time'
                                        ? true
                                        : false
                                }
                            />
                            <p className={style.RadioOptionText}>Part-time</p>
                        </div>
                    </div>
                    <label>Hours per week</label>
                    <input
                        {...register('weeklyHours')}
                        className={[
                            style.DMY__Input,
                            style.DMY__Input__Number,
                        ].join(' ')}
                    />
                </section>
                <button
                    type='submit'
                    className={[style.Button, style.Save].join(' ')}
                >
                    Save
                </button>
                <button
                    type='reset'
                    className={style.Button}
                    onClick={() => nav('')}
                >
                    Cancel
                </button>
            </form>
        </div>
    );
};

export default EmployeeDetails;
