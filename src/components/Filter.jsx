import finance from "../assets/finance.jpg"
import living from "../assets/living.jpg"
import science from "../assets/science.jpg"

const Filter = () => {
    const details = [
        {
            id: 1,
            src: finance,
            title: 'Finance'
        },
        {
            id: 2,
            src: living,
            title: 'Healthy living'

        },
        {
            id: 3,
            src: science,
            title: 'Science'

        },
    ];

    // Handle the click event (example implementation)
    const handleClick = (id) => {
        console.log(`Space clicked: ${id}`);
    };

    return (
        <div className="pl-4 sm:pl-20 pt-5 text-sm">
            <button className="bg-gray-200 text-gray-500 py-2 px-4 rounded hover:bg-gray-300 z-0">
                + Create Space
            </button>
            
            <div className="mt-5 space-y-3 sm:space-y-4">
                {details.map((detail) => (
                    <div 
                        key={detail.id} 
                        className="flex items-center cursor-pointer hover:bg-gray-300 p-2 rounded-lg"
                        onClick={() => handleClick(detail.id)}
                    >
                        <img src={detail.src} alt="Detail" className="w-6 h-6 rounded-sm sm:w-8 sm:h-8" />
                        <h1 className="ml-3 text-gray-500 text-xs sm:text-sm">{detail.title}</h1>
                    </div>
                ))}
            </div>
            
            <hr className="mt-5" />

            <div className="mt-5 text-xs sm:text-sm text-gray-400">
                <h1>About . Careers . </h1>
                <h1>Terms . Policies .</h1>
                <h1>Acceptable use</h1>
            </div>
        </div>
    );
}

export default Filter;
