'use client';

import { Flex, Box, Text, useColorModeValue } from '@chakra-ui/react';
import * as React from 'react';
import Card from 'components/card/Card';
import Menu from 'components/menu/MainMenu';
import { useEffect, useState, useCallback } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import CompactTable from 'components/common/compact-table/CompactTable';
import { DeleteComplaint, GetByIdComplaint, GetComplaint } from 'libs/endpoints/complaint';
import { complaintStatus } from 'types/Complaint';



const page = () => {
  const [Complaints, setComplaints] = useState<{
    headers: Array<{ title: string; field: string }>;
    data?: Array<any>;
  }>();
  const textColor = useColorModeValue('secondaryGray.900', 'white');
  const router = useRouter();


  const loadData = useCallback(() => {
    GetComplaint().then((data: any) => {
      if (data) {
        setComplaints((prev) => ({
          headers: [
            { title: 'Complaint Description', field: 'complaintDescription' },
            { title: 'serviceProvider Name', field: 'serviceProvider.firstName' },
            { title: 'Branch Name', field: 'branch.branchName' },
            { title: 'Status', field: 'complaintStatus' },
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
    await DeleteComplaint(id);
    loadData();
    router.push("/admin/complaint");
  };
  const viewComplaintDetails = async (id: string) => {
    router.push(`/admin/complaint/${id}`);
  };

  const handleOnEdit = async (id: string) => {
    await GetByIdComplaint(id)
    router.push(`/admin/complaint/${id}/status/${complaintStatus}`);
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
          Complaints
        </Text>
        <Menu />
      </Flex>
      <Box>
   

        {Complaints && (
          <CompactTable
            headers={Complaints.headers}
            data={Complaints.data}
            onDelete={handleDelete}
            onClick={viewComplaintDetails}
            onUpdate={handleOnEdit}
          />
        )}
      </Box>
    </Card>
  );
}

export default page;
