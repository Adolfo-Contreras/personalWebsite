import { nextLink} from 'next/link'
import { Link } from '@mui/material';
import Typography from '@mui/material/Typography'
export default function About() {
  return (
    <main>
      <Typography variant="h3">About Me</Typography>
      <Typography variant='body1'>Hello, my name is Adolfo A. Alvarado Contreras</Typography>
      <Link component={nextLink} href='/Contact' underline="hover">contact me</Link>
    </main>
  );
}
