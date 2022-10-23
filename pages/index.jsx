import Image from 'next/image';
import { Flex, Box, Text, Button } from '@chakra-ui/react';
import { baseUrl, fetchApi } from '../utils/fetchApi';
import Property from '../components/Property';
import Banner from '../components/Banner';

export default function Home({ propertyForRent, propertyForSale }) {
  return (
    <div className="">
      <Banner />
      {propertyForRent.map((property) => (
        <Property property={property} key={property.id} />
      ))}
      <Banner />
      {propertyForSale.map((property) => (
        <Property property={property} key={property.id} />
      ))}
    </div>
  );
}

export async function getStaticProps() {
  const propertyForSale = await fetchApi(
    `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=10`
  );
  const propertyForRent = await fetchApi(
    `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=10`
  );

  return {
    props: {
      propertyForRent: propertyForRent?.hits,
      propertyForSale: propertyForSale?.hits,
    },
  };
}
