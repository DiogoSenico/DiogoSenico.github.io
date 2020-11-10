import Main from './Main';
import UnderConstruction from './UnderConstruction';

export default function Home() {
  console.log(process.env.NEXT_PUBLIC_UNDER_CONSTRUCTION);
  if (process.env.NEXT_PUBLIC_UNDER_CONSTRUCTION) {
    return <UnderConstruction />;
  } else {
    return <Main />;
  }
}
