'use client';
import { useEffect, useState, useCallback } from 'react';
import { Flex, Box, Text, useColorModeValue } from '@chakra-ui/react';
import Card from 'components/card/Card';
import Menu from 'components/menu/MainMenu';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import CompactTable from 'components/common/compact-table/CompactTable';
import { deleteProductBrand, getByIdProductBrand, getProductBrand } from 'libs/endpoints/product-brand';

const Page = () => {
  const [ProductBrands, setProductBrands] = useState<{
    headers: Array<{ title: string; field: string }>;
    data?: Array<any>;
  }>();
  const textColor = useColorModeValue('secondaryGray.900', 'white');
  const router = useRouter();

  const viewProductBrandDetails = async (id: number) => {
    router.push(`/admin/product-brand/${id}`);
  };

  const handleOnEdit = async (id: number) => {
    await getByIdProductBrand(id);
    router.push(`/admin/product-brand/update/${id}`);
  };

  const handleDelete = async (id: number) => {
    await deleteProductBrand(id);
    loadData();
    router.push(`/admin/product-brand`);
  };

  const loadData = useCallback(() => {
    getProductBrand().then((data: any) => {
      if (data) {
        setProductBrands((prev) => ({
          headers: [
            {title: "Nama", field: "brandName"},
            {title: "Description", field: "brandDescription"},
            {title: "Country of Origin", field: "countryOfOrigin"},
            {title: "Founded Year", field: "foundedYear"}            
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
          ProductBrands
        </Text>
        <Menu />
      </Flex>
      <Box>
        <Link href="product-brand/add">
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
              Add new ProductBrand{' '}
              <span style={{ fontSize: '20px', fontWeight: 'bold' }}>+</span>
            </button>
          </div>
        </Link>

        {ProductBrands && (
          <CompactTable
            headers={ProductBrands.headers}
            data={ProductBrands.data}
            onDelete={handleDelete}
            onClick={viewProductBrandDetails}
            onUpdate={handleOnEdit}
          />
        )}
      </Box>
    </Card>
  );
};

export default Page;
