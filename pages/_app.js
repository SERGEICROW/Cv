import 'tailwindcss/tailwind.css'
import Main from '../components/layouts/main'

function MyApp({Component, pageProps}) {
    return (
        <div>
            <Main>
                <Component {...pageProps} />
            </Main>
        </div>
    )
}

export default MyApp
