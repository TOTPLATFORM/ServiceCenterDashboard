'use client';
import { useEffect, useState, useCallback } from 'react';
import { Flex, Box, Text, useColorModeValue } from '@chakra-ui/react';
import Card from 'components/card/Card';
import Menu from 'components/menu/MainMenu';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import CompactTable from 'components/common/compact-table/CompactTable';
import { deleteCampagin, getByIdCampagin, getCampagin } from 'libs/endpoints/campagin';

const Page = () => {
  const [Campagins, setCampagins] = useState<{
    headers: Array<{ title: string; field: string }>;
    data?: Array<any>;
  }>();
  const textColor = useColorModeValue('secondaryGray.900', 'white');
  const router = useRouter();

  const viewCampaginDetails = async (id: number) => {
    router.push(`/admin/campagin/${id}`);
  };

  const handleOnEdit = async (id: number) => {
    await getByIdCampagin(id);
    router.push(`/admin/campagin/update/${id}`);
  };

  const handleDelete = async (id: number) => {
    await deleteCampagin(id);
    loadData();
    router.push(`/admin/campagin`);
  };

  const loadData = useCallback(() => {
    getCampagin().then((data: any) => {
      if (data) {
        setCampagins((prev) => ({
          headers: [
            {title: "Campagin Name", field: "campaginName"},
            {title: "Description", field: "campaginDescription"},
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
          Campagins
        </Text>
        <Menu />
      </Flex>
      <Box>
        <Link href="campagin/add">
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
              Add new Campagin{' '}
              <span style={{ fontSize: '20px', fontWeight: 'bold' }}>+</span>
            </button>
          </div>
        </Link>

        {Campagins && (
          <CompactTable
            headers={Campagins.headers}
            data={Campagins.data}
            onDelete={handleDelete}
            onClick={viewCampaginDetails}
            onUpdate={handleOnEdit}
          />
        )}
      </Box>
    </Card>
  );
};

export default Page;
