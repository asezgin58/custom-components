import { FC } from 'react';
import { useSelector } from 'react-redux';
import { IStore } from '../../_store';
import { IAuthor, authorValue } from '../../_store/slices/author';

/**
 * Component File Description
 */
const Detail: FC<any> = () => {
    const author: IAuthor = useSelector<IStore, IAuthor>(authorValue);

    return (
        <>
            <h1>Author</h1>
            <div className='row mb-4'>
                <div className='col'>
                    {author && (
                        <>
                            <div>
                                <strong>Name : </strong>
                                {author.name}
                            </div>
                            <div>
                                <strong>Surname : </strong>
                                {author.surname}
                            </div>
                            <div>
                                <strong>Age : </strong>
                                {author.age}
                            </div>
                            <div>
                                <strong>Job : </strong>
                                {author.job}
                            </div>
                            <div>
                                <strong>Email : </strong>
                                {author.email}
                            </div>
                        </>
                    )}
                </div>
            </div>
        </>
    );
};

export default Detail;
