'use client';
import { useEffect, useState, useCallback } from 'react';
import { Flex, Box, Text, useColorModeValue } from '@chakra-ui/react';
import Card from 'components/card/Card';
import Menu from 'components/menu/MainMenu';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import CompactTable from 'components/common/compact-table/CompactTable';
import { deleteFeedback, getByIdFeedback, getFeedback } from 'libs/endpoints/feedback';

const Page = () => {
  const [Feedbacks, setFeedbacks] = useState<{
    headers: Array<{ title: string; field: string }>;
    data?: Array<any>;
  }>();
  const textColor = useColorModeValue('secondaryGray.900', 'white');
  const router = useRouter();

  const viewFeedbackDetails = async (id: string) => {
    router.push(`/admin/feedback/${id}`);
  };

  const handleDelete = async (id: string) => {
    await deleteFeedback(id);
    loadData();
    router.push(`/admin/feedback`);
  };

  const loadData = useCallback(() => {
    getFeedback().then((data: any) => {
      if (data) {
        setFeedbacks((prev) => ({
          headers: [
            {title: "Description", field: "feedbackDescription"},
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
  return (
    <Card
      flexDirection="column"
      w="100%"
      px="0px"
      overflowX={{ sm: 'scroll', lg: 'hidden' }}
    >
      <Flex px="25px" mb="8px" justifyContent="space-between" align="feedback">
        <Text
          color={textColor}
          fontSize="22px"
          mb="4px"
          fontWeight="700"
          lineHeight="100%"
        >
          Feedbacks
        </Text>
        <Menu />
      </Flex>
      <Box>
      

        {Feedbacks && (
          <CompactTable
            headers={Feedbacks.headers}
            data={Feedbacks.data}
            onDelete={handleDelete}
            onClick={viewFeedbackDetails}
          />
        )}
      </Box>
    </Card>
  );
};

export default Page;
