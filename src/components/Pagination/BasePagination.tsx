import React from "react";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import "./BasePagination.css";
import { iBasePagination } from "../../interfaces/picturesTypes";


export const BasePagination = ({handleChangePage, count}:iBasePagination) => {
    return (
        <div className="paginationConatiner">
            <Stack spacing={2}>
                <Pagination 
                    count={count} 
                    size="large" 
                    variant="outlined" 
                    color="primary" 
                    onChange={handleChangePage}
                />
            </Stack>
        </div>
    )
}