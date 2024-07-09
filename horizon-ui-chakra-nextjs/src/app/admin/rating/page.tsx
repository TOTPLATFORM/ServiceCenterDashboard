'use client';

import { Flex, Box, Text, useColorModeValue } from '@chakra-ui/react';
import * as React from 'react';
import Card from 'components/card/Card';
import Menu from 'components/menu/MainMenu';
import { useEffect, useState, useCallback } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import CompactTable from 'components/common/compact-table/CompactTable';
import { DeleteRatingService, GetByIdRatingService, GetRatingService } from 'libs/endpoints/rating';



const page = () => {
  const [RatingServices, setRatingServices] = useState<{
    headers: Array<{ title: string; field: string }>;
    data?: Array<any>;
  }>();
  const textColor = useColorModeValue('secondaryGray.900', 'white');
  const router = useRouter();


  const loadData = useCallback(() => {
    GetRatingService().then((data: any) => {
      if (data) {
        setRatingServices((prev) => ({
          headers: [
            { title: 'Rating Value', field: 'ratingValue' },
            {title: "Customer Name", field: "customerName"},
            {title: "ProductName", field: "product.productName"},
            {title: "ServiceName", field: "service.serviceName"}                             

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

  const handleDelete = async (id: string) => {
    await DeleteRatingService(id);
    loadData();
    router.push("/admin/rating");
  };
  const viewRatingServiceDetails = async (id: string) => {
    router.push(`/admin/rating/${id}`);
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
          RatingServices
        </Text>
        <Menu />
      </Flex>
      <Box>
              {RatingServices && (
          <CompactTable
            headers={RatingServices.headers}
            data={RatingServices.data}
            onDelete={handleDelete}
            onClick={viewRatingServiceDetails}
          />
        )}
      </Box>
    </Card>
  );
}

export default page;
