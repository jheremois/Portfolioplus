import { GetServerSideProps, GetServerSidePropsContext, NextPage } from 'next';
import { ServerResponse } from 'http';
import { IncomingMessage } from 'http';
import jwt from 'jsonwebtoken';
import enviroments from '../config/enviroments';

export const withAuth = (WrappedComponent: any) => {
  const AuthenticatedComponent: any = (props: any) => {
    return <WrappedComponent {...props} />;
  };

  AuthenticatedComponent.getServerSideProps = async (context: GetServerSidePropsContext) => {
    const token = context.req.cookies?.token;

    if (!token) {
      context.res.setHeader('location', '/');
      context.res.statusCode = 302;
      context.res.end();
      return { props: {} };
    }

    try {
      const decoded = jwt.verify(token, enviroments.jwt.secret);
      return { props: { user: decoded } };
    } catch (err) {
      context.res.setHeader('location', '/');
      context.res.statusCode = 302;
      context.res.end();
      return { props: {} };
    }
  };

  return AuthenticatedComponent;
};
