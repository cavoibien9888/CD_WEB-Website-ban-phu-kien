import { Box } from  '@mui/material';
import { BASEURLHOST, THUMBNAIL_PLACEHOLDER } from "../../../../constants";
import PropTypes from 'prop-types';
import React from 'react';

ProductThumbnail.propTypes = {
  product: PropTypes.object,
};

function ProductThumbnail({ product }) {
  const thumbnailUrl = product.imageUrl
  ? `${BASEURLHOST}${product.imageUrl?.url}`
  : THUMBNAIL_PLACEHOLDER;
return (
    <Box>
      <img src={thumbnailUrl} alt={product.productName} width="100%" />
    </Box>
  );
}

export default ProductThumbnail;
