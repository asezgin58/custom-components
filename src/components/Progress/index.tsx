import { FC } from 'react';
import { EnumProgressType, IProgressProps } from './type';
import CircularProgress from './Circular';
import LinearProgress from './Linear';

/**
 * Component File Description
 */
const Progress: FC<IProgressProps> = ({ type, ...others }: IProgressProps) => {
    return (
        <>
            {type === EnumProgressType.CIRCULAR && <CircularProgress {...others} />}
            {type === EnumProgressType.LINEAR && <LinearProgress {...others} />}
        </>
    );
};

export default Progress;
