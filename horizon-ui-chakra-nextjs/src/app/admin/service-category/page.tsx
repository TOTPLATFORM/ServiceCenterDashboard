'use client';
import { useEffect, useState, useCallback } from 'react';
import { Flex, Box, Text, useColorModeValue } from '@chakra-ui/react';
import Card from 'components/card/Card';
import Menu from 'components/menu/MainMenu';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import CompactTable from 'components/common/compact-table/CompactTable';
import { deleteServiceCategory, getByIdServiceCategory, getServiceCategory } from 'libs/endpoints/service-category';

const Page = () => {
  const [ServiceCategorys, setServiceCategorys] = useState<{
    headers: Array<{ title: string; field: string }>;
    data?: Array<any>;
  }>();
  const textColor = useColorModeValue('secondaryGray.900', 'white');
  const router = useRouter();

  const viewServiceCategoryDetails = async (id: number) => {
    router.push(`/admin/service-category/${id}`);
  };

  const handleOnEdit = async (id: number) => {
    await getByIdServiceCategory(id);
    router.push(`/admin/service-category/update/${id}`);
  };

  const handleDelete = async (id: number) => {
    await deleteServiceCategory(id);
    loadData();
    router.push(`/admin/service-category`);
  };

  const loadData = useCallback(() => {
    getServiceCategory().then((data: any) => {
      if (data) {
        setServiceCategorys((prev) => ({
          headers: [

            {title: "Name", field: "serviceCategoryName"},
            {title: "Description", field: "serviceCategoryDescription"},       
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
          ServiceCategorys
        </Text>
        <Menu />
      </Flex>
      <Box>
        <Link href="service-category/add">
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
              Add new ServiceCategory{' '}
              <span style={{ fontSize: '20px', fontWeight: 'bold' }}>+</span>
            </button>
          </div>
        </Link>

        {ServiceCategorys && (
          <CompactTable
            headers={ServiceCategorys.headers}
            data={ServiceCategorys.data}
            onDelete={handleDelete}
            onClick={viewServiceCategoryDetails}
            onUpdate={handleOnEdit}
          />
        )}
      </Box>
    </Card>
  );
};

export default Page;
