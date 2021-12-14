import React from 'react';
import PropTypes from 'prop-types';

Pagination.propTypes = {
    pagination: PropTypes.object.isRequired,
    onPageChange: PropTypes.func,
};

Pagination.defaultProps = {
    onPageChange: null,
};

function Pagination(props) {
    const { pagination, onPageChange } = props;
    const { currentPage, totalPage } = pagination;

    function handlePageChange(newPage) {
        if (onPageChange) {
            onPageChange(newPage);
        }
    }

    return (
        <div className='pagination'>
            <button
                disabled={currentPage <= 1}
                onClick={() => handlePageChange(currentPage - 1)}
            >
                <i className="fas fa-chevron-left"></i>

            </button>

            <button
                disabled={currentPage >= totalPage}
                onClick={() => handlePageChange(currentPage + 1)}
            >
                <i className="fas fa-chevron-right"></i>
            </button>


        </div>
    );
}

export default Pagination;