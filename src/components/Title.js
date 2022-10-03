function Title(props) {
    const { mainTxt } = props;


    return ( 
        <>
        <div className="bg-dark h-5 p-3 text-center mb-5">
            <h1 className="main-title text-white mb-4">
                {mainTxt}
            </h1>
            {
                props.children
            }
        </div>
        
        </>
     );
}

export default Title;