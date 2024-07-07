'use client';

import { Flex, Box, Text, useColorModeValue } from '@chakra-ui/react';
import * as React from 'react';
import Card from 'components/card/Card';
import Menu from 'components/menu/MainMenu';
import { useEffect, useState, useCallback } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import CompactTable from 'components/common/compact-table/CompactTable';
import { DeleteDepartment, GetByIdDepartment, GetDepartment } from 'libs/endpoints/department';



const page = () => {
  const [Departments, setDepartments] = useState<{
    headers: Array<{ title: string; field: string }>;
    data?: Array<any>;
  }>();
  const textColor = useColorModeValue('secondaryGray.900', 'white');
  const router = useRouter();


  const loadData = useCallback(() => {
    GetDepartment().then((data: any) => {
      if (data) {
        setDepartments((prev) => ({
          headers: [
            { title: 'Department Name', field: 'departmentName' }
          ],
          data: data,
        }));
      } else {
        console.log('data not found');
      }
    });
  }, []);

  useEffect(() => {
    loadData();
  }, [loadData]);

  const handleDelete = async (id: number) => {
    await DeleteDepartment(id);
    loadData();
    router.push("/admin/department");
  };
  const viewDepartmentDetails = async (id: number) => {
    router.push(`/admin/department/${id}`);
  };

  const handleOnEdit = async (id: number) => {
    await GetByIdDepartment(id)
    router.push(`/admin/department/update/${id}`);
  };
  return (
    <Card
      flexDirection="column"
      w="100%"
      px="0px"
      overflowX={{ sm: 'scroll', lg: 'hidden' }}
    >
      <Flex px="25px" mb="8px" justifyContent="space-between" align="center">
        <Text
          color={textColor}
          fontSize="22px"
          mb="4px"
          fontWeight="700"
          lineHeight="100%"
        >
          Departments
        </Text>
        <Menu />
      </Flex>
      <Box>
        <Link href="department/add">
          <div style={{ textAlign: 'end', margin: '1px 20px' }}>
            <button
              type="button"
              style={{
                backgroundColor: 'blue' /* Green background */,
                border: 'none',
                color: 'white',
                padding: '10px 20px' /* Some padding */,
                textAlign: 'center',
                textDecoration: 'none',
                display: 'inline-block',
                fontSize: '16px',
                margin: '4px 2px',
                cursor: 'pointer',
                borderRadius: '5px' /* Rounded corners */,
              }}
            >
              Add new Department{' '}
              <span style={{ fontSize: '20px', fontWeight: 'bold' }}>+</span>
            </button>
          </div>
        </Link>

        {Departments && (
          <CompactTable
            headers={Departments.headers}
            data={Departments.data}
            onDelete={handleDelete}
            onClick={viewDepartmentDetails}
            onUpdate={handleOnEdit}
          />
        )}
      </Box>
    </Card>
  );
}

export default page;
