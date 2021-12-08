import 'tailwindcss/tailwind.css';
import Main from '../components/layouts/main';
import './global.css';

function MyApp({Component, pageProps}) {
    return (
            <Main>
                <Component {...pageProps} />
            </Main>
    )
}

export default MyApp
