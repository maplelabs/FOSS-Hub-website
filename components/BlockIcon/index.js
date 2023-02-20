import icons from './icons';
import dynamic from 'next/dynamic';


export default function BlockIcon({icon,color,scale }) {
    const ICON = icons[icon]
    return (
        <div style={{borderRadius:"50%",backgroundColor:color.bg,width:'56px',height:'56px',zoom:scale}}>
            <ICON fill={color.fg} viewBox="-35 -15 170 170"></ICON>
        </div>)

}