import { GridToolbarContainer,GridToolbarColumnsButton,GridToolbarFilterButton,GridToolbarExport } from "@mui/x-data-grid";
import React from "react"

const Index = () => {
  return (
    <GridToolbarContainer>
      <GridToolbarColumnsButton />
      <GridToolbarFilterButton />
      <GridToolbarExport />
    </GridToolbarContainer>
  );
}

export default Index;