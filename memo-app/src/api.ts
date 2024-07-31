
import { text } from 'stream/consumers';
import { Memos } from './types';

export const getAllMemos = async (): Promise<Memos[]> => {
    const res = await fetch('http://localhost:3001/memos',{
        cache: 'no-store', // SSR or CSR通信
    });
    const memos = await res.json();
    return memos;
};

export const addMemos = async (memo: Memos ): Promise<Memos> => {
    const res = await fetch('http://localhost:3001/memos',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(memo),
    });
    const newMemo = await res.json();
    return newMemo;
};

export const editMemos = async (id: string, newTitle: string, newContent: string): Promise<Memos> => {
    const res = await fetch(`http://localhost:3001/memos/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title: newTitle, content: newContent }),
    });
    const updatedMemo = await res.json();
    return updatedMemo;
};

export const deleteMemos = async (id: string): Promise<void> => {
    await fetch(`http://localhost:3001/memos/${id}`,{
        method: 'DELETE',
    });
};

