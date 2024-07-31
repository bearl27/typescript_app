
"use client";

import { addMemos } from '@/api';
import React, { ChangeEvent, FormEvent, useState} from 'react';

const AddMemo = () => {

    const [showAddMenu,setShowAddMenu] = useState(false);

    const hadleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        await addMemos({ id: uuidv4(), title: title, content: 'content'});

        setTitle('');
    }

    return (
        <form className='mb-4 space-y-3' onSubmit={hadleSubmit}>
            <input
            type="text"
            className='w-full border px-4 py-2 rounded-lg focus:outline-none focus:border-blue-400'
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setTitle(e.target.value)
            }
            value={title}
            />
            <button className='w-full px-4  py-2 text-white bg-blue-500 rounded transform hover:bg-blue-400 hover:scale-95 duration-200'>AddMemo</button>
        </form>
    );
}

export default AddMemo;

