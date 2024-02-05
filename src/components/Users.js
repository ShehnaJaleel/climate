import React from "react";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Users = ()=>{
    const [startDate, setStartDate] = useState(new Date());

    return(
        <div>
            <h2>Active Users</h2>
            <div>
                <label>DatePicker:</label>
                <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
            </div>

        </div>
    );
};

export default Users;