
const LimitProduct = (props) => {

    return (
        <>
            <div className='h-12 z-20 leading-12 text-white font-semibold bottom-36 text-center absolute left-0 right-0 ' style={{ 'background-color': '#141613b3' }}>
                <span> {props.soLuong === 0 ? 'Đẫ hết' : 'Sắp hết'}</span>
            </div>
        </>
    )
}

export default LimitProduct