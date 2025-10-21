const InfoElem = ({text, info, icon}: any) => {
    return <div className='w-full flex items-center justify-between bg-[#2a2a2a] p-4 rounded-lg hover:bg-[#4a4a4a] hover:scale-105 transition-all'>
        {icon}
        <div className='text-right'>
            <h1 className='text-xl text-red-500'>{text}</h1>
            <p>{info}</p>
        </div>
    </div>;
}

export default InfoElem;