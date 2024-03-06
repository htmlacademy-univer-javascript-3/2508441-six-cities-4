import MainPage from '../../pages/main-page/main-page';

function App({offersAmount}: AppProps): JSX.Element {
  return (
    <MainPage offersAmount={offersAmount} />
  );
}

type AppProps = {
  offersAmount: number;
}

export default App;
