import { GetServerSideProps, NextPage } from 'next';
import { useEffect, useState } from 'react';
import authMiddleware from '../middlewares/authMiddleware';


const GetStarted = () => {
  
  return (
    <>
    </>
  )
} 

export const getServerSideProps: GetServerSideProps = async (context: any) => {
  const authResult = await authMiddleware(context.req, context.res);

  if (authResult.props.user) {
    return { props: { user: authResult.props.user } };
  } else {
    return { props: {} };
  }
};

export default GetStarted;
