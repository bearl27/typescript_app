"use client";

import React, { useState } from 'react';
import { Memos } from '@/types';
import { editMemos } from '@/api';

interface MemoPageProps {
    memo: Memos;
    onClose: () => void;
}

const MemoPage: React.FC<MemoPageProps> = ({ memo, onClose }) => {
    const [editedTitle, setEditedTitle] = useState(memo.title);
    const [editedContent, setEditedContent] = useState(memo.content || '');

    const handleSave = async () => {
        await editMemos(memo.id, editedTitle, editedContent);
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex justify-center items-center">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl">
                <input
                    type="text"
                    value={editedTitle}
                    onChange={(e) => setEditedTitle(e.target.value)}
                    className="w-full text-2xl font-bold mb-4 p-2 border rounded"
                />
                <textarea
                    value={editedContent}
                    onChange={(e) => setEditedContent(e.target.value)}
                    className="w-full h-64 p-2 border rounded mb-4"
                />
                <div className="flex justify-end">
                    <button
                        onClick={handleSave}
                        className="bg-blue-500 text-white px-4 py-2 rounded mr-2 hover:bg-blue-600"
                    >
                        Save
                    </button>
                    <button
                        onClick={onClose}
                        className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MemoPage;