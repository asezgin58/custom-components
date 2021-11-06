import { FC } from 'react';
import { Progress } from '../../components';
import { EnumProgressType } from '../../components/Progress/type';

/**
 * Component File Description
 */
const ProgressExample: FC<any> = () => {
    return (
        <>
            <h1>Progress</h1>
            <div className='row mb-4'>
                <div className='col'>
                    <h4>Circular Progress</h4>
                    <div className={'py-2'}>
                        <Progress
                            type={EnumProgressType.CIRCULAR}
                            value={80}
                            label={{ fontSize: 15 }}
                            // label
                            rounded
                            thickness={5}
                            barColor={'#7db900'}
                            barBackgroundColor={'#eaeaea'}
                        />
                    </div>
                </div>
                <div className='col'>
                    <h4>Linear Progress</h4>
                    <div className={'py-2'}>
                        <Progress
                            type={EnumProgressType.LINEAR}
                            value={40.5}
                            thickness={10}
                            // label
                            label={{ fontSize: 15 }}
                            rounded
                            barColor={'#7db900'}
                            barBackgroundColor={'#eaeaea'}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProgressExample;
