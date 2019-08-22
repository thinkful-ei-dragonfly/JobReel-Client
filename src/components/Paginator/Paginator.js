import React from 'react';

const Paginator = ({jobsPerPage, totalJobs}) => {
    const pageNumbers = [];

    for (let i = 0; i<=Math.ceil(totalJobs / jobsPerPage); i++) {

    }
    return (
        <div className='pagination'>
           {pageNumbers.map(number => (
               <li key={number} className='page-item'>
                   <link to='!#' className='page-link'>
                        {number}
                    </link>
               </li>
           ))} 
           Some Values
        </div>
    );
}

export default Paginator;
