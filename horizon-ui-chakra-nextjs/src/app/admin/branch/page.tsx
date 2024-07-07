'use client';
import { useEffect, useState, useCallback } from 'react';
import { Flex, Box, Text, useColorModeValue } from '@chakra-ui/react';
import Card from 'components/card/Card';
import Menu from 'components/menu/MainMenu';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import CompactTable from 'components/common/compact-table/CompactTable';
import { deleteBranch, getByIdBranch, getBranch } from 'libs/endpoints/branch';

const Page = () => {
  const [Branchs, setBranchs] = useState<{
    headers: Array<{ title: string; field: string }>;
    data?: Array<any>;
  }>();
  const textColor = useColorModeValue('secondaryGray.900', 'white');
  const router = useRouter();

  const viewBranchDetails = async (id: string) => {
    router.push(`/admin/branch/${id}`);
  };

  const handleOnEdit = async (id: number) => {
    await getByIdBranch(id);
    router.push(`/admin/branch/update/${id}`);
  };

  const handleDelete = async (id: number) => {
    await deleteBranch(id);
    loadData();
    router.push(`/admin/branch`);
  };

  const loadData = useCallback(() => {
    getBranch().then((data: any) => {
      if (data) {
        setBranchs((prev) => ({
          headers: [
            {title: 'id', field: 'id' },
            {title: "Nama", field: "branchName"},
            {title: "City", field: "city"},
            {title: "Country", field: "country"},  
            {title: "Postal Code", field: "postalCode"},
            {title: "Phone Number", field: "branchPhoneNumber"},
            {title: "Email Address", field: "emailAddress"}
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
          Branchs
        </Text>
        <Menu />
      </Flex>
      <Box>
        <Link href="branch/add">
          <div style={{ textAlign: 'end', margin: '1px 20px' }}>
            <button
              type="button"
              style={{
                backgroundColor: 'blue' ,
                border: 'none',
                color: 'white',
                padding: '10px 20px' ,
                textAlign: 'center',
                textDecoration: 'none',
                display: 'inline-block',
                fontSize: '16px',
                margin: '4px 2px',
                cursor: 'pointer',
                borderRadius: '5px' /* Rounded corners */,
              }}
            >
              Add new Branch{' '}
              <span style={{ fontSize: '20px', fontWeight: 'bold' }}>+</span>
            </button>
          </div>
        </Link>

        {Branchs && (
          <CompactTable
            headers={Branchs.headers}
            data={Branchs.data}
            onDelete={handleDelete}
            onClick={viewBranchDetails}
            onUpdate={handleOnEdit}
          />
        )}
      </Box>
    </Card>
  );
};

export default Page;
