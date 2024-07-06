import { staticGenerationAsyncStorage } from "next/dist/client/components/static-generation-async-storage-instance";
import { useEffect, useState } from "react";

interface MovieDetailListProps {
    original_language: string;
    release_date: string;
    revenue: number | null;
    status: string;
    [key: string]: string | number | null;
}
const MovieDetailList = ({ details }: { details: MovieDetailListProps }) => {
    const [fields, setFields] = useState<MovieDetailListProps>({
        original_language: '',
        release_date: '',
        revenue: null,
        status: '',
    });
    useEffect(() => {
        details && Object.entries(fields).map(([key, value]) => {
            setFields((state) => ({ ...state, [key]: details[key] }));
        })
    }, [details])
    return (
        <ul>
            <li>Language: {fields.original_language}</li>
            <li>Relase Date: {fields.release_date}</li>
            <li>Revenue: {fields.revenue}</li>
            <li>Status: {fields.status}</li>
        </ul>
    )
};

export default MovieDetailList