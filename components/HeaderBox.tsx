

const HeaderBox = ({ type = "title", title, subtext, user }: HeaderBoxProps) => {
    return (
        <div className='heade-box'>

            <h1 className='header-box-title' >{title}

                {type === "greeting" && (
                    <span className='text-bankGradient'>
                        &nbsp;{user}

                    </span>
                )}
            </h1>
            <p className="hrader-box-subtext">{subtext}</p>
        </div>
    )
}

export default HeaderBox










