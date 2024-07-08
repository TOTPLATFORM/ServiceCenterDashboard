import { Button, Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import React, { ReactNode } from 'react';
import { headers } from '../../../../next.config';
import { header } from 'utils/header';

export interface IColumnsProps {
  headers: Array<{ title: string; field: string }>;
  data?: Array<any>;
  hideHeader?: boolean;
  onClick?: (data: any) => void;
  onDelete?: (id: any) => void;
  onUpdate?: (id: any,type?:any) => void;
}


const getNestedValue = (obj: any, path: string) => {
  return path.split('.').reduce((acc, part) => acc && acc[part], obj);
};


const CompactTable = ({
  headers,
  data,
  hideHeader,
  onClick,
  onUpdate,
  onDelete,
}: IColumnsProps) => {

  const filteredHeaders = headers.filter(header =>
    data?.some(item => getNestedValue(item, header.field) !== null)
  );
  return (
    <React.Fragment>
      {data ? (
        <div>
          <Table>
            {!hideHeader && (
              <Thead>
                <Tr>
                {filteredHeaders.map((header, index) => (
                    <Th key={index}>{header.title}</Th>
                  ))}
                </Tr>
              </Thead>
            )}
            <Tbody>
              {data.map((item, rowIndex) => (
                <Tr
                  key={rowIndex}

                  style={{ cursor: onClick ? 'pointer' : 'default' }}
                >
                  {headers.map((row, colIndex) => (
                    <Td onClick={() => {
                      onClick && onClick(item.id);
                    }} key={colIndex}>{getNestedValue(item,row.field) ?? 'N/A'}</Td>
                  ))}
                    {(onUpdate || onDelete) && (
                  <Td>
                    {onUpdate && (
                       <Button
                       style={{
                         backgroundColor: 'orange',
                         border: 'none',
                         color: 'white',
                         padding: '10px 20px',
                         textAlign: 'center',
                         textDecoration: 'none',
                         display: 'inline-block',
                         fontSize: '16px',
                         margin: '4px 2px',
                         cursor: 'pointer',
                         borderRadius: '5px',
                       }}
                       key={rowIndex}
                       onClick={() => onUpdate(item.id)}
                     >
                       Update
                     </Button>
                    )}
                     {onDelete && (
                    <Button
                      style={{
                        backgroundColor: 'red' ,
                        border: 'none',
                        color: 'white',
                        padding: '10px 20px' ,
                        textAlign: 'center',
                        textDecoration: 'none',
                        display: 'inline-block',
                        fontSize: '16px',
                        margin: '4px 2px',
                        cursor: 'pointer',
                        borderRadius: '5px' ,
                      }}
                      key={rowIndex}
                      onClick={() => onDelete(item.id)}
                    >
                      Delete
                    </Button>
                     )}
                  </Td>
                   )}
                </Tr>
              ))}
               
            </Tbody>
          </Table>
         
        </div>
      ) : (
        <col>
          <div>No Items</div>
        </col>
      )}
    </React.Fragment>
  );
};

export default CompactTable;
