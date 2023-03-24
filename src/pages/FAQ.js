import { useState } from 'react';

const data = [
    {
        title: 'Question 1',
        content: 'Answer 1',
    },
    {
        title: 'Question 2',
        content: 'Answer 2',
    },
    {
        title: 'Question 3',
        content: 'Answer 3',
    },
    {
        title: 'Question 4',
        content: 'Answer 4',
    },
    {
        title: 'Question 5',
        content: 'Answer 5',
    },
    {
        title: 'Question 6',
        content: 'Answer 6',
    },
    {
        title: 'Question 7',
        content: 'Answer 7',
    },

];

function Accordion({ title, content, index, activeIndex, setActiveIndex }) {
    const isActive = activeIndex === index;

    const handleClick = () => {
        setActiveIndex(isActive ? null : index);
    };

    const handleToggle = () => {
        return isActive
            ? { maxHeight: '500px', overflow: 'visible' }
            : { maxHeight: '0', overflow: 'hidden' };
    };

    const handleRotate = () => {
        return isActive ? 'transform rotate-180' : 'transform rotate-0';
    };

    return (
        <li className="bg-white my-2 shadow-xl " key={index}>
            <h2
                onClick={handleClick}
                className="flex flex-row justify-between items-center font-semibold p-3 cursor-pointer"
            >
                <span>{title}</span>
                <svg
                    className={`fill-current text-purple-700 h-6 w-6 transform transition-transform duration-500 ${handleRotate()}`}
                    viewBox="0 0 20 20"
                >
                    <path d="M13.962,8.885l-3.736,3.739c-0.086,0.086-0.201,0.13-0.314,0.13S9.686,12.71,9.6,12.624l-3.562-3.56C5.863,8.892,5.863,8.611,6.036,8.438c0.175-0.173,0.454-0.173,0.626,0l3.25,3.247l3.426-3.424c0.173-0.172,0.451-0.172,0.624,0C14.137,8.434,14.137,8.712,13.962,8.885 M18.406,10c0,4.644-3.763,8.406-8.406,8.406S1.594,14.644,1.594,10S5.356,1.594,10,1.594S18.406,5.356,18.406,10 M17.521,10c0-4.148-3.373-7.521-7.521-7.521c-4.148,0-7.521,3.374-7.521,7.521c0,4.147,3.374,7.521,7.521,7.521C14.148,17.521,17.521,14.147,17.521,10"></path>
                </svg>
            </h2>
            <div
                style={handleToggle()}
                className="border-l-2 border-purple-600 overflow-hidden max-h-0 duration-500 transition-all"
            >
                <p className="p-3 text-gray-900">{content}</p>
            </div>
        </li>
    );
}

function FAQ() {
    const [activeIndex, setActiveIndex] = useState(null);

    return (
        <div className="min-h-screen ">
            <main className="p-5 bg-light-blue ">
                <div className="flex justify-center items-start my-2 ">
                    <div className="w-full sm:w-10/12 md:w-1/2 my-1 ">
                        <h2 className="text-xl font-semibold text-vnet-blue mb-2 font-WorkSans">FAQ</h2>

                        <ul className="flex flex-col font-WorkSans ">
                            {data.map((item, index) => (
                                <Accordion
                                    key={index}
                                    title={item.title}
                                    content={item.content}
                                    activeIndex={activeIndex}
                                    index={index}
                                    setActiveIndex={setActiveIndex}
                                />
                            ))}
                        </ul>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default FAQ;