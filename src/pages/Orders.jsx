import React from "react";
import {
  GridComponent,
  ColumnDirective,
  ColumnsDirective,
  Resize,
  Sort,
  ContextMenu,
  Filter,
  Page,
  ExcelExport,
  PdfExport,
  Edit,
  Inject,
} from "@syncfusion/ej2-react-grids";

import { ordersData, ContextMenuItems, ordersGrid } from "../data/dummy";
import { Header } from "../components";

const Orders = () => {
  return (
    <div className="m-20 md:m-10 p-2 md:p-10 bg-white rounded-2xl">
      <Header category="Page" title="Orders" />
      <GridComponent id="gridcomp" dataSource={ordersData} allowPaging allowSorting>
        <ColumnsDirective>
          {ordersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject
          services={[
            ContextMenu,
            Filter,
            Edit,
            PdfExport,
            Resize,
            Sort,
            Page,
            ExcelExport,
          ]}
        />
      </GridComponent>
    </div>
  );
};

export default Orders;
