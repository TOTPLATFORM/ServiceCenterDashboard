'use client';

import { Flex, Box, Text, useColorModeValue } from '@chakra-ui/react';
import * as React from 'react';
import Card from 'components/card/Card';
import Menu from 'components/menu/MainMenu';
import { useEffect, useState, useCallback } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import CompactTable from 'components/common/compact-table/CompactTable';
import { DeleteService, GetByIdService, GetService } from 'libs/endpoints/service';



const page = () => {
  const [Services, setServices] = useState<{
    headers: Array<{ title: string; field: string }>;
    data?: Array<any>;
  }>();
  const textColor = useColorModeValue('secondaryGray.900', 'white');
  const router = useRouter();


  const loadData = useCallback(() => {
    GetService().then((data: any) => {
      if (data) {
        setServices((prev) => ({
          headers: [
            { title: 'Service Name', field: 'serviceName' },
            { title: 'Description', field: 'serviceDescription' },
            { title: 'Price', field: 'servicePrice' },
            { title: 'Avaliable', field: 'avaliable' },
            { title: 'Category Name', field: 'serviceCategoryName' },
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
    await DeleteService(id);
    loadData();
    router.push("/admin/service");
  };
  const viewServiceDetails = async (id: number) => {
    router.push(`/admin/service/${id}`);
  };

  const handleOnEdit = async (id: number) => {
    await GetByIdService(id)
    router.push(`/admin/service/update/${id}`);
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
          Services
        </Text>
        <Menu />
      </Flex>
      <Box>
        <Link href="service/add">
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
              Add new Service{' '}
              <span style={{ fontSize: '20px', fontWeight: 'bold' }}>+</span>
            </button>
          </div>
        </Link>

        {Services && (
          <CompactTable
            headers={Services.headers}
            data={Services.data}
            onDelete={handleDelete}
            onClick={viewServiceDetails}
            onUpdate={handleOnEdit}
          />
        )}
      </Box>
    </Card>
  );
}

export default page;
