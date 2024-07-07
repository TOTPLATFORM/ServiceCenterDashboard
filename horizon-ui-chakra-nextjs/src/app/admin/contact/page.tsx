'use client';
import { useEffect, useState, useCallback } from 'react';
import { Flex, Box, Text, useColorModeValue, Button, background } from '@chakra-ui/react';
import Card from 'components/card/Card';
import Menu from 'components/menu/MainMenu';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import CompactTable from 'components/common/compact-table/CompactTable';
import {  getByIdContact, getContact, updateContact } from 'libs/endpoints/contact';
import { Status } from 'types/Contact';

const Page = () => {
  const [Contacts, setContacts] = useState<{
    headers: Array<{ title: string; field: string }>;
    data?: Array<any>;
  }>();
  const textColor = useColorModeValue('secondaryGray.900', 'white');
  const router = useRouter();

  const handleOnEdit = async (id: string) => {
    await getByIdContact(id);
    router.push(`/admin/contact/update/${id}`);
  };

  

  const loadData = useCallback(() => {
    getContact().then((data: any) => {
      if (data) {
        setContacts((prev) => ({
          headers: [
            {title: "First Name", field: "contactFirstName"},
            {title: "Last Name", field: "contactLastName"},
            {title: "Email Address", field: "contactEmail"},  
            {title: "Status", field: "status"},
            {title: "City", field: "city"},
            {title: "Country", field: "country"},  
            {title: "Postal Code", field: "postalCode"},
                 
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
          Contacts
        </Text>
        <Menu />
      </Flex>
      <Box>
        <Link href="contact/add">
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
              Add new Contact{' '}
              <span style={{ fontSize: '20px', fontWeight: 'bold' }}>+</span>
            </button>
          </div>
        </Link>

        {Contacts && (
          <CompactTable
            headers={Contacts.headers}
            data={Contacts.data}
            onUpdate={handleOnEdit}
          />
        )}
      </Box>
    </Card>
  );
};

export default Page;
