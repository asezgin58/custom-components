import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { scrollToTop } from '../../../_common/_helpers';

const ScrollPageTop = ({ children, scrollElement = 'root' }: any) => {
    const { pathname }: any = useLocation();

    useEffect(() => {
        scrollElement && scrollToTop(scrollElement);
    }, [pathname, scrollElement]);

    return children || null;
};

export default ScrollPageTop;
