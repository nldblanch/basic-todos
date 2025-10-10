import { useNavigate } from 'react-router';
import Button from './Button';

interface BackButtonProps {}

function BackButton({}: BackButtonProps) {
  const navigate = useNavigate();
  return (
    <>
      <Button onClick={() => navigate(-1)}>Go back</Button>
    </>
  );
}

export default BackButton;
