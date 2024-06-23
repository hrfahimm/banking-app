import React from 'react'

interface HeaderTitleProps {
    type?: 'title' | 'header';
    title: string;
    subtext?: string;
    user?: string;
}

const HeaderTitle: React.FC<HeaderTitleProps> = ({ type, title, subtext, user }) => {
    return (
        <div>
            HeaderTitle
            <h1>Hi  i am fahim</h1>
            <div className="m-3c"></div>
        </div>
    )
}

export default HeaderTitle










