import { ColumnTable, TypeDataColumn , ButtonVariantEnum, ColorEnum, ImageObjectFitEnum } from "@components/types";
import { CustomToolBarTable , Button, Typography, Box, Image } from "@components";
import { DataGrid, GridColDef,GridRenderCellParams } from "@mui/x-data-grid";
import React from "react";
import { imageStyle_TableCell,gridImageTableCellStyle } from "./styles";




interface IProps {
    onHandleButton: (data:any) => void;
    columns: ColumnTable[];
    rows:any;
    onChangePage: () => void;
    onChangeRowsPerPage: () => void;
    hasToolbar?: boolean;
    
}

const Index: React.FC<IProps> = ({ columns, rows,
     onChangePage,onChangeRowsPerPage,hasToolbar }) => {

    

const ConvertColumn = ( column:ColumnTable) => {

    const columnConverted: GridColDef = {
        field: column.id,
        headerName: column.label,
        renderCell: (params: GridRenderCellParams<any>) => {
            console.log("Params",params)

             switch(column.type){
                case TypeDataColumn.TEXT: 
                    return  <Typography> {params.row[column.id]} </Typography>
                   
                case TypeDataColumn.BUTTON:
                     return <Button label={params.row[column.id]}
                    color={ColorEnum.PRIMARY} />

                case TypeDataColumn.IMAGE:
                     return <Box sx={gridImageTableCellStyle} position={"relative"}>
                                <Image src={params.row[column.id]}
                                priority
                                style={imageStyle_TableCell}
                                alt="Image profile"                            
                                objectFit={ImageObjectFitEnum.COVER} />
                            </Box>

                default:
                    return <Button label={rows[0][column.id]}
                    color={ColorEnum.PRIMARY} />
                
            }

            
        },
       
     }

    return columnConverted;
}

const formatColumns =  columns.map((item:ColumnTable) => 
       { return ConvertColumn(item); });         
    


    return (
        <DataGrid 
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 2,
            },
          },
        }}
        pageSizeOptions={[2]}
        checkboxSelection={false}
        columns={formatColumns}
        rows={rows}
        rowHeight={120}
        slots={{
            toolbar: hasToolbar ? CustomToolBarTable: null,
         }}
        />
    )
}

export default Index;