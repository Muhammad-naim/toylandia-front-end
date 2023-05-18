import { useEffect, useState } from 'react';
import Select from 'react-select'

const CategorizedToys = () => {
    const options = [
        { value: 'anime', label: 'anime' },
        { value: 'DC', label: 'DC' },
        { value: 'marvel', label: 'marvel' }
    ]
    const [option, setOption] = useState(null)
    const handleSelectChange = event => {
        const category = event.value;
        setOption(category);
    }
    useEffect(() => {
        fetch()
    },[])
    return (
        <div className='mt-8 container mx-auto'>
            <Select
                className='w-40'
                options={options}
                onChange={handleSelectChange}
            />
            <div>helo</div>

        </div>
    );
};

export default CategorizedToys;