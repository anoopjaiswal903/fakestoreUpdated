import {
  DataTable,
  TableContainer,
  TableToolbar,
  TableBatchAction,
} from "@carbon/react";
import React from "react";
import "./testpage.scss";

import { TrashCan, Save, Download } from "@carbon/icons-react";

function Testpage() {
  const batchActionClick = () => {
    console.log("click batch is working ");
  };

  return(
    <div>
      
    </div>
  )
  <DataTable>
    {({
      rows,
      headers,
      getHeaderProps,
      getRowProps,
      getSelectionProps,
      getToolbarProps,
      getBatchActionProps,
      onInputChange,
      selectedRows,
      getTableProps,
      getTableContainerProps,
    }) => {
      const batchActionProps = getBatchActionProps();

      return (
        <div>
          <TableContainer>
            <TableToolbar {...getToolbarProps()}>
              <TableBatchAction
                tabIndex={batchActionProps.shouldShowBatchActions ? 0 : -1}
                renderIcon={TrashCan}
                onClick={batchActionClick(selectedRows)}
              >
                Delete
              </TableBatchAction>
              <TableBatchAction
                tabIndex={batchActionProps.shouldShowBatchActions ? 0 : -1}
                renderIcon={Save}
                onClick={batchActionClick(selectedRows)}
              >
                Save
              </TableBatchAction>
              <TableBatchAction
                tabIndex={batchActionProps.shouldShowBatchActions ? 0 : -1}
                renderIcon={Download}
                onClick={batchActionClick(selectedRows)}
              >
                Download
              </TableBatchAction>
            </TableToolbar>
          </TableContainer>
        </div>
      );
    }}
  </DataTable>;
}

export default Testpage;

//checking git command push and pull

//new git push command checking

//third time checking

//fourt
