import useTitle from "../../../hooks/useTitle";

const Blogs = () => {
    useTitle('Blog')
    return (
        <div className="container mx-auto">
            <div className="my-3">
                <h3 className="text-xl font-semibold">What is an access token and refresh token? How do they work and where should we store them on the client-side?</h3>
                <p><span className="font-semibold">Answer: </span>Access token is a credential that is used to authorize client on server side. it contains information about user and the access of him/her. Refresh token is a cradential that has longer life time than access token. it is used to request for access token when it is expired. <br />
                token credentials are usually stored in user's browser's local storage or as HTTO coockies.
                </p>
            </div>          
            <div className="my-3">
                <h3 className="text-xl font-semibold">Compare SQL and NoSQL databases?</h3>
                <p><span className="font-semibold">Answer: </span>SQL databases use SQL query laanguage and they have strong data consistency. these databases are more suitable for complex and analytical systems. <br />
                NoSQL databases use variious query language and have schema-less data models. these databases prioritize scalability and are more suitable for handling large volume of unstructured data.  
                </p>
            </div>          
            <div className="my-3">
                <h3 className="text-xl font-semibold">What is express js? What is Nest JS?</h3>
                <p><span className="font-semibold">Answer: </span>Express.js is a minimalistic and flexible web application framework for Node.js. It provides a robust set of features for building web applications and APIs. Express.js simplifies the process of handling HTTP requests, routing, middleware integration, and managing server-side logic. <br />
                NestJS is a nodeJS framework that is build for creating efficient, scalable, and enterprise-grade backend applications using Node. js.
                </p>
            </div>          
            <div className="my-3">
                <h3 className="text-xl font-semibold">What is MongoDB aggregate and how does it work?</h3>
                <p><span className="font-semibold">Answer: </span>Aggregate function is a powerful method for performing advanced data analysis and aggregation operations on collections. It allows you to process and transform data using a pipeline of stages.<br />
                The aggregate function works by taking an array of stages as its argument. Each stage represents a specific operation or transformation to be applied to the data. The stages are executed in order, with the output of one stage becoming the input for the next stage.
                </p>
            </div>          
                      
        </div>
    );
};

export default Blogs;