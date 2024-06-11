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
        </div>
    )
}

export default HeaderTitle