import './assets/css/app.css'
import ContainerComponent from './components/ContainerComponent'
import ThemeComponent from './components/ThemeComponent'
import LinkComponent, { LinkProps } from './components/LinkComponent'

function App() {
    
    const links: LinkProps[] = [
        {
            href: 'https://api.whatsapp.com/send?phone=+555199817114&text=Ol%C3%A1,%20vim%20do%20Instagram,%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es',
            icon: 'whatsapp',
            label: 'WhatsApp Porto Alegre',
        },
        {
            href: 'https://api.whatsapp.com/send?phone=+554896030913&text=Ol%C3%A1,%20vim%20do%20Instagram,%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es',
            icon: 'whatsapp',
            label: 'WhatsApp Florianópolis',
        },
        {
            href: 'https://soumegamodel.com.br/?utm_source=links&utm_medium=website&utm_campaign=links-sul',
            icon: 'website',
            label: 'Seja Mega Model Sul!'
        },
        {
            href: 'https://vitrinemegamodel.com.br/?utm_source=links&utm_medium=website&utm_campaign=links-sul',
            icon: 'users',
            label: 'Vitrine',
        },
    ]

    return (
        <div className='w-full font-poppins'>
            <div className="absolute top-4 right-4 lg:top-8 lg:right-8 z-10">
                <ThemeComponent />
            </div>
            
            <ContainerComponent>
                <div className=' py-20 lg:py-12'>
                    <div className="w-full mb-8 lg:mb-10 relative text-black dark:text-white flex items-center justify-center flex-col gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="689" height="161" viewBox="0 0 689 161"
                             fill="none" className='w-full max-w-full'>
                            <path
                                d="M0 0H478.567L518.447 75.8395L516.75 0H634.695L689 161H597.36L570.207 73.7211L571.055 161H498.931L443.777 77.1105L472.203 161H54.3054L0 0Z"
                                fill="currentColor"/>
                        </svg>
                        <h1 className='text-xl lg:text-3xl font-bold'>{import.meta.env.VITE_APP_NAME ?? 'Mega Model'}</h1>
                        <p className='lg:text-lg text-center'>{import.meta.env.VITE_APP_DESCRIPTION ?? 'A Maior Vitrine de Talentos da América Latina'}</p>
                    </div>

                    {links && (
                        <div className='text-slate-900 dark:text-white'>
                            {links.map((link, index) => (
                                <div key={index} className='mb-4'>
                                <LinkComponent href={link.href} label={link.label} icon={link.icon}/>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </ContainerComponent>

            {import.meta.env.VITE_APP_PRIVACY_POLICY_URL && (
                <a
                    href={import.meta.env.VITE_APP_PRIVACY_POLICY_URL}
                    target='_blank'
                    className='w-full flex items-center justify-center bg-black bg-opacity-10 hover:bg-opacity-20 p-4 text-center text-slate-700 dark:text-white'
                >Política de Privacidade</a>
            )}
        </div>
    )
}

export default App
