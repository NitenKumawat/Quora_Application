

const Filter = () => {
    const details = [
        {
            id: 1,
            src: "https://cdn.corporatefinanceinstitute.com/assets/finance-definition.jpg",
            title: 'Finance'
        },
        {
            id: 2,
            src: "https://static.vecteezy.com/system/resources/previews/000/302/562/original/healthy-lifestyle-vector-illustration.jpg",
            title: 'Healthy living'

        },
        {
            id: 3,
            src: "https://hranker.com/blog/wp-content/uploads/2021/03/government-of-india.jpg",
            title:  'Government of India',

        },

        {
            id: 4,
            src: "https://www.fintechfutures.com/files/2020/02/State-Bank-of-India-Logo-2.png",
            title: "State Bank of India (SBI)",

        },
        {
            id: 5,
            src: "https://egwtgphxxkn.exactdn.com/wp-content/uploads/2022/02/best-career-advice-The-Mason-Group.jpg",
            title: 'Career Advice',

        },
        {
            id: 6,
            src: "https://rukminim2.flixcart.com/image/850/1000/xif0q/poster/u/k/m/small-spos8969-poster-bjp-logo-bhartiya-janta-party-sl-9477-wall-original-imaghs5nxqb3jkpf.jpeg?q=20&crop=false",
            title: "Bharatiya Janta Party",

        },
        {
            id: 7,
            src: "https://th.bing.com/th/id/OIP.QdIrCNdF2ZVylABjjes1LAHaGq?rs=1&pid=ImgDetMain",
            title: "React Community",

        },
    ];

    // Handle the click event (example implementation)
    const handleClick = (id) => {
        console.log(`Space clicked: ${id}`);
    };

    return (
        <div className=" sm:pl-20 mt-1 text-sm">
            <button className="w-full bg-gray-200 text-gray-500 py-2 px-4 rounded hover:bg-gray-300 z-0">
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
