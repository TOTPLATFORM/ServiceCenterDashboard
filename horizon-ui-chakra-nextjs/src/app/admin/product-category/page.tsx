'use client';
import { useEffect, useState, useCallback } from 'react';
import { Flex, Box, Text, useColorModeValue } from '@chakra-ui/react';
import Card from 'components/card/Card';
import Menu from 'components/menu/MainMenu';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import CompactTable from 'components/common/compact-table/CompactTable';
import { deleteProductCategory, getByIdProductCategory, getProductCategory } from 'libs/endpoints/product-category';

const Page = () => {
  const [ProductCategorys, setProductCategorys] = useState<{
    headers: Array<{ title: string; field: string }>;
    data?: Array<any>;
  }>();
  const textColor = useColorModeValue('secondaryGray.900', 'white');
  const router = useRouter();

  const viewProductCategoryDetails = async (id: string) => {
    router.push(`/admin/product-category/${id}`);
  };

  const handleOnEdit = async (id: string) => {
    await getByIdProductCategory(id);
    router.push(`/admin/product-category/update/${id}`);
  };

  const handleDelete = async (id: string) => {
    await deleteProductCategory(id);
    loadData();
    router.push(`/admin/product-category`);
  };

  const loadData = useCallback(() => {
    getProductCategory().then((data: any) => {
      if (data) {
        setProductCategorys((prev) => ({
          headers: [
            {title: "Name", field: "categoryName"},
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
          ProductCategorys
        </Text>
        <Menu />
      </Flex>
      <Box>
        <Link href="product-category/add">
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
              Add new ProductCategory{' '}
              <span style={{ fontSize: '20px', fontWeight: 'bold' }}>+</span>
            </button>
          </div>
        </Link>

        {ProductCategorys && (
          <CompactTable
            headers={ProductCategorys.headers}
            data={ProductCategorys.data}
            onDelete={handleDelete}
            onClick={viewProductCategoryDetails}
            onUpdate={handleOnEdit}
          />
        )}
      </Box>
    </Card>
  );
};

export default Page;
