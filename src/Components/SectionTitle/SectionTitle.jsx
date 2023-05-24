
const SectionTitle = ({subTitle,title}) => {
    return (
        <section className="mx-auto text-center md:w-4/12 my-8">
            <p className="text-yellow-600 mb-2">---{subTitle}---</p>
            <h2 className="border-y-4 py-4 text-4xl uppercase">{title}</h2>
            
        </section>
    );
};

export default SectionTitle;