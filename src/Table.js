import React, {memo} from 'react';
import ReactTable from "react-table";
import './Table.css'

export const Table = memo(({header, values, columns}) => (
    <div className="table__container">
        <div className="table__header">{header}</div>
        <ReactTable
            data={values}
            header="Users"
            columns={columns}
            defaultPageSize={32}
            showPageSizeOptions={false}
            showPagination={false}
            style={{
                height: "150px"
            }}
        />
    </div>
));