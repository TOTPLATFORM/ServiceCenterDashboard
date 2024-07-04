'use client';

import { Flex, Box, Text, useColorModeValue } from '@chakra-ui/react';
import * as React from 'react';
import Card from 'components/card/Card';
import Menu from 'components/menu/MainMenu';
import { useEffect, useState, useCallback } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import CompactTable from 'components/common/compact-table/CompactTable';
import { DeleteServicePackage, GetByIdServicePackage, GetServicePackage } from 'libs/endpoints/servicePackage';



const page = () => {
  const [ServicePackages, setServicePackages] = useState<{
    headers: Array<{ title: string; field: string }>;
    data?: Array<any>;
  }>();
  const textColor = useColorModeValue('secondaryGray.900', 'white');
  const router = useRouter();


  const loadData = useCallback(() => {
    GetServicePackage().then((data: any) => {
      if (data) {
        setServicePackages((prev) => ({
          headers: [
            { title: 'Package Name', field: 'packageName' },
            { title: 'Price', field: 'packagePrice' },
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
    await DeleteServicePackage(id);
    loadData();
    router.push("/admin/servicePackage");
  };
  const viewServicePackageDetails = async (id: number) => {
    router.push(`/admin/servicePackage/${id}`);
  };

  const handleOnEdit = async (id: number) => {
    await GetByIdServicePackage(id)
    router.push(`/admin/servicePackage/update/${id}`);
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
          Service Packages
        </Text>
        <Menu />
      </Flex>
      <Box>
        <Link href="servicePackage/add">
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
              Add new Service Package{' '}
              <span style={{ fontSize: '20px', fontWeight: 'bold' }}>+</span>
            </button>
          </div>
        </Link>

        {ServicePackages && (
          <CompactTable
            headers={ServicePackages.headers}
            data={ServicePackages.data}
            onDelete={handleDelete}
            onClick={viewServicePackageDetails}
            onUpdate={handleOnEdit}
          />
        )}
      </Box>
    </Card>
  );
}

export default page;
