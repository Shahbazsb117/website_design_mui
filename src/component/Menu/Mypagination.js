import React from 'react';
import Pagination from '@material-ui/lab/Pagination';



export default function Mypagination() {

  return (
    <div  >
      <Pagination count={10} color="secondary" style={{marginLeft:420}} />
    </div>
  );
}