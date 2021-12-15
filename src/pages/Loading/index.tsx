import { FC } from 'react';
import { Progress } from '../../components';
import { EnumProgressType } from '../../components/Progress/type';
import logoGif from '../../_assets/images/seker_logo.gif';

/**
 * Component File Description
 */
const ProgressExample: FC<any> = () => {
    return (
        <>
            <h1>Loading</h1>
            <div className='row mb-4'>
                <div className='col'>
                    <h4>Loading Button - Default</h4>
                    <div className={'py-2'}>
                        <Progress
                            type={EnumProgressType.CIRCULAR}
                            // value={80}
                            // label={{ fontSize: 15 }}
                            // label
                            rounded
                            thickness={5}
                            barColor={'#7db900'}
                            barBackgroundColor={'#eaeaea'}
                        />
                    </div>
                </div>
                <div className='col'>
                    <h4>Loading Button - with Custom</h4>
                    <div className={'py-2'}>
                        <Progress
                            type={EnumProgressType.CIRCULAR}
                            // value={80}
                            // label={{ fontSize: 15 }}
                            // label
                            rounded
                            thickness={5}
                            barColor={'transparent'}
                            childNode={<img style={{ height: 45 }} src={logoGif}></img>}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProgressExample;
