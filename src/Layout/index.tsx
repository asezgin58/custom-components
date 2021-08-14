import { FC, ReactNode } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

/**
 * Page layout Description
 */
const Layout: FC<any> = (props: { children: ReactNode }) => {
    return (
        <>
            <Header logo={'/images/logo.svg'} title={'React Custom Components App'} />
            <Sidebar />
            <div className='content p-3'>
                <div className='container-fluid'>{props.children}</div>
            </div>
        </>
    );
};

export default Layout;
