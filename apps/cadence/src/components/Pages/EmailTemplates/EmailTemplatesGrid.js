/**
 * @author @Sk_khaja_moulali-gembrill
 * @version V11.0
 */
import React, { useEffect, useState } from "react";
import { usePagination, useRowSelect, useTable } from "react-table";
import ScrollArea from "react-scrollbar"; 

import { Alert, Button, Card, CardFooter, CardHeader, CardTitle, Collapse, Table } from "reactstrap";

import { default as TablePagination } from "../../Common/Pagination";

const IndeterminateCheckbox = React.forwardRef(
  ({ indeterminate, ...rest }, ref) => {
    const defaultRef = React.useRef();
    const resolvedRef = ref || defaultRef;

    React.useEffect(() => {
      resolvedRef.current.indeterminate = indeterminate;
    }, [resolvedRef, indeterminate]);

    return (
      <>
        <input type="checkbox" ref={resolvedRef} {...rest} />
      </>
    );
  }
);

//ths function is used to display the icons as a group
const HandOverButton = (props) => {
  return (
    <Button {...props} outline color="link">
      <i className={`fas fa-${props.title} fa-lg text-primary`}></i>
    </Button>
  );
};

function EmailTemplatesRow({ row, rowKey }) {
  const [showCell, setShowCell] = useState(true);

  return (
    <tr
      {...row.getRowProps()}
      onMouseOver={() => setShowCell(!showCell)}
      onMouseOut={() => setShowCell(!showCell)}
      key={rowKey}
    >
      {row.cells.map((cell, i) => {
        return (
          <td key={i} style={{ width: cell.column.width, display: ['Last Activity'].indexOf(cell.column.Header) !== -1 ? (showCell ? "" : "none") : "" }}>{cell.render("Cell")}</td>
        );
      })}
      <td
        {...row.getRowProps()}
        className="text-center pb-0 pt-0"
        style={{ display: showCell ? "none" : "", verticalAlign: "middle", paddingRight: "110px" }}
        colSpan="1"
      >
        <HandOverButton title="edit" />
        <HandOverButton title="clone" />
        <HandOverButton title="trash" />
      </td>
    </tr>
  );
}

function EmailTemplatesGrid({
  columns,
  data,
  templatesData,
  fetchData,
  loading,
  error,
  pageCount: controlledPageCount,
  pageSize: controlledPageSize,
  currentPageIndex,
  handleRefresh
}) {
  // Use the state and functions returned from useTable to build your UI
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    showPagination,
    // Get the state from the instance
    state: { selectedRowIds, pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      templatesData,
      initialState: {
        pageIndex: currentPageIndex,
        pageSize: controlledPageSize,
      }, // Pass our hoisted table state
      manualPagination: true, // Tell the usePagination
      // hook that we'll handle our own data fetching
      // This means we'll also have to provide our own
      // pageCount.
      pageCount: controlledPageCount,
    },
    usePagination,
    useRowSelect,
    (hooks) => {
      hooks.visibleColumns.push((columns) => [
        // Let's make a column for selection
        {
          id: "selection",
          // The header can use the table's getToggleAllRowsSelectedProps method
          // to render a checkbox
          Header: ({ getToggleAllRowsSelectedProps }) => (
            <div>
              <IndeterminateCheckbox {...getToggleAllRowsSelectedProps()} />
            </div>
          ),
          // The cell can use the individual row's getToggleRowSelectedProps method
          // to the render a checkbox
          Cell: ({ row }) => (
            <div>
              <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />
            </div>
          ),
        },
        ...columns,
      ]);
    }
  );

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  // Listen for changes in pagination and use the state to fetch our new data
  useEffect(() => fetchData({ pageIndex, pageSize }), [pageIndex, pageSize]);

  let tableId = "templates_table";
  // Render the UI for your table
  return (
    <>
      <Card className="b0 mb-2 primary">
        <CardHeader onClick={toggle}>
          <CardTitle tag="h4">
            <a className="text-inherit">
              <small>
                <i className="fa fa-angle-down fa-lg mr-2"></i>
              </small>
              <span>Introduction Templates</span>
            </a>
          </CardTitle>
        </CardHeader>
        <Collapse isOpen={isOpen}>
          <div {...getTableProps()} id={`${tableId}_wrapper`} className="table-responsive">
            <Table {...getTableProps()} id={`${tableId}`} hover style={{ minWidth: "800px" }} >
              <thead>
                {headerGroups.map((headerGroup) => (
                  <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map((column) => (
                      <th
                        {...column.getHeaderProps()}
                        style={{ width: column.width, whiteSpace: "nowrap" }}
                      >
                        {column.render("Header")}
                      </th>
                    ))}
                  </tr>
                ))}
              </thead>
            </Table>
            <ScrollArea
              speed={0.8}
              className="area"
              contentClassName="content"
              horizontal={true}
              style={{ minHeight: "335px", maxHeight: "603px", minWidth: "800px" }}
            >
              <Table>
                <tbody {...getTableBodyProps()}>
                  {!loading &&
                    !error &&
                    rows.slice(0, pageSize).map((row, i) => {
                      prepareRow(row);

                      return <EmailTemplatesRow row={row} key={i} />;
                    })}
                  {error && (
                    <tr>
                      <td colSpan="7">
                        <Alert color="danger" className="text-center" role="alert">
                          <h4>
                            <i className="fas fa-exclamation-circle fa-lg mr-2"></i>Failed to fetch data
                          </h4>
                        </Alert>
                      </td>
                    </tr>
                  )}
                </tbody>
              </Table>
            </ScrollArea>
          </div>
        </Collapse>
      </Card>
      <CardFooter>
        <TablePagination
          loading={loading}
          handleFirstPage={() => gotoPage(0)}
          handleLastPage={() => gotoPage(pageCount - 1)}
          totalPages={(pageOptions.length)}
          pageIndex={pageIndex + 1}
          handleGoToPage={(pageNumber) => gotoPage(pageNumber)}
          pageSize={pageSize}
          handleSetPageSize={(pageSize) => setPageSize(pageSize)}
          canPreviousPage={!canPreviousPage}
          canNextPage={!canNextPage}
          previousPage={() => previousPage()}
          nextPage={() => nextPage()}
          handleRefresh={handleRefresh}
        >
        </TablePagination>
      </CardFooter>
    </>
  );
}

export default EmailTemplatesGrid;
