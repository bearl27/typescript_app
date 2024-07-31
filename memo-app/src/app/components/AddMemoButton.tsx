"use client";

import React, { useState } from 'react';
import { Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import AddMemo from './AddMemo';  // AddMemoコンポーネントをインポート

const AddMemoButton = () => {
    const [open, setIsOpenAddMemo] = useState(false);

    const handleOpen = () => setIsOpenAddMemo(true);
    const handleClose = () => setIsOpenAddMemo(false);

    return (
        <>
            <Fab
                color="primary"
                aria-label="add"
                onClick={handleOpen}
                sx={{
                    position: 'fixed',
                    bottom: 16,
                    right: 16,
                    width: 80,
                    height: 80,
                }}
            >
                <AddIcon sx={{ fontSize: 40 }} />
            </Fab>
            <AddMemo open={open} onClose={handleClose} />
        </>
    );
}

export default AddMemoButton;