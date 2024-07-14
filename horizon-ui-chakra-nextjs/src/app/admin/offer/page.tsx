'use client';
import { useEffect, useState, useCallback } from 'react';
import { Flex, Box, Text, useColorModeValue } from '@chakra-ui/react';
import Card from 'components/card/Card';
import Menu from 'components/menu/MainMenu';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import CompactTable from 'components/common/compact-table/CompactTable';
import { deleteOffer, getByIdOffer, getOffer } from 'libs/endpoints/offer';

const Page = () => {
  const [Offers, setOffers] = useState<{
    headers: Array<{ title: string; field: string }>;
    data?: Array<any>;
  }>();
  const textColor = useColorModeValue('secondaryGray.900', 'white');
  const router = useRouter();

  const viewOfferDetails = async (id: string) => {
    router.push(`/admin/offer/${id}`);
  };

  const handleOnEdit = async (id: string) => {
    await getByIdOffer(id);
    router.push(`/admin/offer/update/${id}`);
  };

  const handleDelete = async (id: string) => {
    await deleteOffer(id);
    loadData();
    router.push(`/admin/offer`);
  };

  const loadData = useCallback(() => {
    getOffer().then((data: any) => {
      if (data) {
        setOffers((prev) => ({
          headers: [
            {title: 'id', field: 'id' },
            {title: "Offer Name", field: "offerName"},  
            {title: "Description", field: "offerDescription"},
            {title: "Start Date", field: "startDate"},
            {title: "End Date", field: "endDate"},           
            {title: "Discount", field: "discount"},   
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
      <Flex px="25px" mb="8px" justifyContent="space-between" align="center">
        <Text
          color={textColor}
          fontSize="22px"
          mb="4px"
          fontWeight="700"
          lineHeight="100%"
        >
          Offers
        </Text>
        <Menu />
      </Flex>
      <Box>
        <Link href="offer/add">
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
              Add new Offer{' '}
              <span style={{ fontSize: '20px', fontWeight: 'bold' }}>+</span>
            </button>
          </div>
        </Link>

        {Offers && (
          <CompactTable
            headers={Offers.headers}
            data={Offers.data}
            onDelete={handleDelete}
            onClick={viewOfferDetails}
            onUpdate={handleOnEdit}
          />
        )}
      </Box>
    </Card>
  );
};

export default Page;
