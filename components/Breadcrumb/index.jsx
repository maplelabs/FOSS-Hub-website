import Link from 'next/link'
const Breadcrumb = ({link, heading, child}) => {
    return (
        <div className=" uk-section uk-section-muted uk-height-1-1">
            <div className="uk-container">
                <nav aria-label="Breadcrumb">
                    <ul className="uk-breadcrumb">
                        <li><Link href="/">Home</Link></li>
                        <li><Link href={link}>{heading}</Link></li>
                    </ul>
                </nav>
              {child}
            </div>
        </div>
    )
}

export default Breadcrumb;