import ICONS, { COLORS } from './icons';

type BlockIconProps = {
  icon:number,
  color:{bg:string,fg:string}
  scale?:number
}
export default function BlockIcon({ icon, color, scale }:BlockIconProps) {
  const Icon = ICONS[icon];
  return (
    <div
      style={{
        borderRadius: '50%',
        backgroundColor: color.bg,
        width: '56px',
        height: '56px',
        zoom: scale,
      }}
    >
      <Icon fill={color.fg} viewBox="-35 -15 170 170"></Icon>
    </div>
  );
}
export function* randomIconGenerator(length:number){
  const icon_index = Array.from(
    { length: ICONS.length - 1 },
    (value, index) => index
  ).sort(() => Math.random() - 0.5);
  const colors_index = Array.from(
    { length: COLORS.length - 1 },
    (value, index) => index
  ).sort(() => Math.random() - 0.5);
  for(let i = 0; i < length; i++) {
    yield {
      icon: icon_index[i % ICONS.length],
      color: COLORS[colors_index[i % COLORS.length]],
    }
  }

}