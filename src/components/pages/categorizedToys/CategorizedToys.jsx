import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'react-tabs/style/react-tabs.css';
import ToyCard from '../../shared/toyCard/ToyCard';
const CategorizedToys = () => {
    const [option, setOption] = useState(null);
    const [toysData, setToysData] = useState([]);
    const [categorizedData, setCategorizedData] = useState([])

    useEffect(() => {
        fetch('https://toylandia-server.vercel.app/all-toys')
            .then(res => res.json())
            .then(data => {
                setToysData(data);
                setCategorizedData(data)
            })
            .catch(error => console.log(error.message))
    }, [])
    useEffect(() => {
        const filteredData = toysData?.filter(data => data.category === option);
        setCategorizedData(filteredData);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [option])

    const handleTabsEvent = event => {
        if (event === 0) {
            setCategorizedData(toysData)
            return;
        }
        const options = ["anime", "DC", "marvel"]
        setOption(options[event - 1])
    }
    const notify = () => {
        return toast.info('please login first', {
            position: "top-right",
            autoClose: true,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
    };
    return (
        <div className='mt-8 container mx-auto'>
            <ToastContainer />
            <h1 className='text-5xl font-heading font-bold text-center mb-8 text-[#F379A7]'>Products by categories</h1>
            <Tabs onSelect={event => handleTabsEvent(event)} selectedTabClassName='delay-100 text-[#F379A7] shadow  border-b-1 '>
                <TabList  className={'flex '} >
                    <Tab>All</Tab>
                    <Tab>Anime character</Tab>
                    <Tab>DC character</Tab>
                    <Tab>Marvel character</Tab>
                </TabList>

                <TabPanel >
                    <div>
                        <div className="overflow-x-auto w-full">
                            <table className="table w-full">
                                <tbody>
                                    <tr>
                                        <ToyCard
                                            categorizedData={categorizedData}
                                            toast={notify}
                                        />
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div>
                        <div className="overflow-x-auto w-full">
                            <table className="table w-full">
                                <tbody>
                                    <tr>
                                        <ToyCard
                                            categorizedData={categorizedData}
                                        />
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div>
                        <div className="overflow-x-auto w-full">
                            <table className="table w-full">
                                <tbody>
                                    <tr>
                                        <ToyCard
                                            categorizedData={categorizedData}
                                        />
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div>
                        <div className="overflow-x-auto w-full">
                            <table className="table w-full">
                                <tbody>
                                    <tr>
                                        <ToyCard
                                            categorizedData={categorizedData}
                                        />
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </TabPanel>

            </Tabs>


        </div>
    );
};

export default CategorizedToys;