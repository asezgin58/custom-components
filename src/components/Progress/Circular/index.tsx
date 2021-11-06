import { FC } from 'react';
import { ICircularProgressProps } from './type';
import { IProgressLabel } from '../type';
import { CircularProgress, Box, Typography } from '@mui/material';
import { circularProgressClasses } from '@mui/material/CircularProgress';

/**
 * Component File Description
 */
const CustomCircularProgress: FC<ICircularProgressProps> = ({
    label,
    value,
    thickness,
    barColor,
    barBackgroundColor,
    rounded,
}: ICircularProgressProps) => {
    const size: number = ((label && (label as IProgressLabel).fontSize) || 0) * 4;
    const renderProgress = () => {
        return (
            <Box sx={{ position: 'relative', display: 'inline-flex' }}>
                <CircularProgress
                    variant='determinate'
                    sx={{
                        color: barBackgroundColor || 'transparent',
                    }}
                    {...(size !== 0 && { size: size })}
                    thickness={thickness}
                    value={100}
                />
                <CircularProgress
                    sx={{
                        ...(barColor && { color: barColor }),
                        ...(rounded && {
                            [`& .${circularProgressClasses.circle}`]: {
                                strokeLinecap: 'round',
                            },
                        }),
                        position: 'absolute',
                        left: 0,
                    }}
                    {...(size !== 0 && { size: size })}
                    {...(value && { variant: 'determinate' })}
                    value={value}
                    thickness={thickness}
                />
            </Box>
        );
    };

    return (
        <>
            {label ? (
                <>
                    <Box sx={{ position: 'relative', display: 'inline-flex' }}>
                        {renderProgress()}
                        <Box
                            sx={{
                                top: 0,
                                left: 0,
                                bottom: 0,
                                right: 0,
                                position: 'absolute',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}>
                            <Typography
                                variant='caption'
                                component='div'
                                color={(label as IProgressLabel).color || 'text.secondary'}
                                {...((label as IProgressLabel).fontSize && {
                                    fontSize: (label as IProgressLabel).fontSize,
                                })}
                                {...((label as IProgressLabel).fontWeight && {
                                    fontWeight: (label as IProgressLabel).fontWeight,
                                })}>{`${Math.round(value || 0)}%`}</Typography>
                        </Box>
                    </Box>
                </>
            ) : (
                renderProgress()
            )}
        </>
    );
};

export default CustomCircularProgress;
