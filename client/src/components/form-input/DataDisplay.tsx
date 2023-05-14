import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Data {
    id: number;
    name: string;
    age: number;
}

interface DataDisplayProps {
    jwtToken: string;
}

const DataDisplay: React.FC<DataDisplayProps> = ({ jwtToken }) => {
    const [data, setData] = useState<Data[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3001/data', {
                    headers: { Authorization: `Bearer ${jwtToken}` },
                });
                setData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [jwtToken]);

    return (
        <div>
            <h2>Data Display</h2>
            <ul>
                {data.map((item) => (
                    <li key={item.id}>
                        Name: {item.name}, Age: {item.age}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DataDisplay;
