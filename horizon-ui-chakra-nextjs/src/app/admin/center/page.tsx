'use client';
import { useEffect, useState, useCallback } from 'react';
import { Flex, Box, Text, useColorModeValue } from '@chakra-ui/react';
import Card from 'components/card/Card';
import Menu from 'components/menu/MainMenu';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import CompactTable from 'components/common/compact-table/CompactTable';
import { getCenter } from 'libs/endpoints/center';

const Page = () => {

  const textColor = useColorModeValue('secondaryGray.900', 'white');
  const router = useRouter();
  const [Centers, setCenters] = useState<{
    headers: Array<{ title: string; field: string }>;
    data?: Array<any>;
  }>();
   const [isDisabled,setIsDisabled] = useState<boolean>(false)


  const handleOnEdit = async (id: number) => {
    await getCenter();
    router.push(`/admin/center/update/${id}`);
  };


  const loadData = useCallback(async() => {
    const data = await getCenter();
    const hasData = Array.isArray(data) && data.length > 0;

    setCenters({
      headers: [
        { title: 'Name', field: 'centerName' },
        { title: 'Opening Hours', field: 'openingHours' },
        { title: 'Specialty', field: 'specialty' },
      ],
      data: hasData ? data : [],
    });

    setIsDisabled(hasData);
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
          Centers
        </Text>
        <Menu />
      </Flex>
      <Box>
        <Link href="center/add">
          <div style={{ textAlign: 'end', margin: '1px 20px' }}>
            <button
              type="button"
              style={{
                backgroundColor: isDisabled ? 'dark blue' :  'blue' ,
                border: 'none',
                color: 'white',
                padding: '10px 20px' /* Some padding */,
                textAlign: 'center',
                textDecoration: 'none',
                display: 'inline-block',
                fontSize: '16px',
                margin: '4px 2px',
                cursor: isDisabled ? 'not-allowed' : 'pointer',
                borderRadius: '5px' /* Rounded corners */,
              }}
              disabled={isDisabled}
            >
              Add new Center{' '}
              <span style={{ fontSize: '20px', fontWeight: 'bold' }}>+</span>
            </button>
          </div>
        </Link>

        {Centers && Centers.data.length > 0 && (
          <CompactTable
            headers={Centers.headers}
            data={Centers.data}
            onUpdate={handleOnEdit}
          />
        )}
      </Box>
    </Card>
  );
};

export default Page;
