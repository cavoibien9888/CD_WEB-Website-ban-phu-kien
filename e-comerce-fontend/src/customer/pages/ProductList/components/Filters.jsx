import React from 'react';
import PropTypes from 'prop-types';
import FiltersByCategory from './FilterByCategory';
import { Box } from '@mui/material';
import FiltersByPrice from './FiltersByPrice';

Filters.propTypes = {
    filters: PropTypes.object.isRequired,
    onChange: PropTypes.func
};

function Filters({filters, onChange}) {

    const handleFilterByCategory = (newCategoryId) => {
        if(!onChange) return;

        const newFilters = {
            'category.id': newCategoryId,
        }
        onChange(newFilters);
    }
    return (
        <Box>
            <FiltersByCategory onChange={handleFilterByCategory}/>
            {/* <FiltersByPrice/> */}
        </Box>
    );
}

export default Filters;