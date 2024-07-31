"use client";

import React, { useEffect, useRef, useState } from 'react';
import { Memos } from '@/types';
import { editMemos,deleteMemos } from '@/api';

interface MemoProps {
    memo: Memos;
}

const Memo = ({ memo } : MemoProps) => {
    const ref = useRef<HTMLInputElement>(null);

    const [isEditing, setIsEditing] = useState(false);
    const [editedTitle, setEditedTitle] = useState(memo.title);

    useEffect(() => {
        if (isEditing) {
            ref.current?.focus();
        }
    }
    , [isEditing]);

    const handleEdit = async () => {
        setIsEditing(true);
    };

    const handleSave = async () => {
        await editMemos(memo.id, editedTitle);
        setIsEditing(false);
    };

    const handleDelete = async () => {
        await deleteMemos(memo.id);
    };

    return (
        <li
        key={memo.id}
        className='flex justify-between p-4 bg-white border-l-4 border-blue-500 rounded shadow'
        >

        {isEditing ?(
        <input
        ref={ref}
        type="text"
        className='border px-4 py-2 rounded-lg focus:outline-none focus:border-blue-400'
        value  = {editedTitle}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEditedTitle(e.target.value)}
        />
        )
        :(
        <span className=''>
            {memo.title}
        </span>
        )}
        <div>
            {isEditing ? (
                <button
                className='text-green-500 mr-3'
                onClick={handleSave}
                >
                    save
                </button>) : (
                    <button
                    className='text-blue-500 mr-3'
                    onClick={handleEdit}
                    >
                        edit
                    </button>
                )}
            <button
            className='text-red-600'
            onClick={handleDelete}
            >
                delete
            </button>
        </div>
    </li>
    );
}

export default Memo;