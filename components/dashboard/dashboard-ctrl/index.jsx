import DCBtn from '../btn';

const DashboardCtrl = ({setContentChanger}) => {
    return (
        <div className='w-60 bg-zinc-200 flex flex-col gap-6 p-4'>
            <DCBtn title={"بنرهای تبلیعاتی"}  content={"midBan"} setContentChanger={setContentChanger} />
            <DCBtn title={" اسلایدرها"} content={'sliders'}  setContentChanger={setContentChanger}/>
        </div>
    );
};

export default DashboardCtrl;