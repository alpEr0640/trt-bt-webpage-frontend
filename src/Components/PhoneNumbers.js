import React, { useEffect, useState } from 'react'
import '../CssPages/PhoneNumber.css'
import '../CssPages/NavBar.css'
import axios from 'axios';
function PhoneNumbers() {
    const [todos, setTodos] = useState([]);
    useEffect(() => {
        const fetchTodos = async () => {
            try {
                const response = await axios.get(
                    "http://192.168.137.1:8080/api/contacts"
                );
                setTodos(response.data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchTodos();
    }, []);

    return (
        <div  >
            <div className='PhoneTable shadow'>
                <div className='PhoneHeader'>
                    <h2>Telefon Numaraları</h2>
                </div>

                <div className='overflow'>

                    {todos.map((y) => {
                        return (
                            <div className='PhoneBody'>
                                <div className='PhoneBodyLeft'>
                                    <div className='PhoneBodyLeftTop'>{y.contactFirstName} {y.contactSurname}</div>
                                    <div className='PhoneBodyLeftBottom'>{y.title}</div>

                                </div>
                                <div className='PhoneBodyRight'>
                                    <div className='phoneNumber'>{y.contactPhoneNumber}</div>

                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

        </div>
    )
}

export default PhoneNumbers