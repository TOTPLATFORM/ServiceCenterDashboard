'use client';
import { useEffect, useState, useCallback } from 'react';
import { Flex, Box, Text, useColorModeValue } from '@chakra-ui/react';
import Card from 'components/card/Card';
import Menu from 'components/menu/MainMenu';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import CompactTable from 'components/common/compact-table/CompactTable';
import {  GetSubscription } from 'libs/endpoints/subscription';

const Page = () => {

   const[subscription, setSubscription] = useState<{
    headers: Array<{ title: string ; field: string }>;
    data?: Array<any>;
   }>();
  const textColor = useColorModeValue('secondaryGray.900', 'white');
  const router = useRouter();

  const viewSubscriptionDetails = async (id: number) => {
    router.push(`/admin/subscription/${id}`);
  };

  

  const loadData = useCallback(() => {
    GetSubscription().then((data: any) => {
      if (data) {
        setSubscription((prev) => ({
          headers: [

            {title: "Duration", field: "duration"},
            {title: "Package Name", field: "package.packageName"},    
            {title: "package Price", field: "package.packagePrice"},       
            {title: "Gender", field: "customer.gender"},       
   
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
          Subscription
        </Text>
        <Menu />
      </Flex>
      <Box>

        {subscription && (
          <CompactTable
            headers={subscription.headers}
            data={subscription.data}
            onClick={viewSubscriptionDetails}
          />
        )}
      </Box>
    </Card>
  );
};

export default Page;
