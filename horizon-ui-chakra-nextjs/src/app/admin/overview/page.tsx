'use client';
import { useEffect, useState, useCallback } from 'react';
import { Flex, Box, Text, useColorModeValue } from '@chakra-ui/react';
import Card from 'components/card/Card';
import Menu from 'components/menu/MainMenu';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import CompactTable from 'components/common/compact-table/CompactTable';
import { deleteOverview, getByIdOverview, getOverview } from 'libs/endpoints/overview';

const Page = () => {
  const [Overviews, setOverviews] = useState<{
    headers: Array<{ title: string; field: string }>;
    data?: Array<any>;
  }>();
  const textColor = useColorModeValue('secondaryGray.900', 'white');
  const router = useRouter();

  const viewOverviewDetails = async (id: string) => {
    router.push(`/admin/overview/${id}`);
  };

  const handleOnEdit = async (id: string) => {
    await getByIdOverview(id);
    router.push(`/admin/overview/update/${id}`);
  };

  const handleDelete = async (id: string) => {
    await deleteOverview(id);
    loadData();
    router.push(`/admin/overview`);
  };

  const loadData = useCallback(() => {
    getOverview().then((data: any) => {
      if (data) {
        setOverviews((prev) => ({
          headers: [
            {title: 'Id', field: 'id' },
            {title: "Task", field: "task"},
            {title: "Priority", field: "priority"},
            {title: "Status", field: "status"},
            {title: "Due Date", field: "dueDate"}           
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
          Overviews
        </Text>
        <Menu />
      </Flex>
      <Box>
        <Link href="overview/add">
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
              Add new Overview{' '}
              <span style={{ fontSize: '20px', fontWeight: 'bold' }}>+</span>
            </button>
          </div>
        </Link>

        {Overviews && (
          <CompactTable
            headers={Overviews.headers}
            data={Overviews.data}
            onDelete={handleDelete}
            onClick={viewOverviewDetails}
            onUpdate={handleOnEdit}
          />
        )}
      </Box>
    </Card>
  );
};

export default Page;
