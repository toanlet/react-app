import { useLocation, useNavigate, useParams } from 'react-router';

export const useRouter = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const params = useParams();

  return {
    location,
    navigate,
    params,
  };
};
