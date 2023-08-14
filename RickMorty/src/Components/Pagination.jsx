import React from 'react';
import "./Pagination.css";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const renderPageNumbers = () => {
        const pageNumbers = [];

        for (let i = 1; i <= totalPages; i++) {
            pageNumbers.push(
                <li
                    key={i}
                    className={`page-item ${currentPage === i ? 'active' : ''}`}
                >
                    <a
                        className="page-link"
                        href="#"
                        onClick={() => onPageChange(i)}
                    >
                        {i}
                    </a>
                </li>
            );
        }

        return pageNumbers;
    };

    return (
        <nav aria-label="Page navigation example">
    <ul className="pagination">
        <li className={`pagination-item ${currentPage === 1 ? 'disabled' : ''}`}>
            <a className="pagination-button" href="#" aria-label="Previous" onClick={() => onPageChange(currentPage - 1)}>
                Previous
            </a>
        </li>
        {renderPageNumbers()}
        <li className={`pagination-item ${currentPage === totalPages ? 'disabled' : ''}`}>
            <a className="pagination-button" href="#" aria-label="Next" onClick={() => onPageChange(currentPage + 1)}>
                Next
            </a>
        </li>
    </ul>
</nav>
    );
};

export default Pagination;
