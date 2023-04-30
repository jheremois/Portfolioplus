import { GetServerSidePropsContext } from 'next';
import { ServerResponse } from 'http';
import { IncomingMessage } from 'http';
import jwt from 'jsonwebtoken';
import enviroments from '../config/enviroments';

export interface AuthMiddlewareResult {
  props: {
    user?: any;
  };
}

const authMiddleware = async (
  req: IncomingMessage & { cookies: { token?: string } },
  res: ServerResponse,
): Promise<AuthMiddlewareResult> => {
  const token = req.cookies.token;

  if (!token) {
    res.setHeader('location', '/');
    res.statusCode = 302;
    res.end();
    return { props: {} };
  }

  try {
    const decoded = jwt.verify(token, enviroments.jwt.secret);
    return { props: { user: decoded } };
  } catch (err) {
    res.setHeader('location', '/');
    res.statusCode = 302;
    res.end();
    return { props: {} };
  }
};

export default authMiddleware;
