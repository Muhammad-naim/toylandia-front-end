import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Rating, ThinStar } from '@smastrom/react-rating';

import 'react-tabs/style/react-tabs.css';
const CategorizedToys = () => {
    const [option, setOption] = useState(null);
    const [toysData, setToysData] = useState([]);
    const [categorizedData, setCategorizedData] = useState([])
    const star = { itemShapes: ThinStar, activeFillColor: '#f59e0b', inactiveFillColor: '#ffedd5' }

    useEffect(() => {
        fetch('https://toylandia-server.vercel.app/toys')
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
    return (
        <div className='mt-8 container mx-auto'>
            <h1 className='text-5xl font-heading font-bold text-center mb-8 text-[#F379A7]'>Products by categories</h1>
            <Tabs onSelect={event => handleTabsEvent(event)} selectedTabPanelClassName=''>
                <TabList selectedTab>
                    <Tab>All</Tab>
                    <Tab>Anime character</Tab>
                    <Tab>DC character</Tab>
                    <Tab>Marvel character</Tab>
                </TabList>

                <TabPanel className=''>
                    <div>
                        <div className="overflow-x-auto w-full">
                            <table className="table w-full">
                                <tbody>
                                    <div>
                                        {
                                            categorizedData.map(toy => {
                                                return (
                                                    <div
                                                        key={toy._id}
                                                        className="grid grid-cols-4 gap-3 py-2 hover:shadow-lg"
                                                    >
                                                        <div className="col-span-1 p-1 max-h-40">
                                                            <img src={toy.photoURL} className="max-h-full" />
                                                        </div>
                                                        <div className="col-span-2 my-auto">
                                                            <p className="font-semibold">{toy.name}</p>
                                                            <p><small>${toy.price}</small></p>
                                                            <Rating
                                                                style={{ maxWidth: 80 }}
                                                                value={toy.rating}
                                                                itemStyles={star}
                                                                readOnly
                                                            />
                                                        </div>
                                                        <div className="col-span-1 h-full flex flex-col justify-around my-auto">
                                                            <div className="flex ">
                                                                <button className=" border px-1 rounded bg-[#95B3E0] hover:bg-[#F379A7] ">Details</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
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
                                    <div>
                                        {
                                            categorizedData.map(toy => {
                                                return (
                                                    <div
                                                        key={toy._id}
                                                        className="grid grid-cols-4 gap-3 py-2 hover:shadow-lg"
                                                    >
                                                        <div className="col-span-1 p-1 max-h-40">
                                                            <img src={toy.photoURL} className="max-h-full" />
                                                        </div>
                                                        <div className="col-span-2 my-auto">
                                                            <p className="font-semibold">{toy.name}</p>
                                                            <p><small>${toy.price}</small></p>
                                                            <Rating
                                                                style={{ maxWidth: 80 }}
                                                                value={toy.rating}
                                                                itemStyles={star}
                                                                readOnly
                                                            />
                                                        </div>
                                                        <div className="col-span-1 h-full flex flex-col justify-around my-auto">
                                                            <div className="flex ">
                                                                <button className=" border px-1 rounded bg-[#95B3E0] hover:bg-[#F379A7] ">Details</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
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
                                    <div>
                                        {
                                            categorizedData.map(toy => {
                                                return (
                                                    <div
                                                        key={toy._id}
                                                        className="grid grid-cols-4 gap-3 py-2 hover:shadow-lg"
                                                    >
                                                        <div className="col-span-1 p-1 max-h-40">
                                                            <img src={toy.photoURL} className="max-h-full" />
                                                        </div>
                                                        <div className="col-span-2 my-auto">
                                                            <p className="font-semibold">{toy.name}</p>
                                                            <p><small>${toy.price}</small></p>
                                                            <Rating
                                                                style={{ maxWidth: 80 }}
                                                                value={toy.rating}
                                                                itemStyles={star}
                                                                readOnly
                                                            />
                                                        </div>
                                                        <div className="col-span-1 h-full flex flex-col justify-around my-auto">
                                                            <div className="flex ">
                                                                <button className=" border px-1 rounded bg-[#95B3E0] hover:bg-[#F379A7] ">Details</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
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
                                    <div>
                                        {
                                            categorizedData.map(toy => {
                                                return (
                                                    <div
                                                        key={toy._id}
                                                        className="grid grid-cols-4 gap-3 py-2 hover:shadow-lg"
                                                    >
                                                        <div className="col-span-1 p-1 max-h-40">
                                                            <img src={toy.photoURL} className="max-h-full" />
                                                        </div>
                                                        <div className="col-span-2 my-auto">
                                                            <p className="font-semibold">{toy.name}</p>
                                                            <p><small>${toy.price}</small></p>
                                                            <Rating
                                                                style={{ maxWidth: 80 }}
                                                                value={toy.rating}
                                                                itemStyles={star}
                                                                readOnly
                                                            />
                                                        </div>
                                                        <div className="col-span-1 h-full flex flex-col justify-around my-auto">
                                                            <div className="flex ">
                                                                <button className=" border px-1 rounded bg-[#95B3E0] hover:bg-[#F379A7] ">Details</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
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